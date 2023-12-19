// window.onload=function(){
//     document.querySelector('h1').textContent='Hello World';
// };


// window.addEventListener(
//     // 'load'
//     'DOMContentLoaded'
//     ,()=>{

//     document.querySelector('h1').textContent='Hello World';
// })


window.addEventListener('load',()=>console.log('page loaded'));

window.addEventListener('DOMContentLoaded',()=>console.log('Dom loaded'));


console.log('Run me');

document.querySelector('h1').innerText="Hello World";

//defer

window.addEventListener('resize',()=>{
document.querySelector('h1').innerText=`Resixed to ${window.innerWidth} X
${window.innerHeight}`
});


window.addEventListener('scroll',()=>{
    console.log(`scorlled: ${window.scrollX} X
    ${window.scrollY} `);

    if(window.scrollY>2){
        document.body.style.backgroundColor='black';
        document.body.style.color='white';
    }else{
        document.body.style.backgroundColor='white';
        document.body.style.color='black';
    }
});

window.addEventListener('focus',()=>{
    document.querySelectorAll('p').forEach(p => {
        p.style.color='blue'
    });
})