This is minimalist list of methods you will need during your course,
this all methods will explain during course on different step. 

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
```
##### Output: 
```
[ "book", "book", "pen"]
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
```
##### Output:
```
 [ "book", "apple"]
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
numbW.concat(numb1, numb2, numb3)
```
case 2:
```
var numb1 = [1,2,3];
var numb2 = [4,5,6];
var numb3 = [7,8,9];
var numb= numb1.concat(numb2, numb3);
```
##### Output:
case 1:
```
["x", "y", 1, 2, 3, 4, 5, 6, 7, 8, 9]
```
case 2:
```
[1, 2, 3, 4, 5, 6, 7, 8, 9]
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
```
case 2:
```
array = [ 1, 2, 3, 4, 5, 6];
array.copyWithin(0, 4);
```
##### Output:
case 1:
```
[ 2, 2, 3]
```
case 2:
```
[5, 6, 3, 4, 5, 6]
```
 
  ## 
##### Syntax:[Info]()
```JavaScript 

```
Description
##### Example:
```JavaScript

```
##### Output:
```

```
 
  ## 
##### Syntax:[Info]()
```JavaScript 

```
Description
##### Example:
```JavaScript

```
##### Output:
```

```
 
