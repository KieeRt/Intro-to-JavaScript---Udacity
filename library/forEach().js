Info: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach"

//Syntax:
array.forEach(function callback());
/*
Apply for eache element of arrays callback function
*/

//Extension syntax:
arr.forEach(function callback(currentValue[, index[, array]]) {
    //your iterator
}[, thisArg]);

//Examples:

var donuts = ["jelly donut", "chocolate donut", "glazed donut"];

function prove(good) { 
  good += " hole";
  good = good.toUpperCase();
  console.log(good);
};

donuts.forEach(prove);

/*.........*/
var donuts = ["jelly donut", "chocolate donut", "glazed donut"];

donuts.forEach(function(good){ 
  good += " hole";
  good = good.toUpperCase();
  console.log(good);
});
