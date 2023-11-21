function insertAfter(newEl, existingEl) {
  existingEl.parentElement.insertBefore(newEl, existingEl.nextSibling);
}

// New Element to insert
const li = document.querySelector('li');

li.textContent = 'Insert Me After';

// Existing element to insert after
const firstItem = document.querySelector('li:first-child');

//our custom function

insertAfter(li, firstItem);
