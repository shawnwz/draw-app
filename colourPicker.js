function colourPicker() {
    
    var self = this;

    this.loadPicker = function(){
        picker = createColorPicker("red");
        picker.id('picker');
        picker.style('background', 'white');
        picker.style('height', '-webkit-fill-available');
        picker.style('width', '-webkit-fill-available');
        picker.input(setColor);
        var colorPicker = createDiv();
        colorPicker.child(picker);
        select(".colourPicker").child(picker);
        
        fill(picker.color());
        stroke(picker.color());
    }

    function setColor() {
        fill(picker.color());
        //stroke(picker.color());
        this.dispatchEvent(new CustomEvent("strokeColorChange", {
            bubbles: true,
            detail: picker.color(),
        }))
    }

    this.loadPicker();
    
}
