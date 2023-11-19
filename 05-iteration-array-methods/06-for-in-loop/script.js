const color = {
  color1: 'red',
  color2: 'blue',
  color3: 'orange',
  color4: 'green',
  color5: 'black',
};

for (const key in color) {
  console.log(key, color[key]);
}

const colorArr = ['red', 'blue', 'green', 'orange'];

for (const key in colorArr) {
  console.log(colorArr[key]);
}
