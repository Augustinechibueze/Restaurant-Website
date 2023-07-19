const header_wrapper = document.querySelector('.header-wrapper');
const circle =  document.querySelector('.circle')
const header =document.querySelector('header')




setInterval(()=>{
    count = count + 1;
    if(count>page.length-1){
        count = 0
    }
    text_contentSlide.innerHTML = page[count].copy
    header_wrapper.style.backgroundImage =`linear-gradient(rgba(4,9,30,0.4),rgba(4,9,30,0.4)), url(${page[count].background})`
    nextnumberTag.innerHTML = page[count].pgnum
    circle.style.background = page[count].circle
},5000)

const menu_open = document.querySelector('.menu-open')
const menu_close = document.querySelector('.menu-close')
const NavBar = document.querySelector('nav')

menu_open.addEventListener('click',()=>{
    NavBar.style.cssText = `top:0%;`
})
menu_close.addEventListener('click',()=>{
    NavBar.style.cssText = `top:-200%;background-color:orangered;`
})

    const progressCircle = document.querySelector(".autoplay-progress svg");
    const progressContent = document.querySelector(".autoplay-progress span");
    var swiper = new Swiper(".mySwiper", {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 6500,
        disableOnInteraction: false
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
      on: {
        autoplayTimeLeft(s, time, progress) {
          progressCircle.style.setProperty("--progress", 1 - progress);
          progressContent.textContent = `${Math.ceil(time / 200)}s`;
        }
      }
    });


   
  
window.addEventListener('scroll',()=>{
  const pexels = scrollY;
  if(pexels>40){
   header.classList.add('header-scroll')
  }
  else{
    header.classList.remove('header-scroll')
  }
})