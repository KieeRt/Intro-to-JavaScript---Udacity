Info: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/copyWithin"

//Syntax:
arr.copyWithin(target)
arr.copyWithin(target, start)
arr.copyWithin(target, start, end)

/*target:
where write my copied value
start: 
from where begin copying,If omitted coming from 0
end:
until where gonna copy, last index  excluding and if ommited copyWithin will copy until the end of array
*/

//Examples:
array = [ 1, 2, 3];
array.copyWithin(0,1,2);
//Output: [ 2, 2, 3]

array = [ 1, 2, 3, 4, 5, 6];
array.copyWithin(0, 4);
// Outup: [5, 6, 3, 4, 5, 6]
