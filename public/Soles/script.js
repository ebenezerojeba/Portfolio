/*SWIPER fUNXTION*/
var swiper = new Swiper(".home", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
/*NAVBAR*/
  const bar = document.getElementById('bar');
  const close = document.getElementById('close');
  const nav = document.getElementById('navbar');

  if (bar) {
    bar.addEventListener('click', () =>{
      nav.classList.add('active');
    })
  }
  if(close) {
    close.addEventListener('click', () => {
      nav.classList.remove('active');
    })
  }; 
// AddToCart
 const product =[
  {
    id: 0,
    image: 'images/Black and Orange Shoe Brand Logo.png',
    title: 'HalfShoe',
    price: 120,
  },
  {
    id: 1,
    image: 'images/Black and Orange Shoe Brand Logo.png',
    title: 'Coproate shoe',
    price: 60,
  },
  {
    id: 2,
    image: 'images/Black and Orange Shoe Brand Logo.png',
    title: 'Slides',
    price: 60,
  },
  {
    id: 3,
    image: 'images/Black and Orange Shoe Brand Logo.png',
    title: 'Slide',
    price: 650, 
  }
 ];
 const categories = [...new Set(product.map((item)=>
  {return item}))]
  let i = 0;
  document.getElementById('cart').innerHTML = categories.map((item)=>
  {
    var {image, title, price} = item;
    return(
      `<div class='box'>
      <div class='img-box'>
      <img class='images' src=${images}></img>
      </div>
      <div class='bottom'>
      <p>${title}</p>
      <h2>${price}.00</h2>` +
      "<button onclick='addtocart("+(i++)+")'>Add to Cart</button>"+
      `</div>
      </div>`
    )
  }).join('')

  var cart =[];

  function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
  }
function delElement(a){
  cart.splice(a, 1);
  displaycart();

}

  function displaycart(a){
    let j = 0, total = 0;
    document.getElementById("count").innerHTML=cart.length;
    if(cart.length===0){
      document.getElementById('cartItem').innerHTML = "Your cart is empty";
      document.getElementById("total").innerHTML = "$ " +0+".00";
    }
    else{
      document.getElementById("cartItem").innerHTML = cart.map((items)=>
      {
        var {image, title, price} = items;
        total=total+price
        document.getElementById("total").innerHTML = "$ "+total+".00";
        return(
         `<div class= 'cart-item'>
         <div class='row-img'>
         <img class='rowing' src=${image}>
         </div>
         <p style='font-size:12px;'>${title}</p>
         <h2 style= 'font-size: 15px;'>$ ${price}.00</h2>` +
         "<i class='bx bx-remove' onclick='delElement("+ (j++) + ")'></i></div>"
        )
      }).join('');
    }
  }


/*ABOUT FUNCTION*/
  var btn = document.getElementsByClassName("btn");
  var slide = document.getElementById("slides");
  btn[0].onclick = function(){
      slide.style.transform = "translateX(0px)";
      for (let index = 0; index < 4; index++) {
          btn[index].classList.remove("active")   
      }
      this.classList.add("active")
  }
  btn[1].onclick = function(){
      slide.style.transform = "translateX(-800px)";
      for (let index = 0; index < 4; index++) {
      btn[index].classList.remove("active")   
      }
      this.classList.add("active")
  }
  btn[2].onclick = function(){
      slide.style.transform = "translateX(-1600px)";
  
  for (let index = 0; index < 4; index++) {
   btn[index].classList.remove("active")   
  }
  this.classList.add("active")
  }
  btn[3].onclick = function(){
      slide.style.transform = "translateX(-2400px)";
  
  for (let index = 0; index < 4; index++) {
  btn[index].classList.remove("active")   
  }       
  this.classList.add("active")
}
