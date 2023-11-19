// Loop through arrays

const items = ['book', 'table', 'chrir', 'kite'];
const users = [{ name: 'Brad' }, { name: 'Kate' }, { name: 'Steve' }];

for (const item of items) {
  console.log(item);
}
console.log('---------------------');

for (let i = 0; i < items.length; i++) {
  const element = items[i];
  console.log(element);
}

for (const user of users) {
  console.log(user.name);
}

//Loop over strings
const str = 'Hello World';

for (const letter of str) {
  console.log(letter);
}

// Loop over Maps
const map = new Map();
map.set('name', 'John');
map.set('age', 30);

for (const [key, value] of map) {
  console.log(key, value);
}
