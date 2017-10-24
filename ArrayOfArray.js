function largestOfFour(arr) {
    arrayValue = [];
    finalArray = [];
    arr.forEach(function(item){
        arrayValue.push(item);
    });
    arrayValue.forEach(function(item){
       finalArray.push(item.reduce(function(a,b){
           return Math.max(a,b);
       }));
    });
    console.log(finalArray);
  }
  
  largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);