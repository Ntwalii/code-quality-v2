const sumOfArray = (numbersArray) => {
  return numbersArray.length === 0
    ? 0
    : numbersArray[0] + sumOfArray(numbersArray.splice(1));
};
