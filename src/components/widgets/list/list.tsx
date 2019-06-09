import { Component, h, Host } from "@stencil/core";

@Component({
  tag: "koto-list",
  styleUrl: "list.scss",
  shadow: true
})
export class List {
  render() {
    return (
      <Host role="list">
        <slot />
      </Host>
    );
  }
}
