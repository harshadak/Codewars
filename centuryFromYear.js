// Century From Year
// Given a year, return the century it is in.
// The first century spans from the year 1 up to and including the year 100,
// the second - from the year 101 up to and including the year 200, etc.

function centuryFromYear(year) {
  var centuries = parseInt(year/100);
  console.log(centuries);
  if ((year % 100) !== 0) {
    centuries += 1;
  }
  return centuries;
  
  // Efficient solution
  // return (year + 99) / 100 | 0;
}

centuryFromYear(3280);