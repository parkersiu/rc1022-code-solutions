var h1 = document.querySelector('.countdown-display');

var timer = 4;

function setText() {
  if (timer < 1) {
    h1.textContent = '~Earth Beeeelooowww Us~';
    clearInterval(timerId);
  } else h1.textContent = timer;
  timer--;
}

var timerId = setInterval(setText, 1000);
