const form=document.getElementById('item-form');

function onSubmit(e){
    e.preventDefault();
    const item=document.getElementById('item-input');
    const priority=document.getElementById('priority-input').value;

    if(item===''|| priority==='0'){
        alert('Please fill in all fields');
        return;
    }

console.log(item.value,priority);
}

function onSubmit2(e){
    e.preventDefault();

    const formData=new FormData(form);
    console.log(formData);
    const item=formData.get('item');
    const priority=formData.get('priority');

    console.log(item,priority);

    const entires=formData.entries();
    console.log(entires);

    for(let entry of entires){
        console.log(entry );
    }

    
}

form.addEventListener('submit',onSubmit);
form.addEventListener('submit',onSubmit2);
