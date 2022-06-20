# _Pig Dice_

#### By _**Grace Kostanich & Frank Timmons**_

#### _A webpage allowing two users to play the game "Pig Dice"_

## Technologies Used

* _HTML_
* _CSS_
* _JS_

## Description

_This is a webpage written in HTML using Bootstrap CSS for styling & JavaScript for functionality._

## Setup/Installation Requirements

* _Fork project to your own GitHub repository_ 
* _Clone that repository to your desktop_
* _Open index.html or view any files you'd like!_

## Known Bugs

* _No known issues_

## License

_none_

Copyright (c) _6/15/2022_ _Grace Kostanich & Frank Timmons_

----------------------------------------------------------------------

## Tests

Describe Die.prototype.roll():

**Test:** "It will generate a random number based on the amount of sides of the die it's called on"  
Code:  
die1 = new Die(6);  
rollValue = die1.roll();  
Expected Output: rollValue; (_any # 1 - 6_) 
  
Describe Player.prototype.turn():

**Test:** "It will add every dice roll's value to the players turn score and output the turn score total"  
Code:  
die = new Die(6);  
player1 = new Player("Frank");  
player1.turn(die);  
player1.turn(die);  
player1.turn(die);  
console.log(player1.turnScore);     
Expected Output: _turn#1 + turn#2 + turn#3 = total turnScore_

**Test:** "When a player scores 1, the turn score is set to zero"  
Code:  
die = new Die(6); 
player1 = new Player("Frank");    
player1.turn(die); _This roll will be 1_ 
console.log(player1.turnScore);
Expected Output: 0  

**Test:** "When a players turn score is set to zero, switch to the other player"  
Code:  
die = new Die(6); 
player1 = new Player("Frank");    
player1.turn(die); _This roll will be 1_ 
console.log(activePlayer);
Expected Output: 

Describe Player.prototype.hold():

**Test:** "When a player holds, the turn score is added to the total score"  
Code:  
player1 = new Player("Frank");  
player1.hold();  
console.log(player1.totalScore);  
Expected Output: _totalScore_  

**Test:** "When a player holds, the turn score is reset to zero"  
Code:  
player1 = new Player("Frank");  
player1.hold();  
console.log(player1.turnScore);  
Expected Output: 0 
