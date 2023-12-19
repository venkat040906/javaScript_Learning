const itemInput=document.getElementById('item-input');

const onKeyPress=(e)=>{
    console.log('Keypress');
};

const onKeyUp=(e)=>{
    console.log('Keypress');
};

const onKeyDown=(e)=>{
    console.log('Keypress down');

    //key
    // console.log(e.key);
    // document.querySelector('h1').innerText=e.key;

    // if(e.key==='Enter'){
    //     alert('you pressed enter');
    // }

    //keyCode
    // https://www.toptal.com/developers/keycode/table-of-all-keycodes
    // https://www.toptal.com/developers/keycode/table
    
    if(e.keyCode===13){
        alert('you pressed enter');
        
    }


    //code
    console.log(e.code);
    if(e.code==='Digit1'){
        console.log('you pressed 1');
    }
if(e.repeat){
    console.log('you are holding down'+ e.key);
}

// console.log('Shift: '+ e.shiftKey);
console.log('CONTROL: '+ e.ctrlKey);
console.log('ALT: '+ e.altKey);

if(e.shiftKey && e.key==='K'){
    console.log('you poressed K');
}




};


// itemInput.addEventListener('keypress',onKeyPress);
// itemInput.addEventListener('keyup',onKeyUp);
itemInput.addEventListener('keydown',onKeyDown);