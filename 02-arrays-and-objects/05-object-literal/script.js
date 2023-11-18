let x;

const person = {
    name: 'venkat akula',
    age: 30,
    isAdmin: true,
    address: {
        street: '4th cross',
        city: 'bangalore',
        state: 'karnataka',
    },
    hobbies:['football','gym'],
}


x = person.name;

x = person.age;

x = person['age'];

x = person.address.state;

x = person.hobbies[0];
person.name = 'Haritha Akula';
person['isAdmin'] = false;
x = person;

delete person.age;

person.hasChildren = true;
person.greet = function () {
    console.log(`Hello, my name is ${this.name}`);
}

person.greet();

const person2 = {
    'first name': 'Brad',
    'last name':'Traversy',
}

// x = person2.first name;
x = person2["first name"];
console.log(x);