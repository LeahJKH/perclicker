import { ObjP } from "./module.js";

export let AudioSwitch = true;

export function optionCreater() {
    ObjP.HeadTxt.textContent = "Settings"
    ObjP.transBg.style.display = "flex";  
    const h1 = document.createElement("h1")
    const Stxt = document.createTextNode("Settings")
    const audioCheck = document.createElement("input")
    audioCheck.type = "checkbox"
    audioCheck.name = "audioOnOff"
    if (AudioSwitch === true) {
      audioCheck.checked = "true"
    } else {
     
    }
    const audioLabel = document.createElement("label")
    audioLabel.for = "audioOnOff"
    const ALTxt = document.createTextNode("Audio")
    audioLabel.append(ALTxt)
    h1.append(Stxt)

    const moneyBtn = document.createElement("button")
    const mBtnTxt = document.createTextNode("add money")
    moneyBtn.append(mBtnTxt)

    ObjP.items.append(h1)

    ObjP.items.append(audioCheck)
    ObjP.items.append(audioLabel)

    audioCheck.addEventListener("click", () => {
      AudioSwitch = !AudioSwitch
})}