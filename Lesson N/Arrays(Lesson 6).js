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
```JavaScript
var captain = "Mal";
var second = "Zoe";
var pilot = "Wash";
var companion = "Inara";
var mercenary = "Jayne";
var mechanic = "Kaylee";

var crew =[captain, second, pilot, companion, mercenary, mechanic];
console.log(crew);
```
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
 
 
 
 -------------------------------------------------------------------------------------------
 
 
 -------------------------------------------------------------------------------------------
 
 -------------------------------------------------------------------------------------------
