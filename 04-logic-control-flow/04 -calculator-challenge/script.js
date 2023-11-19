function calculator(num1, num2, operator) {
  let result = 0;
  switch (operator) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      result = num1 / num2;
      break;
    default:
      result = 'Return an error message';
  }
  return result;
}

console.log(calculator(2, 4, '-'));
