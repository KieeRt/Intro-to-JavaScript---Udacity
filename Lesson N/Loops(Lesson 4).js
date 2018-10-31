4)
/*
 * Programming Quiz: JuliaJames (4-1)
 */

var x = 1;
var output;

while (x<=20) {
   output= x%3===0 ? (x%5===0 ? 'JuliaJames': 'Julia') : (x%5===0 ? 'James' : x);// check divisibility
   console.log(output); // print Julia, James, or JuliaJames
   x=x+1;// increment x
}
----------------
// ALTERNATIVE 1:
/*
 * Programming Quiz: JuliaJames (4-1)
 */

var x = 1;
while (x<=20) {
    x%3===0 ? (x%5===0 ? console.log('JuliaJames'): console.log('Julia')) : (x%5===0 ? console.log('James') : console.log(x));// check divisibility
   x=x+1;// increment x
}
----------------
// ALTERNATIVE 2:
/*
 * Programming Quiz: JuliaJames (4-1)
 */

var x = 1;

while (x<=100) {
   if(x%15===0){
   	console.log('JuliaJames');
   }
   else if(x%3===0){
   	console.log('Julia');
   }
   else if(x%5===0){
   	console.log('James');
   }
   else{
   	console.log(x);
   }

   x=x+1;// increment x
}
----------------------------------------------------------------------------------------------------------------
5)
/*
 * Programming Quiz: 99 Bottles of Juice (4-2)
 *
 * Use the following `while` loop to write out the song "99 bottles of juice".
 * Log the your lyrics to the console.
 *
 * Note
 *   - Each line of the lyrics needs to be logged to the same line.
 *   - The pluralization of the word "bottle" changes from "2 bottles" to "1 bottle" to "0 bottles".
 */

var num = 99;

while (num!==0) {
  	if(num>2){
   		console.log(num +' bottles of juice on the wall! '+ num + ' bottles of juice! Take one down, pass it around... '+(num-1)+' bottles of juice on the wall!');
   	}
   	else if(num===2){
   		console.log(num +' bottles of juice on the wall! '+ num + ' bottles of juice! Take one down, pass it around... '+(num-1)+' bottle of juice on the wall!');
   	}
   	else if(num===1){
		console.log(num +' bottle of juice on the wall! '+ num + ' bottle of juice! Take one down, pass it around... '+(num-1)+' bottles of juice on the wall!');
   	
   	}
    num=num-1;// decrement num
}
