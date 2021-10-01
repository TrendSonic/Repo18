// Only change code below this line
var numberArray = [9, 5, 4, 11, 5, 12, 13, 15, 4, 2, 5];
var uniqueArray = new Set([...numberArray].sort((a, b) => {
    return a - b;
  }));

/*const uniqueArray = new Set([...numberArray.entries()].map((entry) => entry[0]).sort());*/


console.log(uniqueArray);
// Only change code below this line
module.exports = { numberArray, uniqueArray};