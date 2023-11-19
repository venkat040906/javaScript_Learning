//hosting is all the fuction will be hoisted at the top hence we are not getting any error for bvelow console
console.log(addDollarSign(1000));

//function Declaration
function addDollarSign(value) {
    return '$' + value;
}

console.log(addDollarSign(1000));

//hosting will not work for belwo function expression
// console.log(addPlusSign(200)); this will throw reference error
//function Expression
const addPlusSign = function (value) {
    return '+' + value;
};

console.log(addPlusSign(200));