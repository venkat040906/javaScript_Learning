const x = 100;
const foo = 1;
var bar = 2; // this will added into window object if you do window in console you will get this value there that you dont want to add


if (true) {
    const y = 200;
    console.log(x+y);
}
// console.log(x+y); --error

for (let i = 0; i <= 10; i++){
    console.log(i);
}
//console.log(i);//-- reference error if used const/let if used var we will get our output

if (true) {
    const a = 500;
    let b = 400;
    var c = 8000;
}

console.log(c);//- var is not blocked scoped where as const and let ie blocked scoped

function run() {
    var d = 100;
    console.log(d);
}
run();

// console.log(d); var is function scoped hence you will get reference error here


