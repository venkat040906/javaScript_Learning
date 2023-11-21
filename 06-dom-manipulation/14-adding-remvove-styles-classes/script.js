const text = document.querySelector('p');
const itemList = document.querySelector('.item-list');
const item = document.querySelectorAll('li');

function run() {
  //   console.log(1);

  //className
  //   console.log(itemList.className);
  //   text.className = 'card dark';

  //classlist
  console.log(itemList.classList);
  itemList.classList.forEach((c) => console.log(c));
  //   text.classList.add('dark');
  //   text.classList.remove('card');
  //   text.classList.toggle('hidden');
  text.classList.replace('card', 'dark');

  // change sytle
  itemList.style.lineHeight = '3';

  item.forEach((item, index) => {
    item.style.color = 'red';
    if (index === 2) {
      item.style.color = 'blue';
    }
  });
}

document.querySelector('button').onclick = run;
