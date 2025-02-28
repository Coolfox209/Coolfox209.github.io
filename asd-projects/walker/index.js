/* global $, sessionStorage */

$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()
  
function runProgram(){
  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// SETUP /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  // Constant Variables
  var FRAME_RATE = 60;
  var FRAMES_PER_SECOND_INTERVAL = 1000 / FRAME_RATE;
  var KEY = {
    LEFT : 37,
    UP : 38,
    RIGHT : 39,
    DOWN : 40,
  }
   
  // Game Item Objects
  var walker = {
    X : 0,
    Y : 0,
    SpeedX : 0,
    SpeedY : 0,
  }

  // one-time setup
  var interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)
  $(document).on('keydown', handleKeyDown);                           // change 'eventType' to the type of event you want to handle
  $(document).on('keyup', handleKeyUp);                           // change 'eventType' to the type of event you want to handle

  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  /* 
  On each "tick" of the timer, a new frame is dynamically drawn using JavaScript
  by calling this function and executing the code inside.
  */
  function newFrame() {
    repositionGameItem()
    wallCollion()
    redrawGameItem()
  }
  
  /* 
  Called in response to events.
  */
  function handleKeyDown(event) {
    if (event.which === KEY.LEFT){
      walker.SpeedX = -5;
    }
    if (event.which === KEY.UP){
      walker.SpeedY = -5;
    }
    if (event.which === KEY.RIGHT){
      walker.SpeedX = 5;
    }
    if (event.which === KEY.DOWN){
      walker.SpeedY = 5;
    }
  }

  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  
  function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
  }

  function repositionGameItem(){
  walker.X += walker.SpeedX;
  walker.Y += walker.SpeedY;
  }
  
  function redrawGameItem(){
  $("#walker").css("left", walker.X);
  $("#walker").css("top", walker.Y);
  }

  function handleKeyUp(event){
    if (event.which === KEY.LEFT){
      walker.SpeedX = 0;
    }
    if (event.which === KEY.UP){
      walker.SpeedY = 0;
    }
    if (event.which === KEY.RIGHT){
      walker.SpeedX = 0;
    }
    if (event.which === KEY.DOWN){
      walker.SpeedY = 0;
    }
  }

  function wallCollion(){
  }
}
