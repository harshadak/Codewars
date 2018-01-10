// 7 kyu

// A twisted way to select an element from an array.

function select (arrSearch, arrTake){
  arrSearch.sort().reverse();
  var searchChar = arrSearch[2][2];
  for (let i = 0; i < arrTake.length; i++) {
    if (arrTake[i][0] == searchChar) {
      return arrTake[i];
    }
  }
  return "Nothing here";
}

select(['banana','rose','orange','apple'], ['carrot','nectarines','cucumber','ananas']);