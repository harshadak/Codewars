// 7 kyu
// Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.

// Don't change the order of the elements that are left.

function removeSmallest(numbers) {
  if (numbers.length === 0) {
    return [];
  }
  var min = Math.min.apply(null, numbers);
  var result = numbers;
  console.log(min, result);
  for (let i = 0; i < result.length; i++) {
    if (result[i] === min) {
      result.splice(i, 1);
      return result;
    }
  }
}

removeSmallest([2,2,1,2,1]);