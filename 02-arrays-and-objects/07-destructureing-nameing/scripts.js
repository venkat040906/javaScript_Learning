const firstName = 'John';
const lastName = 'Doe';
const age = 30;

const person = {
    //can be wittern in both ways
    //firstName: firstName,
    // lastName: lastName,
    // age: age,
    firstName,
    lastName,
    age,
};

console.log(person.age);

//destructuring

const todo = {
    id: 1,
    titile: 'take a trash',
    user: {
        name:'John'
    }
};

//const id = todo.id;
//destructured one
//---const { id, titile, user: { name } } = todo;
//rename a property

const { id:todoId, titile,user:{name} } = todo;

console.log(todoId, titile, name);

//destructure arrays
const numbers = [23, 67, 33, 49];
//using rest operator to get rest value with ..., for first and second value in that array used first and second variable
const [first, second,...rest] = numbers;

console.log(first,second,rest);