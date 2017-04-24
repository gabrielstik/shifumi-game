var soloButton = document.querySelector('.play-button-solo');
var multiButton = document.querySelector('.play-button-multi');
var game = document.querySelector('.game');

soloButton.addEventListener('click', function() {
  game.classList.add('anim-comeGame');
  console.log("solo");
},false);

multiButton.addEventListener('click', function() {
  game.classList.add('anim-comeGame');
  console.log("multi");
},false);
