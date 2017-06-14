
// Array of images to be used on the front of the cards
// This will get shuffled
var memes = [
  //'./memes/aliensguy.jpg',
  './memes/cheers.png',
  './memes/grumpycat.png',
  './memes/nyancat_big.gif',
  './memes/success.png',
  './memes/all_the_things.jpg',
  './memes/datboi.gif',
  './memes/happy_obama.png',
  //'./memes/one_does_not_simply.png',
  './memes/surprised_obama.png',
  './memes/aw_yeah.gif',
  //'./memes/doge.png',
  './memes/harold.jpg',
  './memes/pikachu_dancing.gif',
  //'./memes/terminal.png',
  './memes/badger.gif',
  './memes/feels.png',
  './memes/hypnotoad.gif',
  './memes/rick.png',
  './memes/trogdor.png',
  './memes/billnye.gif',
  //'./memes/fridayfriday.png',
  './memes/james_comey.png',
  './memes/rickastely.png',
  './memes/trump_china.png',
  //'./memes/blazeit420.png',
  './memes/fsociety.png',
  './memes/morty.png',
  './memes/ron_swanson.png',
  //'./memes/xzibit.png',
  './memes/bmo.gif',
  './memes/gaben.png',
  './memes/nicmoji_smile.gif',
  //'./memes/sad_obama.png',
];

var backImage = './memes/terminal.png'

// Represents the image assigned to each card
// This will get shuffled.
// 
// Example - Before Shuffle:
// The 1st and 7th card will have the image at memes[0] (aliensguy.jpg)
var cardNumbers = [
  0,1,2,3,4,5,0,1,2,3,4,5
];




//  Total number of clicks
//  Is displayed at the end of each game
var clicks = 0;

// Number of matches found
var found = 0;




// --- Initial Setup ---
$(document).ready(function (memoryGame) {
  
  // Sets class 'back' on for all cards
  hideAll();

  // Shuffle card faces
  shuffle(cardNumbers);

  // Shuffle image array
  shuffle(memes);
    
});



// 




// Give back class to all children of .cardDiv
function hideAll() {
  $('.cardDiv').children().addClass('back');
  $('.cardDiv').children().addClass('notMatched');
}




// Change image of card to file
function imageSwap(card, file) {

  $(card).fadeOut(1000, function () {
    $(this).attr('src', file).fadeIn(1000);
  });
  
}




// Flip Card
var lastCardIndex = 42; // Intentionally invalid card number
var thisCardIndex = 43; // Intentionally invalid card number
$('.cardImg').click (function () {

  //alert("Last card index: " + lastCardIndex);
  thisCardIndex = ($(this).parent().index() );  

 
  
  // Prevent users from messing up the click count or flipped state
  // by clicking a flipped card.
  if ($(this).hasClass('back')) {
    clicks++;

    // Flip the card
    //$(this).attr('src', memes[cardNumbers[thisCardIndex]]);
  }
  

  // TO-DO: Compare the two cards
  if (clicks % 2 === 0) {
    // Chagne the image
    $(this).attr('src', memes[cardNumbers[thisCardIndex]]);  

    //alert("Second Click");

    $(this).removeClass('back');
    $(this).addClass('front');

    // If a match is found
    if (cardNumbers[lastCardIndex] === cardNumbers[thisCardIndex]) {
      alert("Match found!");

      // TO-DO:
      // Remove class cardImg
      // Set this card to found
      // Repeat for the last card
      $(this).removeClass('notMatched');
      $(this).addClass('matched');      

      $("#firstClick").removeClass('notMatched');
      $("#firstClick").addClass('matched');
      
      found++; // Win the game when found = 6
    }


    // TO-DO: End game if found = 6
    if (found === 6) {
      alert("You win!!!");
    }

    $('#firstClick').removeAttr('id');    

    lastCardIndex = 44; // Intentionally invalid card number
  }
  else {
    lastCardIndex = thisCardIndex;
    
    // Reset state of preivous cards if not found
    $('.notMatched').attr('src', backImage);
    // Reset state of preivous firtClick card
    $('#firstClick').removeAttr('id');

    // Set new firstClick card
    $(this).attr('id', 'firstClick');

    $(".notMatched").removeClass('front');
    $(".notMatched").addClass('back');

    $(this).removeClass('back');
    $(this).addClass('front');

    // Chagne the image
    $(this).attr('src', memes[cardNumbers[thisCardIndex]]);  
  }

  //alert( "Index:" + thisCardIndex );
  
})




// TO-DO: Play Again

// TO-DO: Restart

// TO-DO: Function - Shuffle
function shuffle (array) {
  var i = 0
    , j = 0
    , temp = null

  for (i = array.length - 1; i > 0; i -= 1) {
    j = Math.floor(Math.random() * (i + 1))
    temp = array[i]
    array[i] = array[j]
    array[j] = temp
  }
}

// TO-DO: Optional Feature - Game Timer

// TO-DO: Optional Feature - Turn Timer

// TO-DO: Optional Feature - Local Two Player