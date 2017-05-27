function setNewsBigger()
{
  var element = document.getElementById("newsbreak");
  var currentSize = window.getComputedStyle(element, null).getPropertyValue("font-size");
  var newSize = (parseFloat(currentSize) + 1);

  element.style.fontSize = newSize + "px";
}

function setNewsSmaller()
{
  var element = document.getElementById("newsbreak");
  var currentSize = window.getComputedStyle(element, null).getPropertyValue("font-size");
  var newSize = (parseFloat(currentSize) + -1);

  element.style.fontSize = newSize + "px";
}