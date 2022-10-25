var $buttonColor = document.querySelector('.button-color-yellow');

var $backgroundColor = document.querySelector('.background-color-light');

var clicks = 0;

function updateColors() {
  clicks++;
  if (clicks % 2 !== 0) {
    $buttonColor.className = 'button-color-grey';
    $backgroundColor.className = 'background-color-dark';
  } else if (clicks % 2 === 0) {
    $buttonColor.className = 'button-color-yellow';
    $backgroundColor.className = 'background-color-light';
  }
}

$buttonColor.addEventListener('click', updateColors);
