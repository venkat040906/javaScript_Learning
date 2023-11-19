const number = [1, 2, 3, 4, 5];

const doubleNumbers = number.map((num) => num * 2);

console.log(doubleNumbers);

//same with for each

const dobuleNumbers2 = [];

number.forEach((num) => {
  dobuleNumbers2.push(num * 2);
});

console.log(dobuleNumbers2);

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

// Create an array of company names

const companyNames = compaies.map((org) => org.name);

console.log(companyNames);

// Create an array with just company and category

const companyInfo = compaies.map((org) => {
  return { name: org.name, category: org.category };
});

console.log(companyInfo);

//create an array of object with the name and the length of each company in years

const companyYears = compaies.map((org) => {
  return { name: org.name, years: org.end - org.start + ' Years' };
});

console.log(companyYears);

//chain map methods

const squareAndDouble = number
  .map((num) => Math.sqrt(num))
  .map((sqt) => sqt * 2);

const squareAndDouble2 = number
  .map(function (num) {
    return Math.sqrt(num);
  })
  .map(function (sqt) {
    return sqt * 2;
  })
  .map(function (sqrtDoubled) {
    return sqrtDoubled * 3;
  });

console.log(squareAndDouble);
console.log(squareAndDouble2);

//Chaining different methods

const evenDouble = number
  .filter((numb) => numb % 2 === 0)
  .map((evennum) => evennum * 2);

console.log(evenDouble);
