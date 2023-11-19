const d = new Date(2022, 1, 10, 8, 0, 0);
const month = d.getMonth();
const hours = d.getHours();

console.log(month);

switch (month) {
  case 1:
    console.log('It is January');
    break;
  case 2:
    console.log('It is February');
    break;
  case 3:
    console.log('It is March');
    break;
  default:
    console.log('It is not Jan, Feb or March');
}

switch (true) {
  case hours < 12:
    console.log('Good Morning');
    break;
  case hours < 18:
    console.log('Good Afternoon');
    break;
  default:
    console.log('Good Night');
}
