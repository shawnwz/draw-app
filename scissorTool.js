function ScissorTool() {
  this.icon = "assets/scissors.png";
  this.name = "Scissor";

  var previousMouseX = -1;
  var previousMouseY = -1;

  this.selectedArea = {x: 0, y:0, w: 100, h: 100};
  this.draw = function(){
    cursor(CROSS);
    noFill();
    stroke(0);

    if(mouseIsPressed) {
      if(this.selectMode==0) {
        //automatically set mode to 1
        this.selectMode +=1;
        this.selectButton.html("cut");
      } else if (this.selectMode==1 && mouseX>0 && mouseY>0) {
        if(previousMouseX == -1){
          previousMouseX = mouseX;
          previousMouseY = mouseY;
          loadPixels();
        } else {
          this.selectedArea.x = previousMouseX;
          this.selectedArea.y = previousMouseY;

          this.selectedArea.w = mouseX - this.selectedArea.x;
          this.selectedArea.h = mouseY - this.selectedArea.y;

          updatePixels();

          noStroke();
          fill(255,0,0,30);
          rect(this.selectedArea.x, this.selectedArea.y, this.selectedArea.w, this.selectedArea.h);
        }

      } else if (this.selectMode == 2 && mouseX>0 && mouseY>0) {
        image(this.selectedPixels, mouseX, mouseY);
      }
    }
    else {
      //if the user has released the mouse we want to set the previousMouse values
      //back to -1.
      previousMouseX = -1;
      previousMouseY = -1;
    }

  }

  this.populateOptions = function () {
    this.selectButton = createButton('select area');
    this.selectButton.parent("#scissorToolOptions");
    this.selectButton.id('select-button');
    this.selectMode = 0;
    this.selectButton.mouseClicked( () => {
      if(this.selectMode == 0){
        this.selectMode += 1;
        this.selectButton.html("cut");
        loadPixels();
      } else if (this.selectMode == 1) {
        this.selectMode += 1;
        this.selectButton.html("end paste");
        updatePixels();
        this.selectedPixels = get(this.selectedArea.x , this.selectedArea.y , this.selectedArea.w, this.selectedArea.h);
        //draw a rectangle over it
        fill(222);
        noStroke();
        rect(this.selectedArea.x, this.selectedArea.y, this.selectedArea.w, this.selectedArea.h);
      } else if(this.selectMode == 2) {
        this.selectMode = 0;
        loadPixels();
        this.selectedArea = {x: 0, y: 0, w: 100, h:100};
        this.selectButton.html("select area");
      }
    });
  }

  this.unselectTool = function () {
    select("#scissorToolOptions").html("");
  }

  this.mouseClicked = function () {}

}
