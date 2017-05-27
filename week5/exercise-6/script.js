function setNewsSize(x)
{
  // lazy solution to avoid having to change exercise 5 much to get this to work
  if (x === 'bigger')
  {
    var element = document.getElementById("newsbreak");
    var currentSize = window.getComputedStyle(element, null).getPropertyValue("font-size");
    var newSize = (parseFloat(currentSize) + 1);

    element.style.fontSize = newSize + "px";
  }
  else if (x === 'smaller')
  {
    var element = document.getElementById("newsbreak");
    var currentSize = window.getComputedStyle(element, null).getPropertyValue("font-size");
    var newSize = (parseFloat(currentSize) + -1);

    element.style.fontSize = newSize + "px";
  }
  else if (x === 'disappear')
  {
    var element = document.getElementById("newsbreak");
        
    element.style.fontSize = "0px";
  }
  else if (x === 'appear')
  {
    var element = document.getElementById("newsbreak");
    
    element.style.fontSize = "20px";
  }
  else if (x === 'reverseVisability')
  {
    var element = document.getElementById("newsbreak");
    var currentSize = window.getComputedStyle(element, null).getPropertyValue("font-size");
    var newSize = (parseFloat(currentSize) + -1);

    if ((parseFloat(currentSize) === 0))
    {
      var newSize = 20;
    }
    else
    {
      var newSize = 0;
    }

    element.style.fontSize = newSize + "px";
  }
}