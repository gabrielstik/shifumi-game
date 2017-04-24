mode = 'solo';
scoreP1 = document.querySelector('.score-p1');
scoreP2 = document.querySelector('.score-p2');
p1Score = 0;
p2Score = 0;

round();

function round() {
  p1Pressed = '';
  p2Pressed = '';
  if (mode == 'solo') {
    document.body.onkeydown = function(e) {
      if (e.keyCode == 81 && p1Pressed == '') {
        p1Pressed = 'rock';
        solo(p1Pressed);
  		}
      else if (e.keyCode == 83 && p1Pressed == '') {
        p1Pressed = 'leaf';
        solo(p1Pressed);
  		}
      else if (e.keyCode == 68 && p1Pressed == '') {
        p1Pressed = 'scissors';
        solo(p1Pressed);
  		}
    }
  }
  else {
    document.body.onkeydown = function(e) {
      if (e.keyCode == 75) {

  		}
      else if (e.keyCode == 76) {

  		}
      else if (e.keyCode == 77) {

  		}
    }
  }
}

function solo(pressed) {
  var computer = Math.floor(Math.random()*3);
  if (computer == 0) {
    if (pressed == 'rock') {

    }
    else if (pressed == 'leaf') {
      p1Score++;
    }
    else if (pressed == 'scissors') {
      p2Score++;
    }
  }
  else if (computer == 1) {
    if (pressed == 'rock') {
      p2Score++;
    }
    else if (pressed == 'leaf') {

    }
    else if (pressed == 'scissors') {
      p1Score++;
    }
  }
  else if (computer == 2) {
    if (pressed == 'rock') {
      p1Score++;
    }
    else if (pressed == 'leaf') {
      p2Score++;
    }
    else if (pressed == 'scissors') {

    }
  }
  scoreP1.innerHTML=p1Score;
  scoreP2.innerHTML=p2Score;
}
