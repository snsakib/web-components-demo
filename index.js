const template = document.createElement("template");
template.innerHTML = `
<style>
button {
  padding: 10px;
  border: 1px solid grey;
  border-radius: 3px;
  color: white;
}

.success {
  background-color: green;
}

.danger {
  background-color: red;
}
</style>
<button><slot>Default</slot></button>
`;

class MyButton extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });

    this.shadowRoot.append(template.content.cloneNode(true));
  }

  connectedCallback() {
    if (this.hasAttribute("type")) {
      let buttonType = this.getAttribute("type");

      if (buttonType === "success") {
        let myButton = this.shadowRoot.querySelector("button");
        myButton.classList.add("success");
      } else if (buttonType === "danger") {
        let myButton = this.shadowRoot.querySelector("button");
        myButton.classList.add("danger");
      }
    }
  }
}

customElements.define("my-button", MyButton);
