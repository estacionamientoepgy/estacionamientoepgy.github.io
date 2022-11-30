class MiFooter
  extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `<p>
        &copy; 2022
        Espinosa Perez Gerardo Yahir
      </p>`;
  }
}

customElements.define(
  "mi-footer", MiFooter);
