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
----------------------------------------------------------------------------------------------------------------
6)
/*
 * Programming Quiz: Countdown, Liftoff! (4-3)
 * 
 * Using a while loop, print out the countdown output above.
 */

/*
Orbiter transfers from ground to internal power (T-50 seconds)
Ground launch sequencer is go for auto sequence start (T-31 seconds)
Activate launch pad sound suppression system (T-16 seconds)
Activate main engine hydrogen burnoff system (T-10 seconds)
Main engine start (T-6 seconds)
Solid rocket booster ignition and liftoff! (T-0 seconds)
*/
var countdown=60;
	while(countdown>(-1)){
		switch(countdown){
			case 50:
				console.log('Orbiter transfers from ground to internal power');
				break;
			case 31:
				console.log('Ground launch sequencer is go for auto sequence start');
				break;
			case 16:
				console.log('Activate launch pad sound suppression system');
				break;
			case 10:
				console.log('Activate main engine hydrogen burnoff system');
				break;
			case 6:
				console.log('Main engine start');
				break;
			case 0:
				console.log('Solid rocket booster ignition and liftoff!');
				break;
			default:
				console.log('T-'+countdown+" seconds");
				break;
		}
		countdown=countdown-1;
	}
----------------------------------------------------------------------------------------------------------------
11)
/*
 * Programming Quiz: Changing the Loop (4-4)
 */

// rewrite the while loop as a for loop
/*
var x = 9;
while (x >= 1) {
  console.log("hello " + x);
  x = x - 1;
}
*/
for(var x=9;x>=1;x--){
    console.log("hello " + x);
}
----------------------------------------------------------------------------------------------------------------
12)
/*
 * Programming Quiz: Fix the Error 1 (4-5)
 */

// fix the for loop
/*
for (x < 10; x++) {
  console.log(x);
}*/
for (var x=5;x < 10; x++) {
    console.log(x);
}



----------------------------------------------------------------------------------------------------------------
13)
/*
 * Programming Quiz: Fix the Error 2 (4-6)
 */

// fix the for loop
/*
for (var k = 0 k < 200 k++) {
  console.log(k);
}
*/
for (var k = 0; k < 200; k++) {
    console.log(k);
}


----------------------------------------------------------------------------------------------------------------
14)
/*
Write a for loop that prints out the factorial of the number 12:

A factorial is calculated by multiplying a number by all the numbers below it. For instance, 3! or "3 factorial" is 3 * 2 * 1 = 6

3! = 3 * 2 * 1 = 6 3!=3∗2∗1=6
4! = 4 * 3 * 2 * 1 = 24 4!=4∗3∗2∗1=24
5! = 5 * 4 * 3 * 2 * 1 = 120 5!=5∗4∗3∗2∗1=120
 * Programming Quiz: Factorials (4-7)
*/
var solution=1;
    for(var x=12;x>0;x--){
        solution=solution*x;
    }
	console.log(solution);

----------------------------------------------------------------------------------------------------------------
15
/*
Theater seats often display a row and seat number to help theatergoers find their seats. 
If there are 26 rows (0 to 25) and 100 seats (0 to 99) in each row, 
write a nested for loop to print out all of the different seat combinations in the theater.

Example output for row-seat information: output each row and seat number on a separate line

0-0
0-1
0-2
...
25-97
25-98
25-99
*/
/*
 * Programming Quiz: Find my Seat (4-8)
 * 
 * Write a nested for loop to print out all of the different seat combinations in the theater.
 * The first row-seat combination should be 0-0 
 * The last row-seat combination will be 25-99
 * 
 * Things to note: 
 *  - the row and seat numbers start at 0, not 1
 *  - the highest seat number is 99, not 100
 */

    for(var i=0;i<26;i++){
        for(var j=0;j<100;j++){
            console.log(i+"-"+j);
        }
    }

	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
