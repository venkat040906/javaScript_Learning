const clearBtn = document.querySelector('#clear');
function onClear() {
  const itemList = document.querySelector('ul');
  const item = document.querySelectorAll('li');
  //   itemList.innerHTML = '';
  //   item.forEach((item) => item.remove());

  //   while (itemList.firstChild) {
  //     itemList.removeChild(itemList.firstChild);
  //   }

  alert('clear');
}

//javaScript Event Listener
clearBtn.onclick = function () {
  alert('clear items');
};
// clearBtn.onclick = function () {
//   console.log('clear items');
// };

//addEventListener()

// clearBtn.addEventListener('click', () => {
//   alert('Clear Items from list');
// });

// clearBtn.addEventListener('click', () => {
//   console.log('Clear Items from list');
// });

clearBtn.addEventListener('click', onClear);

// setTimeout(() => {
//   clearBtn.removeEventListener('click', onClear);
// }, 5000);

// setTimeout(() => clearBtn.click(), 5000);
