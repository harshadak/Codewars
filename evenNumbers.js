// 7 kyu
// Given an array of digitals numbers, return a new array of length number containing the last even numbers from the original array (in the same order). The original array will be not empty and will contain at least "number" even numbers.

function evenNumbers(array, number) {
  var evenArr = [];
  for (let i = (array.length - 1); i >= 0; i--) {
    if (array[i] % 2 === 0) {
      evenArr.unshift(array[i]);
    }
    if (evenArr.length == number) {
      return evenArr;
    }
  }
}

evenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9], 3);