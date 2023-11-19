const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const evenNumbers = numbers.filter(function (number) {
//   return number % 2 === 0;
// });

// ShortHand verion
// const evenNumbers = numbers.filter((number) => number % 2 === 0);

//same with forEach
// const evenNumbers = [];

// numbers.forEach((number) => {
//   if (number % 2 === 0) {
//     evenNumbers.push(number);
//   }
// });
// console.log(evenNumbers);

const compaies = [
  { name: 'Company one', category: 'Finance', start: 1981, end: 2004 },
  { name: 'Company two', category: 'Retail', start: 1992, end: 2008 },
  { name: 'Company three', category: 'Auto', start: 1999, end: 2007 },
  { name: 'Company four', category: 'Retail', start: 1989, end: 2010 },
  { name: 'Company five', category: 'Technology', start: 2009, end: 2014 },
  { name: 'Company six', category: 'Finance', start: 1987, end: 2010 },
  { name: 'Company seven', category: 'Auto', start: 1986, end: 1996 },
  { name: 'Company eight', category: 'Technology', start: 2011, end: 2016 },
  { name: 'Company nine', category: 'Retail', start: 1981, end: 1989 },
];

// Get only retails companies
const retailsCompanies = compaies.filter((org) => org.category === 'Retail');
console.log('retailsCompanies ', retailsCompanies);

//get companies that started in or after 1980 and ended in or before 2005
const earlyCompanies = compaies.filter(
  (org) => org.start >= 1980 && org.end <= 2005
);

console.log('earlyCompanies are ', earlyCompanies);

//get companies tha lasted 10 years or more
const lasted10Year = compaies.filter((org) => org.end - org.start >= 10);

console.log('lasted10Year ', lasted10Year);
