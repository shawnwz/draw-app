function SprayCanTool(){
	
	this.name = "sprayCanTool";
	this.icon = "assets/sprayCan.jpg";
	this.strokeWeight = 1;

	var points = 13;
	var spread = 10;

	const dropdownList = document.querySelector('dropdown-list');

	// listen the self defined event
	dropdownList.addEventListener('selectionChange', (event) => {
		const selectedValue = event.detail.selectedValue;
		console.log('SprayCan Selected value:', selectedValue);
		this.strokeWeight = selectedValue;
		strokeWeight(this.strokeWeight);
	});

	this.draw = function(){
		var r = random(5,10);
		if(mouseIsPressed){
			strokeWeight(this.strokeWeight);
			for(var i = 0; i < points; i++){
				point(random(mouseX-spread, mouseX + spread), random(mouseY-spread, mouseY+spread));
			}
		}
	};
}
