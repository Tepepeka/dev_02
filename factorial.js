const computeFactorialIt = (n) => {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}

console.log(computeFactorialIt(4));


const computeFactorialRec = (n) =>  {
  if (n <= 1) {
    return 1;
  } else {
    return n * computeFactorialRec(n - 1);
  }
}

console.log(computeFactorialRec(4));