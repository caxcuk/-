//let checkboxes = require('./data');


var nav = document.querySelector("header"); 

var prevScrollpos = window.scrollY;

console.log(prevScrollpos);

window.onscroll = function() {
  var currentScrollPos = window.scrollY;
  if (prevScrollpos > currentScrollPos) {
    nav.style.transition = 'opacity 0.3s ease';
    nav.style.opacity = '1';
  } 
  
  else {
    nav.style.transition = 'opacity 0.3s ease'; 
    nav.style.opacity = '0'; 
  }
  prevScrollpos = currentScrollPos;
}



  document.getElementById("burger").addEventListener("click", function() {
    document.querySelector("header").classList.toggle("open");
  });

  document.getElementById("modal__open").addEventListener("click", function() {
    document.getElementById("modal__bg").classList.toggle("open");
  });

  document.getElementById("modal__close").addEventListener("click", function() {
    document.getElementById("modal__bg").classList.toggle("open");
  });

  let checkbox =  document.getElementsByClassName("checkbox");

  setTimeout(function() {
    for (let i = 0; i < checkbox.length; i++) {
      checkbox[i].addEventListener("click", function() {
          checkbox[i].classList.toggle("active");
      });
    }
  },2000)
  
   
  setTimeout(function () {
    let housebox = document.getElementsByClassName("house");

  for (let i = 0; i < housebox.length; i++) {
    housebox[i].addEventListener("click", function() {
        housebox[i].classList.toggle("active");
    });
  }
  },2000)

  document.getElementById("switch__page").addEventListener("click", function() {
    document.querySelector(".page1").style.display = 'none';
    document.querySelector(".page2").style.display = 'block';
    document.querySelector(".page3").style.display = 'none';
  });


 document.querySelector(".page2__knopka").addEventListener("click", function() {
  document.querySelector(".page1").style.display = 'block';
  document.querySelector(".page2").style.display = 'none';
  document.querySelector(".page3").style.display = 'none';
 });

 document.querySelector(".proz").addEventListener("click", function () {
  document.querySelector(".page1").style.display = 'none';
  document.querySelector(".page2").style.display = 'none';
  document.querySelector(".page3").style.display = 'block';
 })


 
 document.querySelector(".page3__knopka").addEventListener("click", function() {
  document.querySelector(".page1").style.display = 'block';
  document.querySelector(".page2").style.display = 'none';
  document.querySelector(".page3").style.display = 'none';
 });

