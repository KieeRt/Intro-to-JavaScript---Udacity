3)
Directions:
Using the umbrella example from the previous video, see if you can follow the example open() method and create the close() method. 
It's alright if you have trouble at first! We'll go into more detail later in this lesson.
/*
 * Programming Quiz: Umbrella (7-1)
 */

var umbrella = {
    color: "pink",
    isOpen: true,
    open: function() {
        if (umbrella.isOpen === true) {
            return "The umbrella is already opened!";
        } else {
            umbrella.isOpen = true;
            return "Julia opens the umbrella!";
        }
    },
    close: function(){
        if(umbrella.isOpen===false){
            return "The umbrella is already closed!";
        }   else{
            umbrella.isOpen = false;
            return "Julia closes the umbrella!";
        } 
    },
    
};
-------------------------------------------------------------------------------------------
8)
Directions:
Create a breakfast object to represent the following menu item:

The Lumberjack - $9.95
eggs, sausage, toast, hashbrowns, pancakes
The object should contain properties for the name, price, and ingredients.
/*
 * Programming Quiz: Menu Items (7-2)
 */

var breakfast = {
    name: "The Lumberjack",
    cost: 9.95,
    ingredients:["eggs", "sausage", "toast", "hashbrowns", "pancakes"]
};
