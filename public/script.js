/* Ebenezer Ojeba — site script (vanilla JS, no dependencies). Loaded with
   `defer` on every page. */

/* ------------------------------------------------------------------
   Contact form settings
   ------------------------------------------------------------------
   FORM_ENDPOINT: paste your form service URL here to deliver enquiries
   by email, for example a Formspree endpoint ("https://formspree.io/f/abcdwxyz").
   While it is empty, the forms open WhatsApp with the enquiry pre-filled
   instead, so no message is ever lost or falsely reported as sent. */
var FORM_ENDPOINT = "";
var WHATSAPP_NUMBER = "2348021173127"; // international format, no "+"

(function () {
  "use strict";
  var doc = document.documentElement;
  doc.classList.add("js");

  /* ---------- Mobile navigation ---------- */
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("site-nav");
  if (toggle && nav) {
    var setOpen = function (open) {
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
      nav.classList.toggle("is-open", open);
    };
    toggle.addEventListener("click", function () {
      setOpen(toggle.getAttribute("aria-expanded") !== "true");
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") {
        setOpen(false);
        toggle.focus();
      }
    });
    nav.addEventListener("click", function (e) {
      if (e.target.closest("a")) setOpen(false);
    });
    document.addEventListener("click", function (e) {
      if (!nav.contains(e.target) && !toggle.contains(e.target)) setOpen(false);
    });
    window.matchMedia("(min-width: 60em)").addEventListener("change", function () { setOpen(false); });
  }

  /* ---------- Reveal on scroll ---------- */
  var revealEls = document.querySelectorAll("[data-reveal]");
  if ("IntersectionObserver" in window && revealEls.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.05 });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("is-visible"); });
  }

  /* ---------- Enquiry forms ---------- */
  var forms = document.querySelectorAll("form[data-enquiry-form]");
  forms.forEach(setupForm);

  function setupForm(form) {
    var status = form.querySelector(".form-status");
    var submit = form.querySelector('[type="submit"]');
    var started = Date.now();

    // Pre-select a project type from ?service=<slug> (used by service pages).
    var select = form.querySelector('select[name="project_type"]');
    var wanted = new URLSearchParams(window.location.search).get("service");
    if (select && wanted) {
      Array.prototype.forEach.call(select.options, function (o) {
        if (o.dataset.slug === wanted) select.value = o.value;
      });
    }

    // Clear a field's error as soon as the user fixes it.
    form.addEventListener("input", function (e) {
      if (e.target.getAttribute("aria-invalid") === "true" && e.target.checkValidity()) {
        showFieldError(e.target, "");
      }
    });

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      setStatus("", "");

      if (!validate(form)) {
        setStatus("error", "Please correct the highlighted fields and try again.", false);
        return;
      }

      var data = new FormData(form);
      // Spam traps: a filled hidden field or an instant submission is a bot.
      if (data.get("_gotcha") || Date.now() - started < 2500) {
        setStatus("error", "Your message could not be sent. Please try again in a moment.");
        return;
      }
      data.delete("_gotcha");

      if (!FORM_ENDPOINT) {
        sendViaWhatsApp(data);
        return;
      }

      setBusy(true);
      fetch(FORM_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" }
      })
        .then(function (res) {
          return res.json().catch(function () { return {}; }).then(function (body) {
            var ok = res.ok && body.ok !== false && body.success !== false;
            if (!ok) throw new Error("Delivery failed");
          });
        })
        .then(function () {
          form.reset();
          setStatus("ok", "Thank you. Your message has been sent and I'll reply to you by email.");
        })
        .catch(function () {
          setStatus("error",
            'Sorry, your message could not be sent. Nothing was delivered. Please try again, or <a href="' +
            whatsappUrl(data) + '" target="_blank" rel="noopener">send it on WhatsApp</a> instead.');
        })
        .then(function () { setBusy(false); });
    });

    function sendViaWhatsApp(data) {
      var url = whatsappUrl(data);
      var win = window.open(url, "_blank", "noopener");
      setStatus("info",
        (win !== null
          ? "WhatsApp has opened in a new tab with your enquiry filled in. Press <strong>Send</strong> in WhatsApp to deliver it. "
          : "") +
        'If WhatsApp didn\'t open, <a href="' + url + '" target="_blank" rel="noopener">open it here</a>.');
    }

    function setBusy(busy) {
      if (!submit) return;
      submit.disabled = busy;
      submit.setAttribute("aria-busy", String(busy));
      submit.dataset.label = submit.dataset.label || submit.textContent;
      submit.textContent = busy ? "Sending…" : submit.dataset.label;
    }

    function setStatus(kind, html, moveFocus) {
      if (!status) return;
      status.className = "form-status" + (kind ? " form-status--" + kind : "");
      status.innerHTML = html;
      if (html && moveFocus !== false) status.focus();
    }
  }

  function validate(form) {
    var firstInvalid = null;
    form.querySelectorAll("input, select, textarea").forEach(function (field) {
      if (field.name === "_gotcha" || field.type === "hidden") return;
      var msg = "";
      if (!field.checkValidity()) {
        var label = (form.querySelector('label[for="' + field.id + '"]') || {}).textContent || "This field";
        label = label.replace(/\s*\*\s*$/, "").trim();
        if (field.validity.valueMissing) msg = field.type === "checkbox" ? "Please tick this box to continue." : label + " is required.";
        else if (field.validity.typeMismatch) msg = "Please enter a valid email address.";
        else if (field.validity.tooShort) msg = label + " should be at least " + field.minLength + " characters.";
        else msg = field.validationMessage;
      }
      showFieldError(field, msg);
      if (msg && !firstInvalid) firstInvalid = field;
    });
    if (firstInvalid) firstInvalid.focus();
    return !firstInvalid;
  }

  function showFieldError(field, msg) {
    var err = document.getElementById(field.id + "-error");
    if (msg) field.setAttribute("aria-invalid", "true");
    else field.removeAttribute("aria-invalid");
    if (err) err.textContent = msg;
  }

  function whatsappUrl(data) {
    var lines = ["Hello Ebenezer, I'd like to discuss a project.", ""];
    var labels = {
      name: "Name", email: "Email", company: "Company", project_type: "Project type",
      budget: "Budget", timeline: "Timeline", message: "Details"
    };
    Object.keys(labels).forEach(function (k) {
      var v = data.get(k);
      if (v) lines.push(labels[k] + ": " + String(v).trim());
    });
    return "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(lines.join("\n"));
  }
})();
