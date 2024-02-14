class StrokeColorPicker extends HTMLElement {

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
      <div id="strokeColorPickerContainer"></div>
    `;
  }
}

customElements.define("stroke-color-picker", StrokeColorPicker);
