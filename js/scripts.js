function Die(sides){
  this.sides = sides;
}

Die.prototype.roll = function(){
  roll = Math.floor(Math.random() * this.sides) + 1;
  return roll;
};

function Player(name){
  this.name = name;
  this.turnScore = 0;
  this.totalScore = 0;
}

//this would happen when a player hits the roll button
Player.prototype.turn = function(die){
  let dieRoll = die.roll()
  if(dieRoll != 1){
    this.turnScore += dieRoll;
  }else{
    this.turnScore = 0;
  }
};

//when a player holds, the turn score is added to the total score
Player.prototype.hold = function(){
  this.totalScore += this.turnScore;
  this.turnScore = 0;
};

die = new Die(6);
player1 = new Player("Frank");

player1.turn(die);