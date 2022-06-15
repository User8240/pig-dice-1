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

Player.prototype.turn = function(die){
  let dieRoll = die.roll();
  if(dieRoll != 1){
    this.turnScore += dieRoll;
  }else{
    this.turnScore = 0;
    this.hold();
  }
  return dieRoll;
};

Player.prototype.hold = function(){
  this.totalScore += this.turnScore;
  this.turnScore = 0;
  toggleButtons();
};

//UI logic

function toggleButtons(){
  if ($('#player1Hold').prop('disabled', false)){
    $('#player1Hold').prop('disabled', true);
    $('#player1Turn').prop('disabled', true);
    $('#player2Hold').prop('disabled', false);
    $('#player2Turn').prop('disabled', false);
  }else if ($('#player2Hold').prop('disabled', false)){
    $('#player1Hold').prop('disabled', false);
    $('#player1Turn').prop('disabled', false);
    $('#player2Hold').prop('disabled', true);
    $('#player2Turn').prop('disabled', true);
  }
}

$(document).ready(function() {
  let player1;
  let player2;
  let die = new Die(6);
  $("form#new-player-1").submit(function(event) {
    event.preventDefault();
    const player1Name = $("input#player-1-name").val();
    player1 = new Player(player1Name);
    console.log(player1.name);
  });
  $("form#new-player-2").submit(function(event) {
    event.preventDefault();
    const player2Name = $("input#player-2-name").val();
    player2 = new Player(player2Name);
    console.log(player2.name)
  });
  $("#player1Turn").click(function() {
    console.log(10)
    player1.turn(die);
    $("#rollValue").append(player1.turn(die))
  });
  $("#player1Hold").click(function() {
    player1.hold();
  });
});


