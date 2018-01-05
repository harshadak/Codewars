// Count Odd Numbers below n
// Given a number n, return the number of positive odd numbers below n, EASY!

function oddCount(n){
  // var count = 0;
  // for (let i = 1; i < n; i++) {
  //   if ((i % 2) !== 0) {
  //     count++;
  //   }
  // }
  // return count;
  
  return Math.floor(n/2);
}

oddCount(15);