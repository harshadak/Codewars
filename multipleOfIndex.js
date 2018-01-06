// 8 kyu

// Multiple Of Index
// Return a new array consisting of elements which are multiple of their own index in input array (length > 1).

function multipleOfIndex(array) {
  var result = [];
  if (array[0] === 0) { result.push(0); }
  for (let i = 1; i < array.length; i++) {
    if (array[i] % i === 0) {
      result.push(array[i]);
    }
  }
  return result;
}

multipleOfIndex([0, -6, 32, 82, 9, 25]);