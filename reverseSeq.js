// 8 kyu

// Reversed Sequence
// Get the number n to return the reversed sequence from n to 1.

const reverseSeq = n => {
  var numSeq = [];
  for (let i = n; i > 0; i--) {
    numSeq.push(i);
  }
  return numSeq;
};

reverseSeq(-5);