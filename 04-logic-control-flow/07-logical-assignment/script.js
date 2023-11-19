// ||= assigns the right side value if the left is a falsy value.

// let a = false;
let a = 'false';

// if (!a) {
//   a = 20;
// }

//shorthand of above is

// a = a || 10;

a ||= 10;

console.log(a);

// &&= assigns the rigt side value if the left is a truthy value.

let c = 20;
// if (c) {
//   b = 40;
// }

// c = c && 40;

c &&= 50;

console.log(c);

// ??=assigns the rigth side value only if the left is null or undefined.
let d = null;

if (d === null || d === undefined) {
  d = 20;
}
console.log(d);

c = c ?? 50;

c ??= 40;

console.log(d);
