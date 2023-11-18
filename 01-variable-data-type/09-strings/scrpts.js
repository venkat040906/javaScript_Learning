let x;

const name = 'Venkat';
const age = 31;


x = 'Hello, my Name is ' + name + ' and I m ' + age;

console.log(x);

//Template Literals
x = `Hello, my name is ${name} and I am ${age} years old`;
console.log(x);

//string properties and methods
const s =new String('Hello World');
x = typeof s;
x = s.length;

//Access value by key

x = s[1];

x = s.__proto__;

x = s.toUpperCase();
x = s.toLowerCase();
x = s.charAt(0);
x = s.indexOf('W');
x = s.substring(0, 5);

x = s.slice(0, 5);
x = s.substring(6);

x = s.slice(0, 5);//we can start from the end using negitive value

x = s.slice(-11);

x = '      Hello World    ';
x = x.trim();

x = s.replace('World', 'Venkat');

x = s.includes('Hell');

x = s.valueOf();

x = s.split('');

console.log(x);