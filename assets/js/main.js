// Header

let scrollpos = window.scrollY;

const header = document.querySelector("header");
const scrollChange = 200;

const add_class_on_scroll = () => header.classList.add("active")
const remove_class_on_scroll = () => header.classList.remove("active")

window.addEventListener('scroll', function() { 
  scrollpos = window.scrollY;

  if (scrollpos >= scrollChange) { add_class_on_scroll() }
  else { remove_class_on_scroll() }
  
})

// Parallax

document.addEventListener("mousemove", parallax);

function parallax(e){
  this.querySelectorAll(".three__layer").forEach(layer=>{
    const speed = layer.getAttribute("data-speed");
    
    const x = (window.innerWidth - e.pageX*speed)/150;
    const y = (window.innerHeight - e.pageY*speed)/150;
    
    layer.style.transform = `translateX(${x}px) translateY(${y}px)`
  })
}

// Animate

let options = {
  root: null,
  rootMargin: '5px',
  threshold: 0.5
}

let callback = function(entries, animObserve) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate');
      animObserve.unobserve(entry.target);
    }
  });
}

let animObserve = new IntersectionObserver(callback, options);

let targets = document.querySelectorAll('.anim')
targets.forEach(target => {
  animObserve.observe(target);
});

// Popup


let popupTrigger = document.querySelectorAll('.popup-js');
let popup = document.querySelector('.popup');
let popupLayout = document.querySelector('.popup__layout');
let popupClose = document.querySelector('.popup__close');
let bodyFix = document.querySelector('body');

popupTrigger.forEach(function(elem) {
  elem.addEventListener('click', function() {
    popup.classList.add('active');
    bodyFix.classList.add('fixed');
  })
})

popupLayout.addEventListener('click', function() {
    popup.classList.remove('active');
    bodyFix.classList.remove('fixed');
});

popupClose.addEventListener('click', function() {
    popup.classList.remove('active');
    bodyFix.classList.remove('fixed');
});

// Burger

const burgerBtn = document.querySelector('.header__burger');
const menuMob = document.querySelector('.header__nav');
const htmlFix = document.querySelector('html');
const layout = document.querySelector('.header__layout');

burgerBtn.addEventListener('click', function() {
  this.classList.toggle('active');
  menuMob.classList.toggle('active');
  htmlFix.classList.toggle('fixed');
  layout.classList.toggle('active');
})
layout.addEventListener('click', function() {
  burgerBtn.classList.remove('active');
  menuMob.classList.remove('active');
  htmlFix.classList.remove('fixed');
  this.classList.remove('active');
})