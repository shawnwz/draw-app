// Dropdown.js

function createDropdown(options, containerId) {
  // 创建下拉列表容器
  const container = document.getElementById(containerId);

  // 创建<select>元素
  const selectElement = document.createElement("select");

  // 添加选项
  options.forEach((option) => {
    const optionElement = document.createElement("option");
    optionElement.value = option.value;
    optionElement.text = option.text;
    selectElement.appendChild(optionElement);
  });

  // 将下拉列表添加到容器中
  container.appendChild(selectElement);

  // 返回下拉列表的引用，以便在其他地方进行进一步操作
  return selectElement;
}

// 用法示例
const dropdownOptions = [
  { value: "option1", text: "Option 1" },
  { value: "option2", text: "Option 2" },
  { value: "option3", text: "Option 3" },
];

const myDropdown = createDropdown(dropdownOptions, "dropdown-container");
