// alert('Hello');

console.log(window.innerHeight, window.innerWidth, innerHeight);
const x = 100;

console.log(x, 'in global');

function run() {
    console.log(innerHeight);    
    console.log(x, 'in global');
}

run();

if (true) {
    console.log(x,'in block');
}

function add() {
    //if i declare x here that funciton will point to local scope
    const x = 1;
    const y = 50;
    console.log(x+y);
}
// console.log(y); this will throw error as y isnot global variable
add();
