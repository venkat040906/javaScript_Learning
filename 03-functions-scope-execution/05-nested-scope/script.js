function first() {
    const x = 100;
    function second() {
        const y = 200;
        console.log(x+y);
    }

    // console.log(y); this will give erro as child to parent scopeing will give reference error
    second();
}

first();

if (true) {
    const x = 100;
    if (x == 100) {
        const y = 200;
        console.log(x+y);
    }
    // console.log( y); this will also throw erro as y is out of scope of parent
}