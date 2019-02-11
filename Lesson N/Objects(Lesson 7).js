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


