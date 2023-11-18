const arr = [1, 2, 3, 4, 5];
//solution 2 challenge 1
// arr.reverse();
// arr.push(0);
// arr.unshift(6);
// console.log(arr);

//solution 1 challenge 1
arr.push(6);
arr.unshift(0);
arr.reverse();
console.log(arr);



const arr1 = [1, 2, 3, 4, 5];
const arr2 = [5, 6, 7, 8, 9, 10];
//solution 1 challenge 2
// let arr3=arr1.concat(arr2.slice(1));// = arr1.shift() arr2;

//solution 2 challenge 2
// arr3 = arr1.slice(0, 4).concat(arr2);

//solution 3 challenge 2

arr3 = [...arr1, ...arr2];
arr3.splice(4, 1);

console.log(arr3);
