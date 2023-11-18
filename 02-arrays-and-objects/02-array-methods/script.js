let x;

const arr = [23, 21, 55, 676, 34];
// arr.push(100);

// arr.pop();

// arr.unshift(99);//add in the bigning

// arr.shift();//remove at begining

// arr.reverse();

// arr.sort();
// arr.reverse();

x = arr.includes(21);

x = arr.includes(200);

x = arr.indexOf(20);

x = arr.slice(1,4);

//  x = arr.splice(1,4);

// x = arr.splice(3, 1);
x = arr.splice(1, 4).reverse().toString().charAt(3);

console.log(x,arr);