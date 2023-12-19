const logo = document.querySelector('img');
function onClick(e){
    // console.log(e.target);
    // console.log(e.currentTarget);
    // console.log(e.timeStamp);

    // console.log(e.clientX);
    // console.log(e.clientY);

    // console.log(e.offsetX);
    // console.log(e.offsetY);

    // console.log(e.pageX);
    // console.log(e.pageY);

    console.log(e.screenX);
    console.log(e.screenY);


    
}

function onDrag(e){
document.querySelector('h1').textContent=`X ${e.clientX} Y ${e.clientY}`;
}

document.querySelector('a').addEventListener('click',function(e){
    e.preventDefault();
    console.log('link was clicked');
});

logo.addEventListener('drag',onDrag);

// logo.addEventListener('click',function (e){
//     console.log(e);
// });


logo.addEventListener('click',onClick);

// document.body.addEventListener('click',function(e){
//     console.log(e.target);
//     console.log(e.currentTarget);
// });


/*
- target - the element that triggered the event
- currentTraget - the element that the event listener is attached to 
these are the same in this case

- type - the type of event that was triggered
- timeStamp - the time that the evbent was triggered
- clientX - the x position of the mouse click relative to the window
- clientY - the Y position of the mouse click relative to the window
- offsetX - the x position of the mouse click relative to the window
- offsetY - the Y position of the mouse click relative to the window
- pageX - the x postion of the mouse click realtative to the page
- pageY - the y postion of the mouse click relative to the page
- screenX - the x postion of the mouse click relative to the screen
- screenY - the y postion of the mouse click relative to the screen



*/