// Quick & dirty
// const
function createListItem(item) {
  const li = document.createElement('li');
  li.innerHTML = `${item}<button class="remove-item btn-link text-red">
      <i class="fa-solid fa-xmark"></i>
    </button>`;

  document.querySelector('.items').appendChild(li);
}

// Clean & Performant
function createNewItem(item) {
  const li = document.createElement('li');
  li.appendChild(document.createTextNode(item));

  const button = createButton('remove-item btn-link text-red');

  const icon = createIcon('fa-solid fa-xmark');

  button.appendChild(icon);
  li.appendChild(button);

  document.querySelector('.items').appendChild(li);
}

function createButton(classes) {
  const button = document.createElement('button');
  button.className = classes; //;
  return button;
}

function createIcon(classes) {
  const icon = document.createElement('i');
  icon.className = classes;
  return icon;
}

createNewItem('Chees');
createListItem('Eggs');
