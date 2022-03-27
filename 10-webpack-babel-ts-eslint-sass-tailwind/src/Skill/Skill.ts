import Info from "@Info/Info";

export default class Skill extends Info {
  skill!: string;

  constructor(skill: string) {
    super();

    this.skill = skill;
  }

  override mount() {
    const $el = this.getTargetElement();

    $el.innerHTML = `Skill: ${this.skill}`;
  }

  override getTargetElement(): HTMLElement {
    return document.querySelector(
      ".sectionWrapper-section-skill",
    ) as HTMLElement;
  }
}
