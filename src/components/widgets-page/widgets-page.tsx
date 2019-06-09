import { Component, h, Host } from "@stencil/core";

@Component({
  tag: "koto-widgets-page",
  styleUrl: "widgets-page.scss",
  shadow: true
})
export class WidgetsPage {
  render() {
    return (
      <Host>
        <section class="colors">
          <h2 class="title-2">Couleurs</h2>
          <koto-palette color="dark" />
          <koto-palette color="red" />
          <koto-palette color="green" />
          <koto-palette color="orange" />
          <koto-palette color="yellow" />
        </section>
        <section class="forms">
          <h2 class="title-2">Forms</h2>
          <h3>Input</h3>
          <koto-input name="test input" placeholder="mon placeholder" />
          <h3>Checkbox</h3>
          <div>
            <koto-checkbox
              name="check1"
              checked={true}
              labelRender={props => (
                <span
                  style={{
                    textDecoration: props.checked ? "line-through" : "none"
                  }}
                >
                  Texte de label
                </span>
              )}
            />
          </div>
          <div>
            <koto-checkbox
              name="check2"
              checked={true}
              labelRender={() => <span>Autre texte de label</span>}
            />
          </div>
        </section>
        <section class="badges">
          <h2 class="title-2">Badges</h2>
          <div>
            <koto-badge>default</koto-badge>
            <koto-badge color="secondary">secondary</koto-badge>
          </div>
          <div>
            <koto-badge color="red">1</koto-badge>
            <koto-badge color="green">2</koto-badge>
            <koto-badge color="orange">37</koto-badge>
            <koto-badge color="yellow">100</koto-badge>
          </div>
        </section>
        <section class="buttons">
          <h2 class="title-2">Boutons</h2>
          <div>
            <koto-button color="red">Mon bouton</koto-button>
            <koto-button color="green">Mon bouton</koto-button>
            <koto-button color="orange">Mon bouton</koto-button>
            <koto-button color="yellow">Mon bouton</koto-button>
          </div>
          <div>
            <koto-button color="red" type="outline">
              Mon bouton
            </koto-button>
            <koto-button color="green" type="outline">
              Mon bouton
            </koto-button>
            <koto-button color="orange" type="outline">
              Mon bouton
            </koto-button>
            <koto-button color="yellow" type="outline">
              Mon bouton
            </koto-button>
          </div>
          <div>
            <koto-button color="red" type="flat">
              Mon bouton
            </koto-button>
            <koto-button color="green" type="flat">
              Mon bouton
            </koto-button>
            <koto-button color="orange" type="flat">
              Mon bouton
            </koto-button>
            <koto-button color="yellow" type="flat">
              Mon bouton
            </koto-button>
          </div>
        </section>
        <section class="typography">
          <h2 class="title-2">Typography</h2>
          <p class="paragraph-small">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus ex
            saepe officia sit? Obcaecati nisi officiis, ex, perferendis
            molestias expedita quod necessitatibus aperiam, provident quos iste
            adipisci mollitia. Aliquid, rerum?
          </p>
          <p class="paragraph">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore
            perspiciatis voluptatem animi, impedit doloribus cupiditate beatae,
            ratione, dolore ipsam dolor dicta commodi recusandae repudiandae
            amet assumenda quia iure velit odio.
          </p>
          <p class="title-6">Titre de niveau 6</p>
          <p class="title-5">Titre de niveau 5</p>
          <p class="title-4">Titre de niveau 4</p>
          <p class="title-3">Titre de niveau 3</p>
          <p class="title-2">Titre de niveau 2</p>
          <p class="title-1">Titre de niveau 1</p>
        </section>
      </Host>
    );
  }
}
