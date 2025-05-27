import { ObjP } from "./module.js";
import { optionCreater, AudioSwitch  } from "./menuMakers/options.js";
import { bugReport } from "./menuMakers/bugReport.js";
import { credits } from "./menuMakers/credits.js";

export let user = {
  name: "",
  money: 0,
  upgraded: 1,
  password: "",
};

if (!Number(localStorage.getItem("multiplier"))) {
  localStorage.setItem("multiplier", user.upgraded);
  localStorage.setItem("cash", user.money);
} else {
  startgame();
}

const buttonsMenu = [
  {
    id: "clearCacheBtn",
    txt:"clear"
  },
   {
    id: "inDevBtn",
    txt:"options"
  },
   {
    id: "forPerBtn",
    txt:"credits"
  },
   {
    id: "bugRepoBtn",
    txt:"Bugs"
  }
]

buttonsMenu.forEach(e => {
  const btn = document.createElement("button");
  const text = document.createTextNode(e.txt)
  btn.classList = "btn-Style"
  btn.id = e.id
  btn.append(text)
  ObjP.headerItems.appendChild(btn)
});




ObjP.imgCont.innerHTML = `<img src="./pictures/per.webp" id="increment-btn" alt="beautifull picture of per smiling wearing a cap" />`;

const itemarr = ["HTML", "CSS", "JavaScript", "Encouragement", "i hope it went well", "best friend nick"]
for(let i = 0; i < 6; i++) {
  const div = document.createElement("div")
  div.classList = "upgrade"
  div.id = `buy${i + 1}`
  const p1 = document.createElement("p");
  const p1txt = document.createTextNode(`${itemarr[i]} +${i} click POW`)
  p1.append(p1txt)
  const p2 = document.createElement("p")
  const p2txt = document.createTextNode(`${(i + 1) * 10}$`) 
  p2.append(p2txt)
  div.appendChild(p1)
  div.appendChild(p2)
  ObjP.buyMenu.appendChild(div)
}


localStorage.setItem("cash", user.money);

export function startgame() {
  user.upgraded = Number(localStorage.getItem("multiplier"));
  user.money = Number(localStorage.getItem("cash"));
  ObjP.moneyEl.textContent = user.money;
}

function increment() {
  user.money += user.upgraded;
  ObjP.moneyEl.textContent = user.money;
  localStorage.setItem("cash", user.money);

  startgame();
}

function buyUp(num) {
  if (num === 4) {
    if (AudioSwitch === true) {
      ObjP.audio.play();
    } else {
      
        }
  }
  const cost = num  * 10;
  if (user.money >= cost) {
    user.upgraded += num;
    user.money -= cost;
    localStorage.setItem("multiplier", user.upgraded);
    localStorage.setItem("cash", user.money);
    startgame();
  } else {
    alert("you are poor");
  }
}

function clearCache() {
  localStorage.setItem("multiplier", 1);
  localStorage.setItem("cash", 0);
  location.reload();
}


function forPer() {
  credits()
}

function bugrepo() {
  bugReport()
}


function inDev() {
  optionCreater();
}

// Add event listeners to the buttons
document.getElementById("clearCacheBtn").addEventListener("click", clearCache);
document.getElementById("inDevBtn").addEventListener("click", inDev);
document.getElementById("forPerBtn").addEventListener("click", forPer);
document.getElementById("bugRepoBtn").addEventListener("click", bugrepo);
document.getElementById("increment-btn").addEventListener("click", increment);

// Add event listeners for the upgrade items
document.getElementById("buy1").addEventListener("click", () => buyUp(1));
document.getElementById("buy2").addEventListener("click", () => buyUp(2));
document.getElementById("buy3").addEventListener("click", () => buyUp(3));
document.getElementById("buy4").addEventListener("click", () => buyUp(4));
document.getElementById("buy5").addEventListener("click", () => buyUp(5));
document.getElementById("buy6").addEventListener("click", () => buyUp(6));

ObjP.closeMenu.addEventListener("click", () => {
  ObjP.transBg.style.display = "none";
  ObjP.items.innerHTML = ``;
});