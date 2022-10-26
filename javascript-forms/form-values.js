var $contactForm = document.getElementById('contact-form');

function preventDefault(event) {
  event.preventDefault();
  var $values = {};
  $values.name = $contactForm.elements[0].value;
  $values.email = $contactForm.elements[1].value;
  $values.message = $contactForm.elements[2].value;
  console.log('form data:', $values);
  $contactForm.reset();
}

$contactForm.addEventListener('submit', preventDefault);
