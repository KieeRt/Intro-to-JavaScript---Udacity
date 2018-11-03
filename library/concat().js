Info: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat#Concatenating_values_to_an_array"

//Syntax:
var new_array = old_array.concat([value1[, value2[, ...[, valueN]]]])

/*
The concat() method is used to merge two or more arrays. This method does not change the existing arrays,
but instead returns a new array.
*/

//Examples:
var numb1 = [1,2,3];
var numb2 = [4,5,6];
var numb3 = [7,8,9];
var numbW = ["x", "y"];
numbW.concat(numb1, numb2, numb3);
//Output: ["x", "y", 1, 2, 3, 4, 5, 6, 7, 8, 9]
var numb1 = [1,2,3];
var numb2 = [4,5,6];
var numb3 = [7,8,9];
var numb= numb1.concat(numb2, numb3);
//Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]
