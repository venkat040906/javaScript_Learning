// ways to declare a variables
// var, let, const

// var is not use very much as it was used before for scope
// var and let work a lot of similar way
let name = 'venkat';
let lastName = 'akula';

console.log(name, lastName);

let age = 30;
console.log(age);
/*
naming convention 
    - only Number, letters, underscore, dollor AbortSignal
    - can not start with number
   
multi-word formating
    - firstName - camelCase
    - first_Name - underscoreCase
    - FirstName - PascalCase
    - firstname - lowercase

    */

    // reassigning variable

age = age + 1;

console.log(age);

let score;

score = 23;
console.log(score);

if (true) {
    score=score + 5;
}

console.log(score);

const a = 20;
// you can not reassigne const variable like below
// a = 300;

const arr = [1, 2, 3, 4, 5];
//direct assignement is not permisiable as below
// arr = [1, 2, 3, 4, 5];

//we can use push function of array to update const 

arr.push(6);

console.log(arr);

const arr1 = { naam: 'Venkat' };

console.log(arr1);
arr1.naam = 'venkat narayana akula'
console.log(arr1);

arr1.email = 'avenket04@gmail.com';

console.log(arr1);


//declare multiple variable at a time

let e, v, b, x;

const h = 2, j = 4;

console.log(e,v,h,j);
