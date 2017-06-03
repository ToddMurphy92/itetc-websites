function addMyListItem() {
  // Get our page elements

  // Get the textbox that takes new item text
  var myItemTextBox = document.getElementById("myItemTextBox");

  // Get the un-ordered list
  var myList = document.getElementById("myList");

  // Create our new list item
  var item = document.createElement("li");

  item.innerText = myItemTextBox.value;

  myList.prepend(item);
}