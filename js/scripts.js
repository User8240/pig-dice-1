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

$("#player1Turn").click(function() {
  player1.turn(die);
  $("#rollValue").append(player1.turn(die))
});
$("#player1Hold").click(function() {
  player1.hold();
});

$(document).ready(function() {
  let player1 = new Player("");
  let player2 = new Player("");
  console.log(player1.name);
  console.log(player2.name);
  $("form#new-player-1").submit(function(event) {
    event.preventDefault();
    const player1Name = $("input#player-1-name").val();
    player1.name = player1Name;
  });
  $("form#new-player-2").submit(function(event) {
    event.preventDefault();
    const player2Name = $("input#player-2-name").val();
    player2.name = player2Name;
  });
  console.log(player1.name);
  console.log(player2.name);
});

//Ex:|| Movie-Tickets
// $('#howmuch-button').click(function(event) {
//   event.preventDefault();
//   const ticket = getTicket();
//   // print in ticketReturn the price and the msg
//   $('#ticket-price').text("$ " + ticket.priceMsg[0]);
//   $('#ticket-price-msg').text(ticket.priceMsg[1]);
//   $('.ticketReturn').toggle();
//   // enable ticket buy button
//   $('#buy-button').removeAttr('disabled');
// });
// $('form#ticketForm').submit(function(event) {
//   event.preventDefault();
//   const ticket = getTicket();
//   ticketsSold.addTicket(ticket);
//   attachSoldTickets(ticket);
//   // clear fields and disable ticket buy button
//   $('#buy-button').prop('disabled', true);
//   clearTicketInformation();
// });
// });


