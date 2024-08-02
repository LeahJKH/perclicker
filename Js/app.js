import { ObjP } from "./module.js";
import { optionCreater } from "./options.js";
import { AudioSwitch } from "./options.js";

let user = {
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
<button id="clearCacheBtn">clear</button>
<button id="inDevBtn">options</button>
<button id="forPerBtn">credits</button>
<button id="bugRepoBtn">Bugs</button>`;

ObjP.imgCont.innerHTML = `<img src="./pictures/per.jpg" id="increment-btn" />`;

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
  <img src="./pictures/nick.jpg" id="nick" /> 
  <p>best friend nick +6 click POW</p>  
  <p>1000$</p>
</div>
`;

localStorage.setItem("cash", user.money);

function startgame() {
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
      return;
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

function resetNum() {
  localStorage.setItem("multiplier", 1);
}

function bugrepo() {
  ObjP.HeadTxt.textContent = "bug report";
  ObjP.transBg.style.display = "flex";
  const p = document.createElement("p");
  const Stxt = document.createTextNode("if you wanna report a bug u deffo have me on discord.");
  p.append(Stxt);
  ObjP.items.append(p);
}

function forPer() {
  ObjP.HeadTxt.textContent = "message for per";
  ObjP.transBg.style.display = "flex";
  const p = document.createElement("p");
  const Stxt = document.createTextNode("this project was made because of my love for Per and his amazing abilites.");
  p.append(Stxt);
  ObjP.items.append(p);
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