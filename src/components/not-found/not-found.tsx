import { Component, h } from "@stencil/core";

@Component({
  tag: "koto-not-found",
  styleUrl: "not-found.scss",
  shadow: true
})
export class NotFound {
  render() {
    return <h1>404</h1>;
  }
}
