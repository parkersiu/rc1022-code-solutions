var $container = document.querySelector('.tab-container');

var $tabList = document.querySelectorAll('.tab');

var $viewList = document.querySelectorAll('.view');

$container.addEventListener('click', function (event) {
  if (event.target.matches('.tab')) {
    for (var i = 0; i < $tabList.length; i++) {
      if ($tabList[i] === event.target) {
        $tabList[i].className = 'tab active';
      } else $tabList[i].className = 'tab';
    }
  }
  var $attribute = event.target.getAttribute('data-view');
  for (var j = 0; j < $viewList.length; j++) {
    if ($viewList[j].getAttribute('data-view') === $attribute) {
      $viewList[j].className = 'view';
    } else $viewList[j].className = 'view hidden';
  }
});
