//a tool for drawing rectangle to the screen. Allows the user to preview
//the rectangle to the current mouse position before drawing the line to the
//pixel array.
function RectAngleTool(){
  this.icon = "assets/rectangle.png";
  this.name = "Rectangle";

  var startMouseX = -1;
  var startMouseY = -1;
  var drawing = false;

  //draws the rectangle to the screen
  this.draw = function(){
    cursor(ARROW);
    //only draw when mouse is clicked
    if(mouseIsPressed){
      //if it's the start of drawing a new line
      if(startMouseX == -1){
        startMouseX = mouseX;
        startMouseY = mouseY;
        drawing = true;
        //save the current pixel Array
        loadPixels();
      }

      else{
        //update the screen with the saved pixels to hide any previous
        //line between mouse pressed and released
        updatePixels();
        //draw the rectangle
        rect(startMouseX, startMouseY, mouseX-startMouseX, mouseY-startMouseY);
      }

    }

    else if(drawing){
      //save the pixels with the most recent line and reset the
      //drawing bool and start locations
      loadPixels();
      drawing = false;
      startMouseX = -1;
      startMouseY = -1;
    }
  };

  this.mouseClicked = function () {}

}
