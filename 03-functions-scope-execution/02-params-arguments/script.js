
///new way is adding in paramters only defalut params
function registerUser(user='bot') {
    //old way 2015
    // if (!user) {
    //     user = 'bot';
    // }
    return user + ' is registered';
}

// console.log(user); - user is not a global scope variable

// console.log(registerUser('John'));
console.log(registerUser());//-- user is not sent then will get undefined hence create defalut value in function

//Rest Params in a function

function sum(...nums) {
    let total = 0;
    for (const num of nums) {
        total += num;
    }
    return total;
}

console.log(sum(13, 2, 2, 4, 7, 45, 7));

//object as params
function loginUser(user ) {
    return `The user ${user.name} with the id of ${user.id} is logged in`;
}

const user = {
    id: 1,
    name: 'John',
};

console.log(loginUser(user));
console.log(loginUser(
    {
        id: 2,
        name:'Sara',
    }
));


//arrays as params
function getRandom(...arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);

    const item = arr[randomIndex];
    console.log(item);
}

getRandom([1,2,3,4,5,6,7,8,9,10]);