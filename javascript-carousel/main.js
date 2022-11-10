var $left = document.querySelector('.fa-less-than');
var $right = document.querySelector('.fa-greater-than');
var $image = document.querySelector('img');
var $dotsParent = document.querySelector('#dots');
var $dots = document.querySelectorAll('.fa-circle');
var imageArray = ['images/001.png', 'images/004.png', 'images/007.png', 'images/025.png', 'images/039.png'];
var timerId = null;

var data = {
  currentId: 1
};

setTimer();

$left.addEventListener('click', function (event) {
  if (data.currentId > 1) {
    data.currentId--;
    setImage(imageArray[data.currentId - 1]);
  } else {
    data.currentId = 5;
    setImage(imageArray[data.currentId - 1]);
  }
  sequencer(data.currentId);
  clearTimer();
  setTimer();
});

$right.addEventListener('click', function (event) {
  if (data.currentId < 5) {
    data.currentId++;
    setImage(imageArray[data.currentId - 1]);
  } else {
    data.currentId = 1;
    setImage(imageArray[data.currentId - 1]);
  }
  sequencer(data.currentId);
  clearTimer();
  setTimer();
});

$dotsParent.addEventListener('click', function (event) {
  var icon = event.target.closest('i');
  for (var i = 0; i < $dots.length; i++) {
    if (icon.id === $dots[i].id) {
      $dots[i].className = 'fa-solid fa-circle';
      setImage(imageArray[i]);
      data.currentId = $dots[i].id;
    } else $dots[i].className = 'fa-regular fa-circle';
  }
  clearTimer();
  setTimer();
});

function setImage(path) {
  $image.setAttribute('src', path);
}

function sequencer(id) {
  for (var i = 0; i < $dots.length; i++) {
    if ($dots[id - 1] === $dots[i]) {
      $dots[i].className = 'fa-solid fa-circle';
    } else $dots[i].className = 'fa-regular fa-circle';
  }
}

function nextImage() {
  if (data.currentId < 5) {
    data.currentId++;
    setImage(imageArray[data.currentId - 1]);
  } else {
    data.currentId = 1;
    setImage(imageArray[data.currentId - 1]);
  }
  sequencer(data.currentId);
}

function setTimer() {
  timerId = setInterval(nextImage, 3000);
}

function clearTimer() {
  clearInterval(timerId);
}
