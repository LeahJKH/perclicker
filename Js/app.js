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

ObjP.headerItems.innerHTML = `
<button id="clearCacheBtn" class="btn-Style">clear</button>
<button id="inDevBtn" class="btn-Style">options</button>
<button id="forPerBtn" class="btn-Style">credits</button>
<button id="bugRepoBtn" class="btn-Style">Bugs</button>`;

ObjP.imgCont.innerHTML = `<img src="./pictures/per.webp" id="increment-btn" alt="beautifull picture of per smiling wearing a cap" />`;

ObjP.buyMenu.innerHTML = `
<div class="upgrade" id="buy1">
  <p>HTML +1 click POW</p> 
  <p>10$</p>
</div>
<div class="upgrade" id="buy2">
  <p>CSS +2 click POW</p>  
  <p>25$</p>
</div>
<div class="upgrade" id="buy3">
  <p>javascript +3 click POW</p>  
  <p>50$</p>
</div>
<div class="upgrade" id="buy4">
  <p>Encouragement +4 click POW</p>  
  <p>75$</p>
</div>
<div class="upgrade" id="buy5">
  <p>"i hope it went well" +5 click POW</p> 
  <p>100$</p>
</div>
<div class="upgrade" id="buy6">
  <img src="./pictures/nick.webp" id="nick" alt="picture of a guy named nick short hair smiling" /> 
  <p>best friend nick +6 click POW</p>  
  <p>1000$</p>
</div>
`;

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
  const cost = num * 10;
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