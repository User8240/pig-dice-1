// Die Object Constructor with a side parameter. The constructed objects sides is equal to the amount passed in as an argument.
function Die(sides){
  this.sides = sides;
}

// Method that Die objects can use. Gets a random number based on the sides value of the Die then returns that random number
Die.prototype.roll = function(){
  roll = Math.floor(Math.random() * this.sides) + 1;
  return roll;
};

// Player Object Constructer with a name parameter.  this.name is set the the name passed as an argument.  The scores start at 0 because they will be modified later and don't need an initial value. 
function Player(name){
  this.name = name;
  this.turnScore = 0;
  this.totalScore = 0;
}

// Method that Player objects can use to roll a dice.  If the dice roll is 1, it will set the turn score to 0, and force the player to hold. Otherwise, it'll add the dice roll to current turnScore.
Player.prototype.turn = function(die){
  let dieRoll = die.roll();
  //NEW: add a die roll key to the player, so we can access and display it on every roll.
  this.dieRoll = dieRoll;
  if(dieRoll != 1){
    this.turnScore += dieRoll;
  }else{
    this.turnScore = 0;
    this.hold();
  }
};

// Method that Player objects can use that will add the current turnScore to the totalScore.  It will also reset the turn score to 0, so it starts from 0 on the next turn. Also calls the toggleButtons function, by doing so it will essentially end the current players turn.
Player.prototype.hold = function(){
  this.totalScore += this.turnScore;
  this.turnScore = 0;
  toggleButtons();
};

//UI logic

// Function that disables the currently active player buttons when called, and activates the other players buttons.  We will want to do this to change turns. Game should always start with player2 disabled.
function toggleButtons(){

  //NEW: Getting the button element by its ID and convert into a variable
  let player1BTN = document.getElementById('player1Hold');
  let player2BTN = document.getElementById('player2Hold');

  //NEW: Clear the rollValue <p> when the turn ends so it will reset and start to take the next players roll values.
  $(".rollValue").text("");

  //UPDATED: Checking if the player 1 buttons are NOT disabled.
  if (player1BTN.disabled == false){
    // If player 1 buttons are NOT disabled, disable them and activate player 2 buttons
    $('#player1Hold').prop('disabled', true);
    $('#player1Turn').prop('disabled', true);
    $('#player2Hold').prop('disabled', false);
    $('#player2Turn').prop('disabled', false);
  }
  //UPDATED: Checking if the player 2 buttons are NOT disabled.
  else if (player2BTN.disabled == false){
    // If player 2 buttons are NOT disabled, disable them and activate player 1 buttons
    $('#player1Hold').prop('disabled', false);
    $('#player1Turn').prop('disabled', false);
    $('#player2Hold').prop('disabled', true);
    $('#player2Turn').prop('disabled', true);
  }
}

$(document).ready(function() {

  //NEW: Start the document with all player buttons disabled
  $('#player2Hold').prop('disabled', true);
  $('#player2Turn').prop('disabled', true);
  $('#player1Hold').prop('disabled', true);
  $('#player1Turn').prop('disabled', true);

  //Make an empty player 1 and player2 variable so they are accessible throughout the function. Also make a die with 6 sides.
  let player1;
  let player2;
  let die = new Die(6);

  $("form#new-player-1").submit(function(event) {
    event.preventDefault();

    //When player1 submits a name, convert the player1 variable to a Player Object with that name passed as an argument.
    const player1Name = $("input#player-1-name").val();
    player1 = new Player(player1Name);

    //NEW: Enable player 1 buttons, hide form, and hide submit button.
    $('#player1Hold').prop('disabled', false);
    $('#player1Turn').prop('disabled', false);
    $("form#new-player-1").hide();

    //NEW: Change player 1 header in html to show the players name.
    $("#player-1-new-name").text(player1.name + ":");

  });
  $("form#new-player-2").submit(function(event) {
    event.preventDefault();

    //When player2 submits a name, convert the player1 variable to a Player Object with that name passed as an argument.
    const player2Name = $("input#player-2-name").val();
    player2 = new Player(player2Name);

    //NEW: Enable player 2 buttons, hide form, and hide submit button.
    $('#player2Hold').prop('disabled', false);
    $('#player2Turn').prop('disabled', false);
    $("form#new-player-2").hide();

    //NEW: Change player 2 header in html to show the players name
    $("#player-2-new-name").text(player2.name + ":");

  });
  $("#player1Turn").click(function() {

    //Call turn on player1 with the 6 sided die
    player1.turn(die);

    //NEW: Append the die roll value to the rollValue <p> in the html if it isn't 1
    if (player1.dieRoll != 1){
      $(".rollValue").append(player1.dieRoll + " ");
    }

  });
  $("#player1Hold").click(function() {

    //NEW: Call the hold function on player1, then output the text into the totalScoreP1 <p>
    player1.hold();
    $(".totalScoreP1").text(player1.totalScore);
  });
  $("#player2Turn").click(function() {

    //Call turn on player2 with the 6 sided die
    player2.turn(die);

    //NEW: Append the die roll value to the rollValue <p> in the html if it isn't 1
    if (player2.dieRoll != 1){
      $(".rollValue").append(player2.dieRoll + " ");
    }

  });
  $("#player2Hold").click(function() {
    player2.hold();
    $(".totalScoreP2").text(player2.totalScore);
  });
});