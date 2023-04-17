const isPrimeNumber= (n, divisor = 2) => {
  if (n <= 1) {
    return false;
  }
  if (divisor > Math.sqrt(n)) {
    return true;
  }
  if (n % divisor === 0) {
    return false;
  }
  return isPrimeNumber(n, divisor + 1);
}

console.log(isPrimeNumber(23));


const findSupPrime = (n) => {
  if (n < 2) {
    return 2;
  }
  let prime = n;
  while (true) {
    if (isPrimeNumber(prime)) {
      return prime;
    }
    prime++;
  }
}

console.log(findSupPrime(20));
