if (true) {
  console.log('this is true');
}

if (false) {
  console.log('this is false');
}

const x = 10;
const y = 5;

if (x > y) {
  console.log(`${x} is greater than ${y}`);
}

if (x < y) {
  console.log(`${x} is smaller than ${y}`);
}

// y = 10;
if (x === y) {
  console.log(`${x} is equals to ${y}`);
} else {
  console.log(`${x} is Not equals to ${y}`);
}

// y = 10;
if (x !== y) {
  const z = 20;
  console.log(`${z} is  ${z}`);
} else {
  console.log(`${x} is Not equals to ${y}`);
}

// console.log(z);

//shortHand If
if (x >= y)
  console.log(`${x} is greater  or equal to ${y}`), console.log('this is true');
else console.log(`${x} is  not greater or equal to ${y}`);
