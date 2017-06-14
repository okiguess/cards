$(document).ready(function() {

  var suits = ["hearts","spades","clubs","diamonds"];
  var ranks = ["ace","two","three","four","five","six","seven","eight","nine","ten","jack","queen","king",];

  suits.forEach(function(suit) {


    $("#deal").append("<li>" + suit + "</li>");
  });
});
