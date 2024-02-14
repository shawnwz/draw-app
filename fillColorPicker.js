class FillColorPicker extends HTMLElement {

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();

  }

  render() {
    // Render the color picker element
    this.shadowRoot.innerHTML = `
      <style>
        /* Add any custom styling for your color picker */
      </style>
      <div id="fillColorPickerContainer"></div>
    `;
  }
}

customElements.define("fill-color-picker", FillColorPicker);
