import { ObjP } from "../module.js";
export function credits() {
    ObjP.HeadTxt.textContent = "message for per";
    ObjP.transBg.style.display = "flex";
    const p = document.createElement("p");
    const Stxt = document.createTextNode("this project was made because of my love for Per and his amazing abilites.");
    p.append(Stxt);
    ObjP.items.append(p);
  }