
//  Total number of attempts at matching pictures
//  Is displayed at the end of each game
var attempts = 0;

// Array of images
/** Placeholder - Have not added images yet
var imgArray = [
  images/rick.jpg,
  images/doge.jpg,
  images/harambe.jpg,
  images/pepe.jpg,
  images/etc.jpg
];
*/

// Initial Setup
$(document).ready(function (memoryGame) {

  
  // Create Grid
  createGrid();
  // Add back of card image

  // Shuffle card faces
  
  // Add front faces in hidden state

  // Fade - Test
  var testImg = './images/slide2.jpg';
  fadeTest(".test", "./images/slide2.jpg");
  
});

// Create Grid
function createGrid() {
  // Desktop:            4 x 3
  // Phone - Landscape:  2 x 6
  // Phone - Portrait:   12 x 1
  var output="";
  for (i = 0; i < 12; i++) {
    output += ("<div class='col-xs-12 col-sm-6 col-md-4 card'>" + i + "</div>");
    document.getElementById("memoryGame").innerHTML=output;
  }
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