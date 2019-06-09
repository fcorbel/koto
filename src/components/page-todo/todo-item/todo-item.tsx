import { Component, h, Prop } from "@stencil/core";
import { Todo } from "../types";

@Component({
  tag: "koto-todo-item",
  styleUrl: "todo-item.scss",
  shadow: true
})
export class TodoItem {
  @Prop() todo: Todo;

  render() {
    return (
      <koto-checkbox
        name={`${this.todo.id}`}
        checked={this.todo.done}
        labelRender={props => (
          <span
            style={{
              textDecoration: props.checked ? "line-through" : "none"
            }}
          >
            {this.todo.label}
          </span>
        )}
      />
    );
  }
}
