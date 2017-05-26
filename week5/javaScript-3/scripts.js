function setHeadingColor() {
  var myHeading = document.getElementById("heading");
  var myColorBox = document.getElementById("myColors");

  /* var myOptions = myColorBox.options;

  var mySelectedColor = myColorBox.selectedIndex;

  var mySelectedOption = myOptions[mySelectedColor].value;  

  myHeading.style.color = mySelectedOption; */

  myHeading.style.color=myColorBox.options[myColorBox.selectedIndex].value;
}