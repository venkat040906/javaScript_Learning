//gives error as user is diclared in other scipt.js file
// const user = 'John';

//if we do like this than we ill not get error
(function () {
  const user = 'John';
  console.log(user);
  const hello = () => console.log('Hello from the IIFE');
  hello();
})();

//this wil get error as it is not defined in the scope
// hello();

(function (name) {
  console.log('Hello ' + name);
})('Shawn');

(function hello() {
  console.log('Hello');
  //hello();
})();
