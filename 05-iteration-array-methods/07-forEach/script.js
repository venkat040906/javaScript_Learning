const socials = ['Instagram', 'Facebook', 'TickTok', 'Twitter'];

// console.log(socials.__proto__);

// socials.forEach(function (item) {
//   console.log(item);
// });

// socials.forEach((items) => console.log(items));
socials.forEach((item, index, arr) => console.log(`${index}-${item}`, arr));

function localSocials(social) {
  console.log(social);
}

socials.forEach(localSocials);

const socialOobjs = [
  { name: 'Twitter', url: 'https://twitter.com' },
  { name: 'Facebook', url: 'https://Facebook.com' },
  { name: 'Instagram', url: 'https://Instagram.com' },
  { name: 'Linkedin', url: 'https://Linkedin.com' },
];

socialOobjs.forEach((item) => console.log(item));
