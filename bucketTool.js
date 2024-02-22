function BucketTool() {
  this.icon = "assets/paint-bucket.png";
  this.name = "Bucket";
  this.fillColor = color(0,0,0);
  document.addEventListener('fillColorChange', (event) => {
    console.log('bucket tool fillColorChange event :', event.detail);
    this.fillColor =event.detail;
  });

  this.draw = function (){
    cursor(ARROW);
  }
  // reference algorithm https://en.wikipedia.org/wiki/Flood_fill
  this.bucketFill = function(x,y){
    loadPixels();

    const spAddress = this.getPixelAddress(x,y);
    const startColor = this.getColor(spAddress);

    let toFill = [];
    toFill.push(spAddress);

    // checked array is used to store already checked point, so that it won't be checked again
    let checked = [];

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
              toFill.push(n);
            }
          })
        }
      }

    }

    updatePixels()
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

  // override mouseClicked function here.
  this.mouseClicked = function () {
    this.bucketFill(floor(mouseX), floor(mouseY));
  }
}
