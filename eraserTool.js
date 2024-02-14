function EraserTool() {
  this.icon = "assets/eraser.png";
  this.name = "eraser";
  this.strokeWeight = 1;

  this.draw = function(){
    noStroke();
    bgColor = 255;
    //cursor("assets/erasers/64-eraser.png", 32, 32);
    //cursor(CROSS)
    //c
    //noCursor();

    //cursor(CROSS);
      //cursor('https://avatars0.githubusercontent.com/u/1617169?s=16');
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


}
