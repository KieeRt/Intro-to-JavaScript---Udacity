This is minimalist list of methods you will need during your course,
these all methods will be explain during course on different step. 

Reason of this list is to  organize better all methods

## push() 
##### Syntax: [Info](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push)
```JavaScript 
array.push(element1[, ...[, elementN]])
```
add new element at the end of arrays

##### Example:
```JavaScript
var array =["apple", "book"];
array.push("pen"); 
//Output: [ "book", "book", "pen"]
```

## pop()
##### Syntax:[Info](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop)
```JavaScript 
array.pop();
```
Remove last element from array
##### Example:
```JavaScript
var array =["book", "apple", "pen"];
array.pop();
//Output:[ "book", "apple"]
```

 
 ## concat()
##### Syntax:[Info](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat#Concatenating_values_to_an_array)
```JavaScript 
var new_array = old_array.concat([value1[, value2[, ...[, valueN]]]])
```
The concat() method is used to merge two or more arrays. This method does not change the existing arrays,
but instead returns a new array
##### Example:
case 1:
```JavaScript
var numb1 = [1,2,3];
var numb2 = [4,5,6];
var numb3 = [7,8,9];
var numbW = ["x", "y"];
numbW.concat(numb1, numb2, numb3);
//Output:["x", "y", 1, 2, 3, 4, 5, 6, 7, 8, 9]
```
case 2:
```JavaScript
var numb1 = [1,2,3];
var numb2 = [4,5,6];
var numb3 = [7,8,9];
var numb= numb1.concat(numb2, numb3);
//Output:[1, 2, 3, 4, 5, 6, 7, 8, 9]
```

 
  ## copyWithin()
##### Syntax:[Info](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/copyWithin)
```JavaScript 
arr.copyWithin(target)
arr.copyWithin(target, start)
arr.copyWithin(target, start, end)
```
where write my copied value
start: 
from where begin copying,If omitted coming from 0
end:
until where gonna copy, last index  excluding and if ommited copyWithin will copy until the end of array
##### Example:
case 1:
```JavaScript
array = [ 1, 2, 3];
array.copyWithin(0,1,2);
//Output:[ 2, 2, 3]
```
case 2:
```JavaScript
array = [ 1, 2, 3, 4, 5, 6];
array.copyWithin(0, 4);
//Output:[5, 6, 3, 4, 5, 6]
```

 
  ## fill()
##### Syntax:[Info](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fill)
```JavaScript 
array.fill(value[, start[, end]])
```
The fill() method fills all the elements of an array
from a start index to an end index with a static value. 
The end index is not included
##### Example:
```JavaScript
[1, 2, 3].fill(4);               // Output: [4, 4, 4]
[1, 2, 3].fill(4, 1);            // Output: [1, 4, 4]
[1, 2, 3].fill(4, 1, 2);         // Output: [1, 4, 3]
[1, 2, 3].fill(4, 1, 1);         // Output: [1, 2, 3]
[1, 2, 3].fill(4, 3, 3);         // Output: [1, 2, 3]
[1, 2, 3].fill(4, -3, -2);       // Output: [4, 2, 3]
[1, 2, 3].fill(4, NaN, NaN);     // Output: [1, 2, 3]
[1, 2, 3].fill(4, 3, 5);         // Output: [1, 2, 3]
Array(3).fill(4);                // Output: [4, 4, 4]
```

 
  ## forEach()
##### Syntax:[Info](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
```JavaScript 
array.forEach(function callback(currentValue, index, array, thisArg));

```
**currentValue**(optional):The value of the current element being processed in the array.

**index**(optional):The index of the current element being processed in the array.

**array**(optional):The array that forEach() is being applied to.

**thisArg**(optional):Value to use as this (i.e the reference Object) when executing callback.

The forEach() method executes a provided function once for each array element.


##### Example:
```JavaScript
var array1 = ['a', 'b', 'c'];

array1.forEach(function(element) {
  console.log(element);
});

// output: "a"
// output: "b"
// output: "c"

```
```JavaScript
function addOne(currentValue, index, array) {
	array[index]++;
}
var array = ['1','2','3'];

array.forEach(addOne);

console.log(array);
// output:['2', '3', '4']

```
```JavaScript
var donuts = ["jelly donut", "chocolate donut", "glazed donut"];

donuts.forEach(function(good){ 
  good += " hole";
  good = good.toUpperCase();
  console.log(good);
});
/* output:
JELLY DONUT HOLE
CHOCOLATE DONUT HOLE
GLAZED DONUT HOLE*/
```
***!CAREFUL***
```JavaScript
var donuts = ["jelly donut", "chocolate donut", "glazed donut"];

donuts.forEach(function(good){ 
  good += " hole";
  good = good.toUpperCase();
  
});
console.log(array);//out of function
/* output:
jelly donut
chocolate donut"
glazed donut*/
```
  ## join()
##### Syntax:[Info](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join)
```JavaScript 
array.join([separator]);
```
The join() method creates and returns a new string by concatenating 
all of the elements in an array (or an array-like object),
separated by commas or a specified separator string.
##### Example:
```JavaScript
var array = ['Wind', 'Rain', 'Fire'];
array.join();      // 'Wind,Rain,Fire'
array.join(', ');  // 'Wind, Rain, Fire'
array.join(' + '); // 'Wind + Rain + Fire'
array.join('');    // 'WindRainFire'
```
  ## shift()
##### Syntax:[Info](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift)
```JavaScript 
array.shift();
```
Removes the first element from an array and returns that element.
##### Example:
```JavaScript
var array =["book", "apple", "pen"];
array.shift();
//Output: [apple, pen]
```
  ## slice()
##### Syntax:[Info](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)
```JavaScript 
array.slice(begin, end);
```
The slice() method returns a shallow copy of a portion of an array into a new array 
object selected from begin to end (end not included).
The original array will not be modified.
##### Example:
```JavaScript
var array =["book", "apple", "pen"];
array.slice(0,2);
//Output: ["book", "apple"]
```
  ## splice()
##### Syntax:[Info](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)
```JavaScript 
array.splice(start[, deleteCount[, item1[, item2[, ...]]]])
```
The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements.
Return removed elements
**start:** index at which to start changing the array
**deleteCount:** (optional) number of elements which gonna be removed
**item1...N:** (optional) The elements to add to the array, beginning at the start index.
##### Example:
```JavaScript
var array =["1", "two", "3"];
array.splice(1, 1, "2"); 
console.log(array);
/*output: ['1', '2', '3']
 return 'two'*/
```
```JavaScript
var months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// inserts at 1st index position
console.log(months);
// output: Array ['Jan', 'Feb', 'March', 'April', 'June']

months.splice(4, 1, 'May');
// replaces 1 element at 4th index
console.log(months);
// output: Array ['Jan', 'Feb', 'March', 'April'
```
  ## 
##### Syntax:[Info]()
```JavaScript 

```
Description
##### Example:
```JavaScript

```
  ## 
##### Syntax:[Info]()
```JavaScript 

```
Description
##### Example:
```JavaScript

```

