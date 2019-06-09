import { Component, h, Prop, Host } from "@stencil/core";

@Component({
  tag: "koto-palette",
  styleUrl: "palette.scss",
  shadow: true
})
export class Palette {
  @Prop() color: string;
  render() {
    return (
      <Host class={this.color}>
        <div class="lighter-2">A</div>
        <div class="lighter-1">A</div>
        <div class="base">A</div>
        <div class="darker-1">A</div>
        <div class="darker-2">A</div>
      </Host>
    );
  }
}
