//global variables that will store the toolbox colour palette
//amnd the helper functions
var toolbox = null;
var colourP = null;
var helpers = null;


function setup() {

	//create a canvas to fill the content div from index.html
	canvasContainer = select('#content');
	var c = createCanvas(canvasContainer.size().width, canvasContainer.size().height);
	c.parent("content");



	//create helper functions and the colour palette
	helpers = new HelperFunctions();
	colourPicker = new colourPicker();
	colourP = new ColourPalette();

	//create a toolbox for storing the tools
	toolbox = new Toolbox();

	//add the tools to the toolbox.
	toolbox.addTool(new FreehandTool());
	toolbox.addTool(new LineToTool());
	toolbox.addTool(new SprayCanTool());
	toolbox.addTool(new mirrorDrawTool());
	toolbox.addTool(new RectAngleTool());


	background(255);

}

function draw() {
	var sw = 10;
	const dropdownList = document.querySelector('dropdown-list');

	// 监听自定义事件
	dropdownList.addEventListener('selectionChange', (event) => {
		const selectedValue = event.detail.selectedValue;
		console.log('Selected value:', selectedValue);
		sw = selectedValue;
		toolbox.selectedTool.strokeWeight = sw;
		// 在这里你可以将 selectedValue 设置为你需要的变量
	});

	strokeWeight(1);

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
