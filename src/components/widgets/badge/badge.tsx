import { Component, h, Prop, Host } from "@stencil/core";
import { BadgeColor } from "./types";

@Component({
  tag: "koto-badge",
  styleUrl: "badge.scss",
  shadow: true
})
export class Badge {
  @Prop() color: BadgeColor = "primary";

  getClasses() {
    let classes = {};

    classes[`color-${this.color}`] = true;

    return classes;
  }

  render() {
    return (
      <Host class={this.getClasses()}>
        <slot />
      </Host>
    );
  }
}
