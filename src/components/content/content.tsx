import { Component, h, Host } from "@stencil/core";

@Component({
  tag: "koto-content",
  styleUrl: "content.scss",
  shadow: true
})
export class Content {
  render() {
    return (
      <Host>
        <nav>icon</nav>
        <main>
          <stencil-route-switch scrollTopOffset={0}>
            <stencil-route url="/content" component="koto-todo" exact={true} />
            <stencil-route
              url="/content/todo"
              component="koto-todo"
              exact={true}
            />
          </stencil-route-switch>
        </main>
      </Host>
    );
  }
}
