import { Component, h, Host } from "@stencil/core";
import { Todo } from "./types";

@Component({
  tag: "koto-todo",
  styleUrl: "todo.scss",
  shadow: true
})
export class PageTodo {
  todos: Todo[] = [
    { id: 0, done: false, label: "Acheter des oeufs" },
    { id: 1, done: true, label: "Acheter des pates" }
  ];

  render() {
    return (
      <Host>
        <koto-list class="todo-list-types">
          <koto-list-item>
            Toujours<koto-badge color="red">1</koto-badge>
          </koto-list-item>
          <koto-list-item>Aujourd'hui</koto-list-item>
          <koto-list-item>
            Ce mois-ci<koto-badge color="red">45</koto-badge>
          </koto-list-item>
        </koto-list>
        <div class="todo-list-content">
          <h1 class="title-1">Aujourd'hui</h1>
          <div class="todo-types">
            <section class="pending">
              <h2 class="title-2">To-do</h2>
              <koto-list class="toto-list">
                {this.todos
                  .filter(todo => !todo.done)
                  .map(todo => (
                    <koto-list-item>
                      <koto-todo-item todo={todo} />
                    </koto-list-item>
                  ))}
              </koto-list>
            </section>
            <section class="done">
              <h2 class="title-2">Done</h2>
              <koto-list class="toto-list">
                {this.todos
                  .filter(todo => todo.done)
                  .map(todo => (
                    <koto-list-item>
                      <koto-todo-item todo={todo} />
                    </koto-list-item>
                  ))}
              </koto-list>
            </section>
          </div>
        </div>
      </Host>
    );
  }
}
