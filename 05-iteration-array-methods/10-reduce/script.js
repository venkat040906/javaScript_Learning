const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sum = numbers.reduce(function (accumulator, currentValue) {
  return accumulator + currentValue;
}, 0);

const sum2 = numbers.reduce((acc, curr) => acc + curr, 0);

console.log(sum);

console.log(sum2);

//using a for loop

const sum3 = () => {
  let acc = 0;
  for (const curent of numbers) {
    acc += curent;
  }
  return acc;
};

console.log(sum3());

const cart = [
  { id: 1, name: 'Product 1', price: 130 },
  { id: 2, name: 'Product 2', price: 150 },
  { id: 3, name: 'Product 3', price: 175 },
];

const totalPrice = cart.reduce((acc, cur) => acc + cur.price, 0);

const total = cart.reduce(function (acc, product) {
  return acc + product.price;
}, 0);
console.log(totalPrice);
console.log(total);
