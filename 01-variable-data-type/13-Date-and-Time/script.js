let d;

d = new Date();
d = d.toString();

d = new Date(2021, 5, 21,6,30);

d = new Date('2021-06-21');

d = new Date('2021-06-21T12:30:00');

d = new Date('2021/06/21 07:40:00'); 

d = new Date('06-21-1998');

//time stamp

d = Date.now();

d = new Date();
d = d.getTime();
d = d.valueOf();

d = new Date(d);

d = Math.floor(Date.now() / 1000);

console.log( d);