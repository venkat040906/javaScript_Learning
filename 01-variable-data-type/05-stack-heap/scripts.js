//values are strored on the stack
let name = 'Jhon';
let age = 30;

//Reference value are stroed on the heap
const person = {
    name: 'Venkat',
    age:40
}

let newName = name;
newName = 'Johnathan';

let newPerson = person;
newPerson.name = 'Bradley';

console.log(name, newName);
console.log(person,newPerson);