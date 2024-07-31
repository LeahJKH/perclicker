let moneyEl = document.getElementById("money-el");
const audio = new Audio("./audio/encourage.mp3");
const transBg = document.querySelector("#trans-bg")
const overMenu = document.querySelector("#over-Menu")
const closeMenu = document.querySelector("#close")
const items = document.querySelector("#items")
const HeadTxt = document.querySelector("#headTxt")

let user = {
  name: "",
  money: 0,
  upgraded: 1,
  password: "",
};
if (!Number(localStorage.getItem("multiplier"))) {
  localStorage.setItem("multiplier", user.upgraded);
  localStorage.setItem("cash", user.money);
}else {
  startgame();
}

localStorage.setItem("cash", user.money);

function startgame() {
  user.upgraded = Number(localStorage.getItem("multiplier"));
  user.money = Number(localStorage.getItem("cash"));
  moneyEl.textContent = user.money;
}

function increment() {
  user.money += user.upgraded;
  moneyEl.textContent = user.money;
  localStorage.setItem("cash", user.money);

  startgame();
}

function buyUp(num) {
  if (num = 4) {
    audio.play()
  }
  if (user.money >= num * 10) {
    user.upgraded += user.upgraded + num;
    user.money = user.money - (num * 10);
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
  resetNum();
}

closeMenu.addEventListener("click", () => {
  transBg.style.display = "none"
  items.innerHTML = ``
})
function resetNum() {
  localStorage.getItem("multiplier", user.upgraded);
}

function bugrepo() {
  HeadTxt.textContent = "bug report"
  transBg.style.display = "flex";
  const p = document.createElement("p")
  const Stxt = document.createTextNode("if you wanna report a bug u deffo have me on discord.")
  p.append(Stxt)
  items.append(p)
}

function forPer() {
  HeadTxt.textContent = "message for per"
  transBg.style.display = "flex";
  const p = document.createElement("p")
  const Stxt = document.createTextNode("this project was made because of my love for Per and his amazing abilites.")
  p.append(Stxt)
  items.append(p)
}
function inDev() {
  HeadTxt.textContent = "Settings"
  transBg.style.display = "flex";
  const h1 = document.createElement("h1")
  const Stxt = document.createTextNode("Settings")
  h1.append(Stxt)
  items.append(h1)
}
