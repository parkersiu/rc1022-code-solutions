var h1 = document.querySelector('.countdown-display');

var timer = 4;

function setText() {
  if (timer < 1) {
    h1.textContent = '~Earth Beeeelooowww Us~';
  } else h1.textContent = timer;
  timer--;
}
setInterval(setText, 1000);
