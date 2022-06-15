Describe Die.prototype.roll():

Test: "It will generate a random number based on the amount of sides of the die it's called on"  
Code:  
die1 = new Die(6);  
rollValue = die1.roll();  
Expected Output: rollValue; (_any # 1 - 6_) 

Test: "It will add every dice roll's value to the players turn score and output the turn score total"  
Code:  
die = new Die(6);  
player1 = new Player("Frank");  
player1.turn(die);  
player1.turn(die);  
player1.turn(die);  
console.log(player1.turnScore);     
Expected Output: _turn#1 + turn#2 + turn#3 = total turnScore_