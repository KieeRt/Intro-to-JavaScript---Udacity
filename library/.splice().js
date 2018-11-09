Info: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice"

//Syntax:
array.splice(start[, deleteCount[, item1[, item2[, ...]]]])

start /*= Index at which to start changing the array,  If negative, will begin that many elements from the end of the array 
(with origin -1)
and will be set to 0 if absolute value is greater than the length of the array.*/
deleteCount //= number from index that you wanna delete.
itemN //= item that you wanna and ad specific index

//Example:
var array =["1", "two", "3"];
array.splice(1, 1, "2"); 
/*
1)Go to index 1 (item on inted 1 is "two")
2) remove 1 item ("two") and  add at index 1 new element  "3";
*/
