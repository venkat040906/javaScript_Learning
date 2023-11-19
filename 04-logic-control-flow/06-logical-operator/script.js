//
console.log(10 > 20 && 30 > 14 && 50 > 30);

console.log(10 < 20 && 30 > 14 && 50 > 30);

console.log(10 > 20 || (30 > 14 && 50 > 30));

console.log(10 > 20 || (30 < 14 && 50 > 30));

// && - this will return falsy value or last value
let a;

a = 10 && 20;
a = 10 && 20 && 30;
a = 10 && 0 && 30;
a = 10 && '' && 0 && 30;

console.log(a);

const posts = ['post one', 'post two'];
// const posts = [];
posts.length > 0 && console.log(posts[0]);

// const posts = [];

// console.log(posts[0]); //undefined

// || - will return the first trutby value or the last value

let b;

b = 10 || 20;
b = 0 || 20;
b = 0 || null || '' || undefined;

console.log(b);

//??- return the right side operand when the left is null or undefined

let c;
c = 10 ?? 20;
c = 0 ?? 20;
c = null ?? 30;
c = undefined ?? 30;
c = '' ?? 40;

console.log(c);
