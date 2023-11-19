//debug this code in dev tool
//select source tab select script file under page section
//put debugger at first line
//step through each line and see scope is empty at first and as you go on it will fill the value after execution
//before memory allocate as undefined as discssed in previous chapter

let x = 100;
let y = 50;
function getSum(n1, n2) {
  let sum = n1 + n2;
  return sum;
}

let sum1 = getSum(x, y);
let sum2 = getSum(10, 4);

//Memory creation Phase:
// line 1: x variable is allocated memory and stores 'undfined'
// line 2: y variable is allocated memory and stores 'undfined'
// line 4: getSum() function is allocated memory and stores all the Code
// line 8: sum1 variable is allocated memory and stores 'undfined'
// line 9: sum2 variable is allocated memory and stores 'undfined'

// execution phase:

// line 1: Place the value of 100 into the x variable
// line 1: Place the value of 50 into the y variable
// line 3: skips the function because there is nothing to execute
// line 8: invokes the getSum() function and creates a new function execution context

// Function EC creation phase
// Line 3: n1 & n2 variables are allocated memory and stores 'undefined'
// line 4: sum variable is allocated memory and stores 'undefined'

// function EC execution phase
// line 3: n1 & n2 are assinged 100 and 50
// line 4: calculation is done and 150 is put into the sum varibale
// line 5: return tells the function EC to return to the global ec with value of sum 150
// line 7: returned sum value is put into the sum1 variable
// line 8: open another function execution context and do the same thing with different parameter
