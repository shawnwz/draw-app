// stroke-weight-dropdown-list.js

class StrokeWeightDropdownList extends HTMLElement {
  constructor() {
    super();

    // 获取模板内容
    const template = document.getElementById("dropdown-list-template").content;

    // 在 Shadow DOM 中创建一个实例
    this.attachShadow({ mode: "open" }).appendChild(template.cloneNode(true));

    // 获取下拉列表元素
    this.dropdownElement = this.shadowRoot.getElementById("dropdown");
  }

  connectedCallback() {
    // 获取传递给自定义元素的选项属性
    const options = JSON.parse(this.getAttribute("options")) || [];

    // 添加选项到下拉列表
    options.forEach((option) => {
      const optionElement = document.createElement("option");
      optionElement.value = option.value;
      optionElement.text = option.text;
      this.dropdownElement.appendChild(optionElement);
    });

    this.dropdownElement.addEventListener("change", (event) => {
      const selectedValue = event.target.value;
      this.dispatchEvent(new CustomEvent("selectionChange", {
        bubbles: true,
        detail: { selectedValue }
      }))
    });
  }
}

// 定义自定义元素
customElements.define("dropdown-list", StrokeWeightDropdownList);
