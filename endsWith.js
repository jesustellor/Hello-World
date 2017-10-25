
function confirmEnding(str, target) {
    // "Never give up and good luck will find you."
    // -- Falcor
    // return a boolean value.
str = str.substr(-target.legth) === target;
return str;
  //  return str.endsWith(target);
  }
  
  confirmEnding("Bastian", "n");
  