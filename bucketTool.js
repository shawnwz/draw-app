function BucketTool() {
  this.icon = "assets/paint-bucket.png";
  this.name = "Bucket";
  this.fillColor = color(0,0,0);
  document.addEventListener('fillColorChange', (event) => {
    console.log('bucket tool fillColorChange event :', event.detail);
    this.fillColor =event.detail;
    //fill(this.fillColor);
  });

  this.draw = function (){
    cursor(ARROW);
    // if(mouseIsPressed && mouseX>0 && mouseY>0){
    //   console.log("pressed...");
    //   console.log('fill color', this.fillColor.levels);
    //   this.bucketFill(floor(mouseX), floor(mouseY));
    // }
  }
  // reference algorithm https://en.wikipedia.org/wiki/Flood_fill
  this.bucketFill = function(x,y){
    console.log("floodddd...");
    console.log("xy  is ", x, y);
    console.log("fill color is ", this.fillColor);

    loadPixels();


    const spAddress = this.getPixelAddress(x,y);
    const startColor = this.getColor(spAddress);



    let toFill = [];
    toFill.push(spAddress);

    let checked = [];
    //checked.push(spAddress);



    while (toFill.length) {
      let current = toFill.pop();
      let currentColor = this.getColor(current);
      const ns = this.getNeighbors(current);

      if (!checkHistory(current, checked)) {
        checked.push(current);
        if (red(currentColor) === red(startColor) && green(currentColor) === green(startColor) && blue(currentColor) === blue(startColor)) {
          this.setColor(current, this.fillColor.levels);
          ns.forEach(n => {
            if(!checkHistory(n, checked) && n>0 && n< pixels.length ){
              //console.log(toFill.length);
              toFill.push(n);
            }
          })
        }
      }

    }

    updatePixels()


  }

  this.expandToNeighbours = function(queue,current){
    x = current.x
    y = current.y

    if(x-1>0){
      queue.push(createVector(x-1,y))
    }

    if(x+1<width){
      queue.push(createVector(x+1,y))
    }

    if(y-1>0){
      queue.push(createVector(x,y-1))
    }

    if(y+1<height){
      queue.push(createVector(x,y+1))
    }

    return queue
  }
  function arrayEquals(a, b) {
    return (
        Array.isArray(a) &&
        Array.isArray(b) &&
        a.length === b.length &&
        a.every((val, index) => val === b[index])
    );
  }

  this.getPixelAddress = function (x,y) {
    return (y * width + x) * 4;
  }

  this.getColor = function (p) {
    return color(pixels[p], pixels[p+1], pixels[p+2]);
  }

  this.setColor = function (p, color) {
    pixels[p] = red(color);
    pixels[p+1] = green(color);
    pixels[p+2] = blue(color);
  }

  this.getNeighbors = function (p) {
    const ns = [];
    //west
    ns.push(p-4);
    //north
    ns.push(p-(width*4));
    //east
    ns.push(p+4);
    //south
    ns.push(p+(width*4));

    return ns;
  }

  function checkHistory(add, arr){
    for (var i = 0 ; i < arr.length; i++){
      if(add == arr[i]){
        return true;
      }
      else {
        return false;
      }
    }
  }

  this.mouseClicked = function () {
    this.bucketFill(floor(mouseX), floor(mouseY));
  }

}
