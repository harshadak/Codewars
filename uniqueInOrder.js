// 8 kyu

// Unique In Order
// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

var uniqueInOrder=function(iterable){
  if (typeof(iterable) == "string") {
    iterable = iterable.split("");
  }
  if (iterable.length === 0 || iterable.length === 1) { return iterable; }
  for (let i = iterable.length - 1; i >= 1; i--) {
    if (iterable[i] == iterable[i-1]) {
      iterable.splice(i, 1);
    }
  }
  return iterable;
};

uniqueInOrder([1,2,2,3,3]);