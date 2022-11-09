
var h1 = document.querySelector('.message');

function setText() {
  h1.textContent = 'Hello There';
}

setTimeout(setText, 2000);
