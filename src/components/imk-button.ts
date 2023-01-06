import { customElement, property } from "lit/decorators.js";
import { TailwindElement } from "../shared/TailwindElement";
import { html } from "lit";

@customElement("imk-button")
export class ImkButton extends TailwindElement {
  @property()
  name = "";
  type: "감자" | "고구마" | "군고구마" = "감자";

  render() {
    return html`
      <button
        type="button"
        class="px-20 bg-blue-500 rounded-lg flex justify-center items-center p-10"
      >
        ${this.name} ${this.type}
        <slot></slot>
      </button>
    `;
  }
}
