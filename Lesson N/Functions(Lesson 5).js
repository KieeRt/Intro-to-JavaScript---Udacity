5)
/*
Declare a function called laugh() that returns "hahahahahahahahahaha!". Print the value returned from the laugh() function to the console.
*/
/*
 * Programming Quiz: Laugh it Off 1 (5-1)
 */

// your code goes here
function laugh(){
    return 'hahahahahahahahahaha!';
}
console.log(laugh());
-------------------------------------------------------------------------
6)
/*
Write a function called laugh() that takes one parameter, num that represents the number of "ha"s to return.

TIP: You might need a loop to solve this!

Here's an example of the output and how to call the function that you will write:

console.log(laugh(3));
Prints: "hahaha!"
*/
/*
 * Programming Quiz: Laugh it Off 2 (5-2)
 *
 * Write a function called `laugh` with a parameter named `num` that represents the number of "ha"s to return.
 *
 * Note:
 *  - make sure your the final character is an exclamation mark ("!")
 *  - make sure that your function produces the correct results when it is called multiple times
 */
function laugh(num){
var word='';
	for(var i=0;i<num;i++){
		word += 'ha';
	}
word += '!';
return word;
}

var num=3;
	console.log(laugh(num));
-------------------------------------------------------------------------
12)
/*
For this quiz, you're going to create a function called buildTriangle() that will accept an input 
(the triangle at its widest width) and will return the string representation of a triangle.
 See the example output below.

buildTriangle(10);*/
/*
 * Programming Quiz: Build A Triangle (5-3)
 */

// creates a line of * for a given length
function makeLine(length) {
    var line = "";
    for (var j = 1; j <= length; j++) {
        line += "* ";
    }
    return line + "\n";
}
function buildTriangle(size){
var triangle= '';
    for(var i=1;i<=size;i++){//Loops for each line
        triangle+=makeLine(i);//Add to triangle new line of char(Recal funnction makeLine())
    }
    return triangle; //return our complete triangle
}


console.log(buildTriangle(10));//Recal function buildTriangle with '10' like argument

function helloCat(callbackfunction) {
	// body...
}
-------------------------------------------------------------------------
20)
/*
Write an anonymous function expression that stores a function in a variable called "laugh" and outputs the number of "ha"s that you pass in as an argument.

laugh(3);
/*
 * Programming Quiz: Laugh (5-4)
 */

var laugh = function(num){ //global variable take value from annonymous function 
var laugh='';				//Declaration of local (at annonymous function) variable 
    for(var i=0;i<num;i++){ //loop for a num times
        laugh += 'ha';		//Every loop add one 'ha' at laugh variable
    }
    return laugh +'!'; //at the end of loop and '!' on the end of word
}

console.log(laugh(10));  //Recal function variable laugh with '10' like a argument 
-------------------------------------------------------------------------
21)
/*
Write a named function expression that stores the function in a variable called cry and returns "boohoo!". Don't forget to call the function using the variable name, not the function name:

cry();
*/
/*
 * Programming Quiz: Cry (5-5)
 */

var cry = function crying(){
    
    return 'boohoo!';
}
console.log(cry());
-------------------------------------------------------------------------
22)
/*
Call the emotions() function so that it prints the output you see below, 
but instead of passing the laugh() function as an argument, 
pass an inline function expression instead.
*/
/*
 * Programming Quiz: Inline Functions (5-6)
 */

// don't change this code
function emotions(myString, myFunc) {
    console.log("I am " + myString + ", " + myFunc(2));
}

// your code goes here
emotions('happy', function laugh(num){
    var laugh='';			//Declaration of local (at annonymous function) variable 
    for(var i=0;i<num;i++){ //loop for a num times
        laugh += 'ha';		//Every loop add one 'ha' at laugh variable
    }
    return laugh +'!'; 		//at the end of loop and '!' on the end of word

});


