
const togglebtn = document.getElementsByClassName('toggle-button')[0];
const navbarlinks =document.getElementsByClassName('navbar-links')[0];

const topOfNav = navbarlinks.offsetTop;
togglebtn.addEventListener('click',() =>{
  
  navbarlinks.classList.toggle('active')
  
  
});


// function fixNav() {  
//   if (window.scrollY >= topOfNav){
//     document.body.style.paddingTop = navbarlinks.offsetHeight + 'px';
//     document.body.classList.add('fixed-nav');
//   } else{
//     document.body.style.paddingTop = 0;
//     document.body.classList.remove('fixed-nav');
//   }
//   console.log(topOfNav);
// }

// window.addEventListener('scroll',fixNav);