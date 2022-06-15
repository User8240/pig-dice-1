function Die(sides){
  this.sides = sides;
}

Die.prototype.roll = function(){
  roll = Math.floor(Math.random() * this.sides) + 1;
  return roll;
};


function(){
  die = new die(6);
  rollValue = die.roll();
}

