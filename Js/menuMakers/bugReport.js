import { ObjP } from "../module.js";
export function bugReport() {
    ObjP.HeadTxt.textContent = "bug report";
    ObjP.transBg.style.display = "flex";
    const p = document.createElement("p");
    const Stxt = document.createTextNode("if you wanna report a bug u deffo have me on discord.");
    p.append(Stxt);
    ObjP.items.append(p);
  }