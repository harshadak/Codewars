// Find the Divisors
//Create a function named divisors/Divisors that takes an integer and returns an array with all of the integer's divisors(except for 1 and the number itself). If the number is prime return the string '(integer) is prime' (null in C#) (use Either String a in Haskell and Result<Vec<u32>, String> in Rust).

function divisors(integer) {
  var div = [];
  for (let i = 2; i <= integer/2; i++) {
    if (integer % i === 0) {
      div.push(i);
    }
  }
  if (div.length === 0) {
    return integer + " is prime";
  }
  return div;
}

divisors(78);