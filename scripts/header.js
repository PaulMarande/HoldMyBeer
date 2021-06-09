//Si l'utilisateur scroll vers le bas la header change
const theHeader = document.querySelector(".main_header")
window.onscroll = function () {

  //Si on scroll de 30px le header deviens plus transparent
  if (document.documentElement.scrollTop > 30) {
    theHeader.style.opacity = "0.6";
  }
  else {
    theHeader.removeAttribute("style");
  }
}
const box = document.querySelector('.box');
const boxMenu = document.querySelector('.boxMenu')
const lienMenu = document.querySelector('.lienMenu')
box.addEventListener('click', e => {
  e.target.classList.toggle('active');
  boxMenu.classList.toggle('active');
  lienMenu.classList.toggle('active');
})

const backToTopButton = document.querySelector("#back-to-top-btn");

window.addEventListener("scroll", scrollFunction);

//Montrer ou cacher le bouton "retour en haut"
function scrollFunction() {
  if (window.pageYOffset > 300) { // Show backToTopButton
    if (!backToTopButton.classList.contains("btnEntrance")) {
      backToTopButton.classList.remove("btnExit");
      backToTopButton.classList.add("btnEntrance");
      backToTopButton.style.display = "block";
    }
  }
  else { // Hide backToTopButton
    if (backToTopButton.classList.contains("btnEntrance")) {
      backToTopButton.classList.remove("btnEntrance");
      backToTopButton.classList.add("btnExit");
      setTimeout(function () {
        backToTopButton.style.display = "none";
      }, 250);
    }
  }
}

//Si l'utilisateur click sur le bouton "retour en haut"
backToTopButton.addEventListener("click", smoothScrollBackToTop);

//fonction pour animer le retour en haut
function smoothScrollBackToTop() {
  const targetPosition = 0;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  const duration = 750;
  let start = null;

  window.requestAnimationFrame(step);

  function step(timestamp) {
    if (!start) start = timestamp;
    const progress = timestamp - start;
    window.scrollTo(0, easeInOutCubic(progress, startPosition, distance, duration));
    if (progress < duration) window.requestAnimationFrame(step);
  }
}

function easeInOutCubic(t, b, c, d) {
  t /= d / 2;
  if (t < 1) return c / 2 * t * t * t + b;
  t -= 2;
  return c / 2 * (t * t * t + 2) + b;
};

