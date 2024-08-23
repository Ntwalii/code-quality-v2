const isPrimeNumber = (number) => {
  for (let i = 2; i < Math.sqrt(number); i++) {
      console.log(i)
    if (number % i === 0) return false;
  }
  return true;
};
