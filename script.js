// declare!
let fadeIns = document.querySelectorAll('.FadeIn');
let fateTops = document.querySelectorAll('.Spoiler-top');
let fates = document.querySelectorAll('.Spoiler');

//image fade in
function fadeIn() {
     let wh = window.innerHeight - 400;
     fadeIns.forEach(fadeIn => {
          let fadeInTop = fadeIn.getBoundingClientRect().top;
          if (fadeInTop < wh) {
               fadeIn.classList.add('in-view');
          } else {
               fadeIn.classList.remove('in-view');
          }
     })
}

//accordion funtions
function toggleSpoiler(){
     let parentClass = this.parentElement.classList;
     if (parentClass.contains('open')) { // check to see if the accordion is already open
          parentClass.remove('open');
     } else { // otherwise, close all other accordions and open this one
          fates.forEach(fate => {
               fate.classList.remove('open')
          });
          parentClass.add('open');
     }
}

fateTops.forEach(fateTop => {
     fateTop.addEventListener('click', toggleSpoiler);
})

function doStuff() {
     fadeIn();
}

doStuff();
window.addEventListener('scroll', doStuff);
window.addEventListener('resize', doStuff);