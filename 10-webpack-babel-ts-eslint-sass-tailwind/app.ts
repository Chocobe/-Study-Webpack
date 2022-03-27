import Person from "@/Person";
import Address from "@Address/Address";
import Phone from "@Phone/Phone";
import Skill from "@Skill/Skill";

import "./style.scss";
import "./app.scss";

window.addEventListener("DOMContentLoaded", () => {
  const infoList = [
    new Person("Chocobe", 36, true),
    new Address("Kor", "Seoul"),
    new Phone("123-4567-6543"),
    new Skill("Webpack"),
  ];

  setTimeout(() => {
    infoList.forEach(info => info.mount());
  }, 2000);
});
