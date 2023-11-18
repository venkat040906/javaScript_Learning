let x;

x = 5 + '5';
console.log(x);
x = 5 + Number('5');
console.log(x);

x = 5 * '5';
console.log(x);

x = 5 + null;
console.log(x);

x = Number(null);
console.log(x);

x = Number(true);
console.log(x);
x = Number(false);
console.log(x);

x = 5 + true;
console.log(x);
x = 5 + false;
console.log(x);
x = 5 + undefined;

console.log(x);