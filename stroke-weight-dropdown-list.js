// stroke-weight-dropdown-list.js

class StrokeWeightDropdownList extends HTMLElement {
  constructor() {
    super();

    // get the template
    const template = document.getElementById("dropdown-list-template").content;

    // create an instance in Shadow
    this.attachShadow({ mode: "open" }).appendChild(template.cloneNode(true));

    // get the dropdown list options
    this.dropdownElement = this.shadowRoot.getElementById("dropdown");
  }

  connectedCallback() {
    // obtain options from json
    const options = JSON.parse(this.getAttribute("options")) || [];

    // add options to the list
    options.forEach((option) => {
      const optionElement = document.createElement("option");
      optionElement.value = option.value;
      optionElement.text = option.text;
      this.dropdownElement.appendChild(optionElement);
    });

    this.dropdownElement.addEventListener("change", (event) => {
      const selectedValue = event.target.value;
      this.dispatchEvent(new CustomEvent("strokeWeightChange", {
        bubbles: true,
        detail: { selectedValue }
      }))
    });
  }
}

// declare the self defined element
customElements.define("dropdown-list", StrokeWeightDropdownList);
