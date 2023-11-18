

console.log('test');

console.group('primitiv data type');
console.log('String - sequence of characters. Must be in a quotes or backticks');
console.log('Numbers - integers as well as floating-point numbers');
console.log('Boolean - logical entity /true or false');
console.log('Null intentional absence of any object value');
console.log('undefined - a variable that has not yet been defined/assinged');
console.log('symbol - built-in object whose constructor returns a unique symbol');
console.log('BigInt - Number that are greater that number type can handle ');
console.groupEnd();


console.group('reference type');
console.log('reference type or objects are a non-preimitive value when assigned to a variable the variable is given a reference to that value');
console.log('object literal, function all are reference type');
console.groupEnd();

console.group('Static typing vs Dynamic types');
console.log('Javascript is dynamically-typed language.');
console.log('this means, we do not explicitly define the type for our variables. Many other languages are statically-typed such as c, c++ and java ');
console.log('Type script is superset of JavaScript, which allows static typing. this can make your code more verbose and less prone to erros. typeScript may be something you want to look into later on');
console.groupEnd();


//string
const firstName = 'Sara';

//Numbers
const ageOfSara = 25;
const temp = 98.9;

//Boolean
const hasKids = false;

//Null
const apptNo = null;

//Undefined
let scoreInd=undefined;

//symbol
const id = Symbol('id');


//bigInt
const n = 9007199253740991n;

//Reference Type
const arr2 = [1, 2, 3, 4]
const arr3 = {
    name: 'venkat', email:'avenket04@gmail.com'
}

function sayHello() {
    console.log('sayHello to sayhello function');
}

const output = sayHello;

console.log(output, typeof output);

console.log(firstName, typeof firstName);
console.log(ageOfSara, typeof ageOfSara);
console.log(hasKids, typeof hasKids);
console.log(apptNo, typeof apptNo);
console.log(scoreInd, typeof scoreInd);
console.log(id, typeof id);
console.log(n, typeof n);
console.log(arr2, typeof arr2);
console.log(arr3, typeof arr3);
console.log(sayHello, typeof sayHello);


console.log('Primitive Data type - stored directly in the stack, where it is accessed from');
console.log('String|Numbers|Boolean|Null|Undefined|Symbol|BigInt');

console.log('Reference types : Stored in the heap and accessed by reference ');
console.log('Array|Function|Objects');