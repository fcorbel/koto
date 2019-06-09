import { Component, h, Prop } from "@stencil/core";

@Component({
  tag: "koto-input",
  styleUrl: "input.scss",
  shadow: true
})
export class Input {
  @Prop() name!: string;
  @Prop() placeholder: string;

  render() {
    return <input name={this.name} placeholder={this.placeholder} />;
  }
}
