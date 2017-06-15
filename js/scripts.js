$(document).ready(function() {

  var suits = ["hearts","spades","clubs","diamonds"];
  var ranks = ["ace","two","three","four","five","six","seven","eight","nine","ten","jack","queen","king",];

  var deck = [];

  $("#deal").click(function() {
    suits.forEach(function(suit) {
      ranks.forEach(function(rank) {
        $("#deal-list").append("<li>" + suit + rank + "</li>");
      })
    })
  });



});
