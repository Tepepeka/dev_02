const computePowerIt = (n, p) => {
  let result = 1;
  for (let i = 1; i <= p; i++) {
    result *= n;
  }
  return result;
  
}

console.log(computePowerIt(3, 2))


const computePowerRec = (n, p) => {
  if (p === 0) {
    return 1;
  } else {
    return n * computePowerRec(n, p - 1);
  }
}

console.log(computePowerRec(3, 2))