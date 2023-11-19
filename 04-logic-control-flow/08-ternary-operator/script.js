const age = 14;

//using an if statement

if (age >= 18) {
  console.log('You can vote!');
} else {
  console.log('You can not vote');
}

//using a ternary operator
age >= 18
  ? console.log('You are young enough to vote!')
  : console.log('You are too young to vote!');

//assigning a conditional value to a variable

const canVote = age >= 18 ? true : false;
const canVote2 =
  age >= 18 ? 'You are young enough to vote!' : 'you are too young to vote!';

console.log(canVote);
console.log(canVote2);

//Multiple Statements

const auth = false;
let redirect;
if (auth) {
  alert('Welcome to the Dashboard');
  redirect = '/dashboard';
} else {
  alert('Access Denied');
  redirect = '/login';
}

const auth2 = true;
const redirect2 = auth2
  ? (alert('Welcome To the dashboard!'), '/dashboard')
  : (alert('Access Denied'), '/login');

console.log(redirect);
console.log(redirect2);

auth ? console.log('Welcome to the dashboard') : null;
auth2 && console.log('Welcome to the dashboard');
