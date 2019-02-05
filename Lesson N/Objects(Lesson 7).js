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

