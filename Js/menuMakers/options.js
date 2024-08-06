import { ObjP } from "../module.js";
import { startgame, user } from "../app.js";

export let AudioSwitch = true;

export function optionCreater() {
    ObjP.HeadTxt.textContent = "Settings"
    ObjP.transBg.style.display = "flex";

    const optionsObj = {
        Audio: {
            Title: "Audio",
            OnOrOff: {
                input: {
                    val: "input",
                    type: "checkbox",
                    name: "audioOnOff"
                },
                txt: "Audio"
            }
        },
        Money: {
            Title: "Money",
            addMoney: {
                input: {
                    val: "button",
                    type: "button",
                    name: "addMoneyBtn"
                },
                txt: "add money"
            }
        }
    };

    for (const option in optionsObj) {
        const opt = optionsObj[option];
        console.log(opt)
        const h1 = document.createElement("h1");
        const Stxt = document.createTextNode(opt.Title);
        h1.append(Stxt);

        ObjP.items.append(h1);

        for (const subOption in opt) {
            if (subOption !== "Title") {
                const elementData = opt[subOption];
                let inputElement;

                if (elementData.input.val === "input") {
                    inputElement = document.createElement(elementData.input.val);
                    inputElement.type = elementData.input.type;
                    inputElement.name = elementData.input.name;

                    if (elementData.input.type === "checkbox" && elementData.input.name === "audioOnOff") {
                        inputElement.checked = AudioSwitch;
                    }

                    const label = document.createElement("label");
                    label.htmlFor = elementData.input.name;
                    const labelTxt = document.createTextNode(elementData.txt);
                    label.append(labelTxt);

                    ObjP.items.append(inputElement);
                    ObjP.items.append(label);

                    if (elementData.input.type === "checkbox" && elementData.input.name === "audioOnOff") {
                        inputElement.addEventListener("click", () => {
                            AudioSwitch = !AudioSwitch;
                        });
                    }
                } else if (elementData.input.val === "button") {
                    inputElement = document.createElement("button");
                    inputElement.type = elementData.input.type;
                    inputElement.name = elementData.input.name;
                    const btnTxt = document.createTextNode(elementData.txt);
                    inputElement.append(btnTxt);

                    ObjP.items.append(inputElement);

                    inputElement.addEventListener("click", () => {
                        user.money += 1000000
                        localStorage.setItem("cash", user.money);
                        startgame()
                        console.log("Add money button clicked");
                    })}}}}}