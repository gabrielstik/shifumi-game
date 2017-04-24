var soloButton = document.querySelector('.play-button-solo');
var multiButton = document.querySelector('.play-button-multi');
var anticlick = document.querySelector('.anti-click');
var game = document.querySelector('.game');

soloButton.addEventListener('click', function() {
  game.classList.add('anim-comeGame');
  anticlick.style.display="none";
},false);

multiButton.addEventListener('click', function() {
  game.classList.add('anim-comeGame');
  anticlick.style.display="none";
},false);
