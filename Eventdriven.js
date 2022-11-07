//creates funtion for button onclick 
function disablefirstbutton() {
  //disables start button and enables stop button
  document.getElementById("Start").disabled = true;
  document.getElementById("Stop").disabled = false;
}
//creates funtion for button onclick 
function disablesecondbutton() {
  //disables stop button and enables start button
  document.getElementById("Stop").disabled = true;
  document.getElementById("Start").disabled = false;
}
