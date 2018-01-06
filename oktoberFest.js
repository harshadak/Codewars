// 7 kyu

// Oktober Fest: Bjorg's Got A Drinking Problem
// Create a function that takes in the two teams' arrays, compares the number of 5s shown and if they match, return "Drinks All Round! Free Beers on Bjorg!".

// If they don't, return "Uh Oh! Bjorg's a donut! No beer for anyone!" .

function gameOfFives(array1, array2){
  var count1 = 0, count2 = 0;
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] == 5) {
      count1++;
    }
  }
  for (let i = 0; i < array2.length; i++) {
    if (array2[i] == 5) {
      count2++;
    }
  }
  if (count1 == count2) {
    return "Drinks All Round! Free Beers on Bjorg!"
  } else {
    return "Uh Oh! Bjorg's a donut! No beer for anyone!";
  }
}

gameOfFives([5,7,1],[5,1,5]);