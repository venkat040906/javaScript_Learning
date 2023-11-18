let x;

const todo = {};
// const todo = new Object{};
todo.id = 1;
todo.name = 'buy Milk';
todo.completed = false;

x = todo;

const person = {
    address: {
        coords: {
            lat: 43.2323,
            lng: -19.455,
        },
    },
};

x = person.address.coords.lat;

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

// const obj3 = { obj1, obj2 };
// const obj3 = { ...obj1,...obj2 };
const obj3 = { ...obj1, obj2 };

const obj4 = Object.assign({}, obj1, obj2);

const todos = [
    { id: 1, name: 'Buy Milk' },
{ id: 2, name: 'Pickup kids from school' },
    { id: 3, name: 'take out trash' }
];
    
x = todos;
x = todos[0];
x = todos[0].name;

x = Object.keys(todo);

x = todo.length;//undefined
x = Object.keys(todo).length;//give length

x = Object.values(todo);
x = Object.entries(todo);

x = todo.hasOwnProperty('name');
x = todo.hasOwnProperty('age');

console.log(x);