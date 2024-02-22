function TextTool() {
  this.icon = "assets/text.png";
  this.name = "Text";

  this.draw = function () {
    cursor(ARROW);
    updatePixels();
    textAlign(CENTER);
    textSize(this.textSizeSlider.value());
    text(this.inputBox.value(), this.textPostionX.value(), this.textPostionY.value());
  }

  this.unselectTool = function () {
    select("#textToolOptions").html("");
  }

  this.populateOptions = function () {
    this.textSizeAndPosition = createDiv();
    this.textSizeAndPosition.parent("#textToolOptions");
    this.textSizeAndPosition.id('textSizeAndPosition');
    this.textSizeAndPosition.style('display', 'flex');
    this.textSizeAndPosition.style('flex-direction', 'row');
    this.textSizeAndPosition.style('gap', '20px');


    this.textSizeText = createDiv('Text Size: ');
    this.textSizeText.parent("#textSizeAndPosition");
    this.textSizeSlider = createSlider(15, 60, 25);
    this.textSizeSlider.parent("#textSizeAndPosition");

    this.textPosition = createDiv('Text Postion');
    this.textPosition.parent('#textSizeAndPosition')
    this.textPostionX = createInput(100, 'number');
    this.textPostionX.parent("#textSizeAndPosition");
    this.textPostionX.style('width', '50px');
    this.textPostionY = createInput(100, 'number');
    this.textPostionY.parent("#textSizeAndPosition");
    this.textPostionY.style('width', '50px');

    this.textInputBox = createDiv('Input your Text: ');
    this.textInputBox.parent("#textToolOptions");
    this.inputBox = createInput("");
    this.inputBox.parent("#textToolOptions");
  }
}
