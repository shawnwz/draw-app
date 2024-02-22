function EraserTool() {
  this.icon = "assets/eraser.png";
  this.name = "eraser";

  this.draw = function(){
    cursor(HAND);
    noStroke();
    bgColor = 255;

    cursor('assets/sprayCan.jpg')
    if(mouseIsPressed){
      this.drawEraser();
    }
    else{
      previousMouseX = -1;
      previousMouseY = -1;
    }
  }

  this.drawEraser = function(){
    strokeWeight(100);
    stroke(bgColor);
    line(mouseX, mouseY, pmouseX, pmouseY);
  }

  this.unselectTool = function () {
    strokeWeight(1);
    stroke('black');
  }

}
