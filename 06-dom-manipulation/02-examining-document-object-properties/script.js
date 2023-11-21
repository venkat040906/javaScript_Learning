let output;

output = document.all;
output = document.all[11];
output = document.all.length;
output = document.documentElement;

output = document.head;
output = document.body;

output = document.head.children;
output = document.body.children;

output = document.doctype;

output = document.domain;
output = document.URL;

output = document.characterSet;
output = document.contentType;

output = document.forms;
output = document.forms[0];
output = document.forms[0].id;
output = document.forms[0].method;
output = document.forms[0].get;
output = document.forms[0].action;

document.forms[0].id = 'new-id';

// output = document.links[0].id = 'google-link';
// output = document.links[0].href;
// output = document.links[0].href = 'https://facebook.com';
// output = document.links[0].className = 'google-class';
// output = document.links[0].classList;

output = document.images;
output = document.images[0];
output = document.images[0].src;

// document.forms.forEach((form) => console.log(form)); - will not work

//if you want to foreach than you have to convert it to array

const forms = Array.from(document.forms);
forms.forEach((form) => console.log(form));
console.log(output);
