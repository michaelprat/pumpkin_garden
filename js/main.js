let menu = document.querySelector('.fa-bars');
let navbar = document.querySelector('.navbar');

menu.addEventListener('click',function(){
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('nav-toggle');
});

window.addEventListener('scroll', () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('nav-toggle');
}); 
 
 
 
 document.addEventListener('DOMContentLoaded', function () {
  const boxes = document.querySelectorAll('.box');
  const fullpage = document.getElementById('fullpage');

  boxes.forEach(function (box) {
      box.addEventListener('click', function () {
          const imgSrc = this.querySelector('img').src;
          fullpage.innerHTML = '<img src="' + imgSrc + '" alt="popup-image">';
          fullpage.style.display = 'block';
      });
  });

  // Close the full page popup when clicking outside the image
  fullpage.addEventListener('click', function (event) {
      if (event.target === this) {
          this.style.display = 'none';
      }
  });
});