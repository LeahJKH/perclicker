let buyOne = document.getElementById("buy1");
let buyTwo = document.getElementById("buy2");
let buyThree = document.getElementById("buy3");
let buyFour = document.getElementById("buy4");
let buyFive = document.getElementById("buy5");
let buySix = document.getElementById("buy6");
let moneyEl = document.getElementById("money-el");
const audio = new Audio("./audio/encourage.mp3");

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
  if (user.money >= num * 10) {
    user.upgraded += num;
    user.money = user.money - num * 10;
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
function resetNum() {
  localStorage.getItem("multiplier", user.upgraded);
}

function bugrepo() {
  alert("if you wanna report a bug u deffo have me on discord.");
}

function forPer() {
  alert(
    "this project was made because of my love for Per and his amazing abilites."
  );
}
function inDev() {
  alert("this isn't done");
}
