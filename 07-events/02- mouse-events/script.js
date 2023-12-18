const logo = document.querySelector('img');
const onClick = () => console.log('click event');
const onDobuleClick = () => {
  console.log('Dobule click event');

  if (document.body.style.backgroundColor !== 'purple') {
    document.body.style.backgroundColor = 'purple';
    document.body.style.color = 'white';
  } else {
    document.body.style.backgroundColor = 'white';
    document.body.style.color = 'black';
  }
};

const onRightClick = () => console.log('rright click event');
const onMouseDown = () => console.log('mouse down event');
const onMouseUp = () => console.log('mouse Up event');
const onMouseWheel = () => console.log('mouse Wheel event');
const onMouseOver = () => console.log('mouse over event');
const onMouseOut = () => console.log('mouse out event');
const onDragStart = () => console.log('mouse drag start event');
const onDrag = () => console.log('mouse drag event');
const onDragEnd = () => console.log('mouse drag End event');

//event listeners
logo.addEventListener('click', onClick);
logo.addEventListener('dblclick', onDobuleClick);
logo.addEventListener('contextmenu', onRightClick);

logo.addEventListener('mousedown', onMouseDown);
logo.addEventListener('mouseup', onMouseUp);
logo.addEventListener('wheel', onMouseWheel);

logo.addEventListener('mouseover', onMouseOver);
logo.addEventListener('mouseout', onMouseOut);

logo.addEventListener('dragstart', onDragStart);
logo.addEventListener('drag', onDrag);
logo.addEventListener('dragend', onDragEnd);
