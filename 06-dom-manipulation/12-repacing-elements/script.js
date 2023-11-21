function replaceFirstItem() {
  const firstItem = document.querySelector('li:first-child');

  const li = document.querySelector('li');
  li.textContent = 'repaced first';
  firstItem.replaceWith(li);
}

replaceFirstItem();

function replaceSecondItem() {
  const secondItem = document.querySelector('li:nth-child(2)');
  secondItem.outerHTML = '<li>Replaced second</li>';
}

function replaceAllItem() {
  const lis = document.querySelectorAll('li');

  //   lis.forEach((item, index) => {
  //     // item.outerHTML = '<li>Relace All</li>';
  //     if (index === 1) {
  //       item.innerHTML = 'This is second item';
  //     } else {
  //       item.innerHTML = 'Replace All';
  //     }
  //   });
  lis.forEach(
    (item, index) =>
      (item.outerHTML = index === 1 ? '<li>Second Item</li>' : '<li>Item</li>')
  );
}

function replaceChildHeading() {
  const header = document.querySelector('header');
  const h1 = document.querySelector('header h1');

  const h2 = document.createElement('h2');
  h2.id = 'app-title';
  h2.textContent = 'Shopping list';
  header.replaceChild(h2, h1);
}

replaceSecondItem();
replaceAllItem();
replaceChildHeading();
