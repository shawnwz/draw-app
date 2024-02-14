//container object for storing the tools. Functions to add new tools and select a tool
function Toolbox() {

	var self = this;

	this.tools = [];
	this.selectedTool = null;

	this.defaultColor = 0;

	var toolbarItemClick = function() {
		//remove any existing borders
		var items = selectAll(".toolBarItem");
		for (var i = 0; i < items.length; i++) {
			items[i].style('border', '0')
		}

		var toolName = this.id().split("toolBarItem")[0];
		self.selectTool(toolName);

		//call loadPixels to make sure most recent changes are saved to pixel array
		loadPixels();

	}

	//add a new tool icon to the html page
	var addToolIcon = function(icon, name) {
		var sideBarItem = createDiv("<img src='" + icon + "'></div>");
		sideBarItem.class('toolBarItem')
		sideBarItem.id(name + "toolBarItem")
		sideBarItem.parent('toolbox');
		sideBarItem.mouseClicked(toolbarItemClick);


	};

	//add a tool to the tools array
	this.addTool = function(tool) {
		//check that the object tool has an icon and a name
		if (!tool.hasOwnProperty("icon") || !tool.hasOwnProperty("name")) {
			alert("make sure your tool has both a name and an icon");
		}
		this.tools.push(tool);
		addToolIcon(tool.icon, tool.name);
		//if no tool is selected (ie. none have been added so far)
		//make this tool the selected one.
		if (this.selectedTool == null) {
			this.selectTool(tool.name);
		}
	};

	this.selectTool = function(toolName) {
		cursor(CROSS);
		stroke(this.defaultColor);
		const dropdownList = document.querySelector('dropdown-list');
		console.log(dropdownList);

// 读取当前选择值
		const selectedValue = dropdownList.selectedValue;

// 打印或使用选择值
		console.log('Selected value:', selectedValue);
		//search through the tools for one that's name matches
		//toolName
		for (var i = 0; i < this.tools.length; i++) {
			if (this.tools[i].name == toolName) {
				//if the tool has an unselectTool method run it.
				if (this.selectedTool != null && this.selectedTool.hasOwnProperty(
						"unselectTool")) {
					this.selectedTool.unselectTool();
				}
				//select the tool and highlight it on the toolbar
				this.selectedTool = this.tools[i];
				select("#" + toolName + "toolBarItem").style("border", "2px solid red");

				//if the tool has an options area. Populate it now.
				if (this.selectedTool.hasOwnProperty("populateOptions")) {
					this.selectedTool.populateOptions();
				}
			}
		}
	};


}
