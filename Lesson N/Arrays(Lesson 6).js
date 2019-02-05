6) /*QUEST:
Create an array called udaciFamily and add "Julia", "James", and your name to the array.
Then, print the udaciFamily to the console using console.log.
*/
/*
 * Programming Quiz: UdaciFamily (6-1)
 */

// your code goes here
var udaciFamily=["Julia", "James", "YourName"];

console.log(udaciFamily);
-------------------------------------------------------------------------------------------
7)
/* QUEST:
Create an array called crew to organize the Serenity’s crew and set it equal to the variables below .
You don't need to type out the actual strings, just use the provided variables.
*/
/*
 * Programming Quiz: Building the Crew (6-2)
 */

var captain = "Mal";
var second = "Zoe";
var pilot = "Wash";
var companion = "Inara";
var mercenary = "Jayne";
var mechanic = "Kaylee";

var crew =[captain, second, pilot, companion, mercenary, mechanic];
console.log(crew);

-------------------------------------------------------------------------------------------
8)
/* QUEST:
Starting with this array of prices, change the prices of the 1st, 3rd, and 7th elements in the array.

var prices = [1.23, 48.11, 90.11, 8.50, 9.99, 1.00, 1.10, 67.00];
*/
/*
 * Programming Quiz: The Price is Right (6-3)
 */

var prices = [1.23, 48.11, 90.11, 8.50, 9.99, 1.00, 1.10, 67.00];

prices[0] = 100;
prices[2] = 0;
prices [6] = 100000;

console.log(prices);
-------------------------------------------------------------------------------------------
14)
/*
Directions:
James was creating an array with the colors of the rainbow, and he forgot some colors. 
The standard rainbow colors are usually listed in this order:

var rainbow = ["Red", "Orange", "Yellow", "Green", "Blue", "Purple"];
but James had this:

var rainbow = ["Red", "Orange", "Blackberry", "Blue"];
Using only the splice() method, insert the missing colors into the array, and remove the color "Blackberry"
by following these steps:

Remove "Blackberry"
Add "Yellow" and "Green"
Add "Purple"
*/
/*
 * Programming Quiz: Colors of the Rainbow (6-4)
 *
 * Use only the splice() method to modify the rainbow variable:
 *  - remove "Blackberry"
 *  - add "Yellow" and "Green"
 *  - add "Purple"
 */

var rainbow = ['Red', 'Orange', 'Blackberry', 'Blue']; 
rainbow.splice(2,1, "Yellow", "Green"); //Start from index 2, remove 1 element and add "Yello", "Green"
rainbow.splice(5, 0, "Purple"); //Start from index 5, remove 0 element and add "Purple";
console.log(rainbow);

// your code goes here
 
-------------------------------------------------------------------------------------------
15)
/*
In the Harry Potter novels, children attending the Hogwarts School of Witchcraft and Wizardry belong to one of four houses: Gryffindor, Hufflepuff, Ravenclaw, or Slytherin. Each year, the houses assemble a Quidditch team of seven players to compete for the coveted Quidditch Cup.

Consider the following array.

var team = ["Oliver Wood", "Angelina Johnson", "Katie Bell", "Alicia Spinnet", "George Weasley", "Fred Weasley", "Harry Potter"];
Directions:
Create a function called hasEnoughPlayers() that takes the team array as an argument and returns true or false depending on if the array has at least seven players.
*/
/*
 * Programming Quiz: Quidditch Cup (6-5)
 */

// your code goes here

var team = ["Oliver Wood", "Angelina Johnson", "Katie Bell", "Alicia Spinnet", "George Weasley", "Fred Weasley", "Harry Potter"];
console.log(hasEnoughPlayers(team));

function hasEnoughPlayers(array){
    if (array.length>=7)
        return true;
    else 
        return false;
}

-------------------------------------------------------------------------------------------
 16)
/*
Directions:
In an earlier exercise, you created a crew array to represent Mal’s crew from the hit show Firefly.

var captain = "Mal";
var second = "Zoe";
var pilot = "Wash";
var companion = "Inara";
var mercenary = "Jayne";
var mechanic = "Kaylee";

var crew = [captain, second, pilot, companion, mercenary, mechanic];
Later in the show, Mal takes on three new crew members named "Simon", "River", and "Book". Use the push() method to add the three new crew members to the crew array.

var doctor = "Simon";
var sister = "River";
var shepherd = "Book";
*/
 /*
 * Programming Quiz: Joining the Crew (6-6)
 */

