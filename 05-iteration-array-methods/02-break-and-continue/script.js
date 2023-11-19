// Break
for (let i = 0; i < 20; i++) {
  if (i === 15) {
    console.log('Breaking...');
    break; //break the loop
  } else {
    console.log('Number ' + i);
  }
}

// Continue

for (let i = 0; i <= 20; i++) {
  if (i === 13) {
    console.log('Skipping 13....');
    continue; //break the curent iteration
  }
  console.log(i);
}
