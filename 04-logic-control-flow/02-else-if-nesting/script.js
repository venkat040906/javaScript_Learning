const d = new Date(10, 30, 2022, 6, 0, 0);
const hour = d.getHours();

//else-if
if (hour < 12) {
  console.log('Good Morning');
} else if (hour < 18) {
  console.log('Good Afternoon');
} else {
  console.log('Good Night');
}

//nested if
if (hour < 12) {
  if (hour === 6) {
    console.log('Wake up');
  }
  console.log('Good Morning');
} else if (hour < 18) {
  console.log('Good Afternoon');
} else {
  console.log('Good Night');
  if (hour >= 20) {
    console.log('you should be sleeping');
  }
}

///having multiple condition
if (hour >= 7 && hour < 15) {
  console.log('It is work time');
}

if (hour === 6 || hour === 20) {
  console.log('brush your teeth!');
}
