import { Component, h } from "@stencil/core";

@Component({
  tag: "koto-root"
})
export class Root {
  render() {
    return (
      <stencil-router>
        <stencil-route-switch scrollTopOffset={0}>
          {/* <stencil-route url="/" component="koto-content" exact={true} /> */}
          <stencil-route url="/content" component="koto-content" />
          {/* <stencil-route url="/content/todo" component="koto-todo" /> */}
          <stencil-route url="/login" component="koto-login" />
          <stencil-route url="/widgets" component="koto-widgets-page" />
          <stencil-route component="koto-not-found" />
        </stencil-route-switch>
      </stencil-router>
    );
  }
}
