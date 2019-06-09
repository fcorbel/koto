import { Component, h, Host, Prop } from "@stencil/core";
import { BtnType, BtnColor } from "./types";

@Component({
  tag: "koto-button",
  styleUrl: "button.scss",
  shadow: true
})
export class KotoButton {
  @Prop() color: BtnColor = "primary";
  @Prop() type: BtnType = "solid";

  getClasses() {
    let classes = {};

    classes[`color-${this.color}`] = true;
    classes[`type-${this.type}`] = true;

    return classes;
  }

  render() {
    return (
      <Host class={this.getClasses()}>
        <button>
          <span class="content">
            <slot />
          </span>
        </button>
      </Host>
    );
  }
}
