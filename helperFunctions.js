function HelperFunctions() {

	//Jquery click events. Notice that there is no this. at the
	//start we don't need to do that here because the event will
	//be added to the button and doesn't 'belong' to the object

	//event handler for the clear button event. Clears the screen
	select("#clearButton").mouseClicked(function() {
		var yes = window.confirm("Clear data?");
		if (yes) {
			//some code
			background(255, 255, 255);
			//call loadPixels to update the drawing state
			//this is needed for the mirror tool
			loadPixels();
		}
		else {
			//cancel, do nothing
		}
	});


	//event handler for the save image button. saves the canvsa to the
	//local file system.
	select("#saveImageButton").mouseClicked(function() {
		saveCanvas("myPicture", "jpg");
	});
}
