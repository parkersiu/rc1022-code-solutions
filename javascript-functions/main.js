function convertMinutesToSeconds(minutes) {
  var result = minutes * 60;
  return result;
}
var convertMinutesToSecondsResult = convertMinutesToSeconds(5);
console.log('convertMinutesToSecondsResult:', convertMinutesToSecondsResult);

function greet(name) {
  var result = '"Hey, ' + name + '"';
  return result;
}
var greetResult = greet('Beavis');
console.log('greetResult:', greetResult);

function getArea(width, height) {
  var result = width * height;
  return result;
}
var getAreaResult = getArea(17, 42);
console.log('getAreaResult:', getAreaResult);

function getFirstName(person) {
  var result = person.firstName;
  return result;
}
var getFirstNameResult = getFirstName({ firstName: 'Lelouche', lastName: 'Lamperouge' });
console.log('getFirstNameResult:', '"' + getFirstNameResult + '"');

function getLastElement(array) {
  var result = array.length - 1;
  return array[result];
}
var getLastElementResult = getLastElement(['propane', 'and', 'propane', 'accessories']);
console.log('getLastElementResult:', '"' + getLastElementResult + '"');
