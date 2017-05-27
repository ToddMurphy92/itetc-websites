Exercise 5:
Using the web-page below, write JavaScript into the script.js file so that if a person clicks on the
‘Bigger’ button the font-size of the text in the newsbreak <div> gets bigger. If a person clicks on the
‘Smaller’ button the font-size of the text in the newsbreak <div> gets smaller. Write 2 separate
functions to handle the button clicks.

<!DOCTYPE HTML>
<html>
  <head>
    <title>Style updating</title>
    <script type="text/javascript" src="script.js"></script>
  </head>
  <body>
    <div id="newsbreak">The sky is falling</div>
    <input type="button" onclick="setNewsBigger()" value="Bigger">
    <input type="button" onclick="setNewsSmaller()" value="Smaller">
  </body>
</html>