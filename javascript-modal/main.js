var $openButton = document.querySelector('.open');

var $noButton = document.querySelector('.no');

var $hidden = document.querySelector('.hidden');

function openWindow(event) {
  $hidden.className = 'visible background-dark';
}

function closeWindow(event) {
  $hidden.className = 'hidden';
}

$openButton.addEventListener('click', openWindow);
$noButton.addEventListener('click', closeWindow);
