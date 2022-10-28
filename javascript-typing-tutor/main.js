var $letters = document.querySelectorAll('span');

var i = 0;

document.addEventListener('keydown', function (event) {
  if ($letters[i].textContent === event.key) {
    $letters[i].className = 'correct';
    $letters[i + 1].className = 'active';
    i++;
  } else {
    $letters[i].className = 'active incorrect';
  }
});