var captain = "Mal";
var second = "Zoe";
var pilot = "Wash";
var companion = "Inara";
var mercenary = "Jayne";
var mechanic = "Kaylee";

var crew = [captain, second, pilot, companion, mercenary, mechanic];

var doctor = "Simon";
var sister = "River";
var shepherd = "Book";
crew.push(doctor, sister, shepherd);
console.log(crew);

// your code goes here

-------------------------------------------------------------------------------------------
 20)
 Directions:
Use the array's forEach() method to loop over the following array and add 100 to each of the values if the value is divisible by 3.
 /*
 * Programming Quiz: Another Type of Loop (6-8)
 *
 * Use the existing `test` variable and write a `forEach` loop
 * that adds 100 to each number that is divisible by 3.
 *
 * Things to note:
 *  - you must use an `if` statement to verify code is divisible by 3
 *  - you can use `console.log` to verify the `test` variable when you're finished looping
 */

var test = [12, 929, 11, 3, 199, 1000, 7, 1, 24, 37, 4,
    19, 300, 3775, 299, 36, 209, 148, 169, 299,
    6, 109, 20, 58, 139, 59, 3, 1, 139
];

test.forEach(function(number,index,array) {
    if(number%3===0)
        array[index]+=100;
})

console.log(test);
 
 -------------------------------------------------------------------------------------------
 22)
 Directions:
Use the map() method to take the array of bill amounts shown below, and create a second array of
numbers called totals that shows the bill amounts with a 15% tip added.
/*
 * Programming Quiz: I Got Bills (6-9)
 *
 * Use the .map() method to take the bills array below and create a second array
 * of numbers called totals. The totals array should contains each amount from the
 * bills array but with a 15% tip added. Log the totals array to the console.
 *
 * For example, the first two entries in the totals array would be:
 *
 * [57.76, 21.99, ... ]
 *
 * Things to note:
 *  - each entry in the totals array must be a number
 *  - each number must have an accuracy of two decimal points
 */

var bills = [50.23, 19.12, 34.01,
    100.11, 12.15, 9.90, 29.11, 12.99,
    10.00, 99.22, 102.20, 100.10, 6.77, 2.22
];
var totals = bills.map(function(x){
    x=x*1.15;
    x=x.toFixed(2);//Return string 
    x=Number(x);//Return number
    return x;
    
})
console.log(totals);

 
 -------------------------------------------------------------------------------------------
 25)
Directions:
Use a nested for loop to take the numbers array below and replace all of the values that are divisible by 2 (even numbers) 
with the string "even" and all other numbers with the string "odd".
/*
 * Programming Quiz: Nested Numbers (6-10)
 *
 *   - The `numbers` variable is an array of arrays.
 *   - Use a nested `for` loop to cycle through `numbers`.
 *   - Convert each even number to the string "even"
 *   - Convert each odd number to the string "odd"
 */

var numbers = [
    [243, 12, 23, 12, 45, 45, 78, 66, 223, 3],
    [34, 2, 1, 553, 23, 4, 66, 23, 4, 55],
    [67, 56, 45, 553, 44, 55, 5, 428, 452, 3],
    [12, 31, 55, 445, 79, 44, 674, 224, 4, 21],
    [4, 2, 3, 52, 13, 51, 44, 1, 67, 5],
    [5, 65, 4, 5, 5, 6, 5, 43, 23, 4424],
    [74, 532, 6, 7, 35, 17, 89, 43, 43, 66],
    [53, 6, 89, 10, 23, 52, 111, 44, 109, 80],
    [67, 6, 53, 537, 2, 168, 16, 2, 1, 8],
    [76, 7, 9, 6, 3, 73, 77, 100, 56, 100]
];


    for(var i = 0;i<numbers.length;i++){
        for(var j = 0;j<numbers[i].length;j++){
            if(numbers[i][j]%2===0){
                numbers[i][j]='even';
            }
            else{
                numbers[i][j]='odd';
                
            }
        }
    }
   console.log(numbers);

 -------------------------------------------------------------------------------------------
