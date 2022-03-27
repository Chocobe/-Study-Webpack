import Info from "@Info/Info";

export default class Address extends Info {
  address!: string;
  detail!: string;

  constructor(address: string, detail: string) {
    super();

    this.address = address;
    this.detail = detail;
  }

  override mount() {
    const { address, detail } = this;
    const $el = this.getTargetElement();

    $el.innerHTML = `Address: ${address}, Detail: ${detail}`;
  }

  override getTargetElement(): HTMLElement {
    return document.querySelector(
      ".sectionWrapper-section-address",
    ) as HTMLElement;
  }
}
