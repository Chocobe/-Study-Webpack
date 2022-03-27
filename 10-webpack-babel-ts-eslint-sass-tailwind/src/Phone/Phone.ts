import Info from "@Info/Info";

export default class Phone extends Info {
  phone!: string;

  constructor(phone: string) {
    super();

    this.phone = phone;
  }

  override mount() {
    const { phone } = this;
    const $el = this.getTargetElement();

    $el.innerHTML = `Phone: ${phone}`;
  }

  override getTargetElement(): HTMLElement {
    return document.querySelector(
      ".sectionWrapper-section-phone",
    ) as HTMLElement;
  }
}
