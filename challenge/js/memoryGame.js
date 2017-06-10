
// Array of images to be used on the front of the cards
// This will get shuffled
var memes = [
  './memes/aliensguy.jpg',
  './memes/cheers.png',
  './memes/grumpycat.png',
  './memes/nyancat_big.gif',
  './memes/success.png',
  './memes/all_the_things.jpg',
  './memes/datboi.gif',
  './memes/happy_obama.png',
  './memes/one_does_not_simply.png',
  './memes/surprised_obama.png',
  './memes/aw_yeah.gif',
  './memes/doge.png',
  './memes/harold.jpg',
  './memes/pikachu_dancing.gif',
  './memes/terminal.png',
  './memes/badger.gif',
  './memes/feels.png',
  './memes/hypnotoad.gif',
  './memes/rick.png',
  './memes/trogdor.png',
  './memes/billnye.gif',
  './memes/fridayfriday.png',
  './memes/james_comey.png',
  './memes/rickastely.png',
  './memes/trump_china.png',
  './memes/blazeit420.png',
  './memes/fsociety.png',
  './memes/morty.png',
  './memes/ron_swanson.png',
  './memes/xzibit.png',
  './memes/bmo.gif',
  './memes/gaben.png',
  './memes/nicmoji_smile.gif',
  './memes/sad_obama.png',
];

// This will reference a position in the memes array.
// Each position will be used twice by a for loop
// to assign an image to a card.
/*var cardMatches [
  0,1,2,3,4,5
];

// Represents the order we will go through each #memorygame child
// in assigning cardMatches.
// This will get shuffled.
var cardOrder [
  0,1,2,3,4,5,6,7,8,9,10,11
];*/

//  Total number of attempts at matching pictures
//  Is displayed at the end of each game
var attempts = 0;

// Initial Setup
$(document).ready(function (memoryGame) {

  
  // Create Grid
  createGrid();

  // Sets class 'back' on for all cards
  hideAll();

  // Event handling - Click - Toggles class 'back'
  $('.card').bind('click', function (){
    $(this).toggleClass('back');
  });

  // Add back of card image

  // Shuffle card faces
  
  // Add front faces in hidden state

  // Fade - Test
  var testImg = './memes/datboi.gif';
  fadeTest(".test", testImg);
  
});

// Create Grid
function createGrid() {
  // Desktop:            4 x 3
  // Phone - Landscape:  2 x 6
  // Phone - Portrait:   12 x 1
  var output="";
  for (i = 0; i < 12; i++) {
    output += ("<div class='col-xs-12 col-sm-6 col-md-4 card'>");
    output += ("<img src='./images/Chrome.png' class=cardImage height=10");
    output += ("</div>");
    document.getElementById("memoryGame").innerHTML=output;
  }
}

// Give back class to all children of id=memorygame
function hideAll() {
  $('#memoryGame').children().addClass('back');
}

// Change image of card to file
function fadeTest(card, file) {

  $(card).fadeOut(1000, function () {
    $(this).attr('src', file).fadeIn(1000);
  });
  
}

// Change image


// Play Again

// Restart

// Function - Shuffle

// Optional Feature - Game Timer

// Optional Feature - Turn Timer

// Optional Feature - Local Two Player