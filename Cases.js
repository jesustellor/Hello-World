function titleCase(str) {
  strSplit = str.toLowerCase().split(" ");
  strCap = [];
  strSplit.forEach(function(item){
    strCap.push(item.charAt(0).toUpperCase() + item.slice(1));
    });
  console.log(strCap.join(" "));
}

titleCase("WHY NOT wHY mE");