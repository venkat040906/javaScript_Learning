// Array Basics

const numbers = [12, 23, 1, 5, 645, 3];

const mixed = [22, 'Hello', true, null];

const fruits = new Array('Apple', 'Orange', 'grapes');

x = numbers[0];
x = numbers[0] + numbers[2];

x = `my favorite fruit is an ${fruits[0]}`;

x = numbers.length;

fruits[2] = 'banana';
x = fruits;
x = fruits.length;

// fruits.length = 2;
x = fruits;

fruits[3] = 'strawberry';
fruits[fruits.length] = 'blueberry';
fruits[fruits.length] = 'peach';

x = fruits;

console.log(x);