var student = {
  firstName: 'Parker',
  lastName: 'Siu',
  age: 26
};
var fullName = student.firstName + ' ' + student.lastName;

console.log('value of fullName:', fullName);

student.livesInIrvine = false;
student.previousOccupation = 'Loan Coordinator';

console.log('value of livesInIrvine:', student.livesInIrvine);
console.log('value of previousOccupation:', student.previousOccupation);

var vehicle = {
  make: 'Ford',
  model: 'Mustang',
  year: 2012
};
vehicle['color'] = 'black';
vehicle['isConvertible'] = false;

console.log('value of vehicle color:', vehicle['color']);
console.log('value of vehicle isConvertible:', vehicle['isConvertible']);
console.log('vehicle object:', vehicle);

var pet = {
  name: 'Yoda',
  type: 'cat'
};
delete pet.name;
delete pet.type;

console.log('pet object:', pet);
