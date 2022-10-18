/* exported getInitialsOfPerson */
function getInitialsOfPerson(person) {
  var arrayFirst = Array.from(person.firstName);
  var arrayLast = Array.from(person.lastName);
  return arrayFirst[0] + arrayLast[0];
}
