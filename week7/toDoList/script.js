function addMyListItem() {
  // Get our page elements

  // Get the textbox that takes new item text
  var myItemTextBox = document.getElementById("myItemTextBox");

  // Get the un-ordered list
  var myList = document.getElementById("myList");

  // Create our new list item
  var item = document.createElement("li");

  // Assign text from textbox to list item element
  item.innerText = myItemTextBox.value;

  // Add strike through functionality
  item.onclick = function() {
    // If the item's text does not have line-through decoration
    if (this.style.textDecoration !== "line-through") {
      //Assign text decoration to line-through
      this.style.textDecoration = "line-through";
    } else {
      //Assign text decoration to none
      this.style.textDecoration = "none";
    }
  }

  // Create list item remove button 

  // Create new button element
  var myRemoveButton = document.createElement("button");

  // Create new button element
  myRemoveButton.innerText = "-";

  // Assign text to button

  // Define onclick event callback for remove button
  myRemoveButton.onclick = function() {
    myList.removeChild(item);
  }

  // Add our remove button to the list item
  item.appendChild(myRemoveButton);

  // Add our list item to the un-ordered list
  myList.prepend(item);

  // Clear textbox value by assigning an empty string
  myItemTextBox.value = "";

  // Put focus on our textbox so the user can enter new text without re-selecting the textbox
  myItemTextBox.focus();
}