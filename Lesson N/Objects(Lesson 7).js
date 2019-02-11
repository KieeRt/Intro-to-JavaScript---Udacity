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
--------------------------------------------------------------------------------------------
9)
Directions:
Using the given object:

var savingsAccount = {
  balance: 1000,
  interestRatePercent: 1,
  deposit: function addMoney(amount) {
    if (amount > 0) {
      savingsAccount.balance += amount;
    }
  },
  withdraw: function removeMoney(amount) {
    var verifyBalance = savingsAccount.balance - amount;
    if (amount > 0 && verifyBalance >= 0) {
      savingsAccount.balance -= amount;
    }
  }
};
add a printAccountSummary() method that returns the following account message:

Welcome!
Your balance is currently $1000 and your interest rate is 1%.
/*
 * Programming Quiz: Bank Accounts 1 (7-3)
 */

var savingsAccount = {
    balance: 1000,
    interestRatePercent: 1,
    deposit: function addMoney(amount) {
        if (amount > 0) {
            savingsAccount.balance += amount;
        }
    },
    withdraw: function removeMoney(amount) {
        var verifyBalance = savingsAccount.balance - amount;
        if (amount > 0 && verifyBalance >= 0) {
            savingsAccount.balance -= amount;
        }
    },
    printAccountSummary: function Summary(){
        return "Welcome!\nYour balance is currently $1000 and your interest rate is 1%.";
    }
};

console.log(savingsAccount.printAccountSummary());

-----------------------------------------------------------------------------------------------
    11)
    Directions:
Create an object called facebookProfile. The object should have 3 properties:

your name
the number of friends you have, and
an array of messages you have posted (as strings)
The object should also have 4 methods:

postMessage(message) - adds a new message string to the array
deleteMessage(index) - removes the message corresponding to the index provided
addFriend() - increases the friend count by 1
removeFriend() - decreases the friend count by 1

/*
 * Programming Quiz: Facebook Friends (7-5)
 */

var facebookProfile = {
    name: "Dmytro",
    friends: 100,
    messages: ["Hello"],
    postMessage: function addMessage(message){
        facebookProfile.messages.push(message);
    },
    deleteMessage: function eraseMessage(index){
        facebookProfile.messages.splice(index,1);
    },
    addFriend: function addNew(){
        facebookProfile.friends+=1;
    },
    removeFriend: function eraseFriend(){ //Note: simple facebookProfile.friends-- will not be accepted
        var tmp;
        tmp=facebookProfile.friends;
        tmp--;
        facebookProfile.friends=tmp;
    },   
};
----------------------------------------------------------------------------------------------------------
12)
Here is an array of donut objects.

var donuts = [
  { type: "Jelly", cost: 1.22 },
  { type: "Chocolate", cost: 2.45 },
  { type: "Cider", cost: 1.59 },
  { type: "Boston Cream", cost: 5.99 }
];
Directions:
Use the forEach() method to loop over the array and print out the following donut summaries using console.log.

Jelly donuts cost $1.22 each
Chocolate donuts cost $2.45 each
Cider donuts cost $1.59 each
Boston Cream donuts cost $5.99 each

/*
 * Programming Quiz: Donuts Revisited (7-6)
 */

var donuts = [
    { type: "Jelly", cost: 1.22 },
    { type: "Chocolate", cost: 2.45 },
    { type: "Cider", cost: 1.59 },
    { type: "Boston Cream", cost: 5.99 }
];

donuts.forEach(function(types){
    console.log(types.type+" donuts cost $"+types.cost+" each");
});


