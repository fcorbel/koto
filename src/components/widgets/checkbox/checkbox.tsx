import { Component, h, Prop, Host, Element, Listen } from "@stencil/core";

@Component({
  tag: "koto-checkbox",
  styleUrl: "checkbox.scss",
  shadow: true
})
export class Checkbox {
  @Prop() name!: string;
  @Prop({ mutable: true }) checked: boolean = false;
  @Prop() value: string = "on";
  @Prop() disabled: boolean = false;

  @Prop() labelRender;

  private buttonEl?: HTMLElement;

  @Element() el!: HTMLElement;

  @Listen("click")
  onClick() {
    this.setFocus();
    this.checked = !this.checked;
  }

  private setFocus() {
    if (this.buttonEl) {
      this.buttonEl.focus();
    }
  }

  getClasses() {
    let classes = {};

    classes["checked"] = this.checked;
    classes["disabled"] = this.disabled;

    return classes;
  }

  render() {
    const renderProps = { checked: this.checked };
    return (
      <Host
        class={this.getClasses()}
        role="checkbox"
        aria-checked={this.checked}
      >
        <input
          type="hidden"
          name={this.name}
          value={this.checked ? this.value : ""}
        />
        <button
          type="button"
          disabled={this.disabled}
          ref={el => (this.buttonEl = el)}
        />
        {this.labelRender && <label>{this.labelRender(renderProps)}</label>}
      </Host>
    );
  }
}
