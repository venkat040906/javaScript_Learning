function sayHello() {
    console.log('Hello World');
}

//invocing a funciton or calling a function
sayHello();

//declaratioon of function
function add(num1,num2) {
    console.log(`${num1} + ${num2} = ${num1+num2}`);
}

add(2, 4);

function subtract(num1, num2) {
    return num1 - num2;
    //non accessable path afte return
    console.log(num1-num2);
}

const result = subtract(10, 2);
console.log(result,subtract(22,4));