//global variables that will store the toolbox colour palette
//amnd the helper functions
var toolbox = null;
var colourP = null;
var helpers = null;

function setup() {
	pixelDensity(1);
	strokeColor = color(0, 0, 0);
	fillColor = color(255, 255, 255)
	weight = 1;

	//create a canvas to fill the content div from index.html
	canvasContainer = select('#content');
	var c = createCanvas(canvasContainer.size().width, canvasContainer.size().height);
	c.parent("content");

	strokeColorPickerContainer = select('#strokeColorPicker');
	const strokeColorPicker = createColorPicker("black");
	strokeColorPicker.parent("strokeColorPicker")
	strokeColorPicker.changed(updateStrokeColor);


	fillColorPickerContainer = select('#fillColorPicker');
	const fillColorPicker = createColorPicker("white");
	fillColorPicker.parent("fillColorPicker")
	fillColorPicker.changed(updateFillColor);


	//create helper functions and the colour palette
	helpers = new HelperFunctions();
	//colourPicker = new colourPicker();
	//colourP = new ColourPalette();

	//create a toolbox for storing the tools
	toolbox = new Toolbox();

	//add the tools to the toolbox.
	toolbox.addTool(new FreehandTool());
	toolbox.addTool(new LineToTool());
	toolbox.addTool(new SprayCanTool());
	toolbox.addTool(new mirrorDrawTool());
	toolbox.addTool(new RectAngleTool());
	toolbox.addTool(new EllipseTool());
	toolbox.addTool(new EraserTool());
	toolbox.addTool(new TextTool());
	toolbox.addTool(new ScissorTool());
	toolbox.addTool(new BucketTool());


	background(255);

	fill(this.fillColor);
	stroke(this.strokeColor);
	strokeWeight(weight);

	document.addEventListener('strokeColorChange', (event) => {
		console.log('received strokeColorChange event :', event.detail);
		this.strokeColor =event.detail;
		stroke(this.strokeColor);
	});

	document.addEventListener('fillColorChange', (event) => {
		console.log('received fillColorChange event :', event.detail);
		this.fillColor =event.detail;
		fill(this.fillColor);
	});

	dropdownList.addEventListener('strokeWeightChange', (event) => {
		console.log('received strokeWeightChange event :', event.detail.selectedValue);
		this.weight= event.detail.selectedValue;
		strokeWeight(Number(this.weight));
	});





}

function draw() {
	document.getElementById("coordinate").innerHTML =  "Pointer: " + floor(mouseX) + " " + floor(mouseY);
	//call the draw function from the selected tool.
	//hasOwnProperty is a javascript function that tests
	//if an object contains a particular method or property
	//if there isn't a draw method the app will alert the user
	if (toolbox.selectedTool.hasOwnProperty("draw")) {
		toolbox.selectedTool.draw();
	} else {
		alert("it doesn't look like your tool has a draw method!");
	}
}

function updateStrokeColor() {
	// Callback function for the stroke color change
	let selectedColor = this.color();
	console.log(selectedColor);
	let colorChangeEvent = new CustomEvent('strokeColorChange', { detail: selectedColor });
	document.dispatchEvent(colorChangeEvent);
}

function updateFillColor() {
	// Callback function for the fill color change
	let selectedColor = this.color();
	console.log(selectedColor);
	let colorChangeEvent = new CustomEvent('fillColorChange', { detail: selectedColor });
	document.dispatchEvent(colorChangeEvent);
}
