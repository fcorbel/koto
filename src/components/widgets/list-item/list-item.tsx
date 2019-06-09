import { Component, h, Host } from "@stencil/core";

@Component({
  tag: "koto-list-item",
  styleUrl: "list-item.scss",
  shadow: true
})
export class ListItem {
  render() {
    return (
      <Host role="listitem">
        <slot />
      </Host>
    );
  }
}
