Exercise 6:
Using the web-page below, write JavaScript into the script.js file so that if a person clicks on the
‘Bigger’ button the font-size of the text in the newsbreak <div> gets bigger. If a person clicks on the
‘Smaller’ button the font-size of the text in the newsbreak <div> gets smaller. This time have just the
one function that gets passed a ‘parameter’ (i.e. the word ‘bigger’ or ‘smaller’) and this one
functions handles the operations of both buttons.

<!DOCTYPE HTML>
<html>
  <head>
    <title>Style updating</title>
    <script type="text/javascript" src="script.js"></script>
  </head>
  <body>
    <div id="newsbreak">The sky is falling</div>
    <input type="button" onclick="setNewsSize('bigger')" value="Bigger">
    <input type="button" onclick="setNewsSize('smaller')" value="Blue">
  </body>
</html>