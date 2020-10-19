// Exemples de map

const persons = ['John Lennon', 'Paul McCartney', 'George Harrison', 'Ringo Starr'];

const namesLengths = persons.map(person => person.length);
console.log(namesLengths);

const personsLastNames = persons.map(person => {
  const splitNames = person.split(' ');
  const lastName = splitNames.pop();
  debugger;
  return lastName;
});
console.log(personsLastNames);

const namesAndPosition = persons.map((person, index) => `${index} ${person}`);
console.log(namesAndPosition);