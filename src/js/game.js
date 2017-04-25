mode = '';
scoreP1 = document.querySelector('.score-p1');
scoreP2 = document.querySelector('.score-p2');
p1Score = 0;
p2Score = 0;
p1Played = document.querySelector('.played-p1');
p2Played = document.querySelector('.played-p2');

function round(mode) {
  p1Pressed = '';
  p2Pressed = '';
  if (mode == 'solo') {
    var soloOrdi = document.querySelectorAll('.solo-ordi');
    for (var i = 0; i < soloOrdi.length; i++) {
      soloOrdi[i].style.display="none";
    }
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
    p2Played.style.backgroundImage="url(assets/img/rock.png)";
    if (pressed == 'rock') {
      p1Played.style.backgroundImage="url(assets/img/rock.png)";
    }
    else if (pressed == 'leaf') {
      p1Score++;
      p1Played.style.backgroundImage="url(assets/img/leaf.png)";
    }
    else if (pressed == 'scissors') {
      p2Score++;
      p1Played.style.backgroundImage="url(assets/img/scissors.png)";
    }
  }
  else if (computer == 1) {
    p2Played.style.backgroundImage="url(assets/img/leaf.png)";
    if (pressed == 'rock') {
      p2Score++;
      p1Played.style.backgroundImage="url(assets/img/rock.png)";
    }
    else if (pressed == 'leaf') {
      p1Played.style.backgroundImage="url(assets/img/leaf.png)";
    }
    else if (pressed == 'scissors') {
      p1Score++;
      p1Played.style.backgroundImage="url(assets/img/scissors.png)";
    }
  }
  else if (computer == 2) {
    p2Played.style.backgroundImage="url(assets/img/scissors.png)";
    if (pressed == 'rock') {
      p1Score++;
      p1Played.style.backgroundImage="url(assets/img/rock.png)";
    }
    else if (pressed == 'leaf') {
      p2Score++;
      p1Played.style.backgroundImage="url(assets/img/leaf.png)";
    }
    else if (pressed == 'scissors') {
      p1Played.style.backgroundImage="url(assets/img/scissors.png)";
    }
  }
  setTimeout(function() {
    scoreP1.innerHTML=p1Score;
    scoreP2.innerHTML=p2Score;
    var opacity = 1;
    var fadeOut = setInterval(function() {
      opacity -= .03;
      p1Played.style.opacity=opacity;
      p2Played.style.opacity=opacity;
      if (opacity <= 0) {
        clearInterval(fadeOut);
      }
    },10);
    setTimeout(function() {
      p1Played.style.backgroundImage="url()";
      p2Played.style.backgroundImage="url()";
      p1Played.style.opacity="1";
      p2Played.style.opacity="1";
      round();
    },1000);
  },3000);
}
