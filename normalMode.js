let tile_array = [
  "tile-1",
  "tile-2",
  "tile-3",
  "tile-4",
  "tile-5",
  "tile-6",
  "tile-7",
  "tile-8",
  "tile-9",
  "tile-10",
  "tile-11",
  "tile-12",
  "tile-13",
  "tile-14",
  "tile-15",
  "tile-16",
];
let round = 0;
let started = false;
let system_pattern = [];
let user_pattern = [];

function show_tile() {
  round++;
  user_pattern = [];

  random_tile = tile_array[Math.floor(Math.random() * 16)];
  system_pattern.push(random_tile);
  console.log(system_pattern);

  system_pattern.forEach(function (random_tiled, i) {
    setTimeout(function () {
      document.querySelector("#" + random_tiled).classList.add("show");
      setTimeout(function () {
        document.querySelector("#" + random_tiled).classList.remove("show");
      }, 500);
    }, i * 500);
  });  
  document.querySelector(".scores").textContent = system_pattern.length;
}

function start_function() {
  document.querySelector("body").classList.remove("red");

  round = 0;
  started = true;
  system_pattern = [];
  user_pattern = [];

  show_tile();
}

function press_tile(e) {
  pressed_tile = e.target.getAttribute("id");
  console.log(pressed_tile);
  user_pattern.push(pressed_tile);
  console.log(user_pattern);
  if (system_pattern.includes(user_pattern[user_pattern.length - 1])) {
    if (system_pattern.length === user_pattern.length) {
      setTimeout(function () {
        show_tile();
      }, 700);
    }
  } else {
    game_over();
  }
}

function game_over() {
  document.querySelector("body").classList.add("red");
  system_pattern = [];
  user_pattern = [];
  round=0;
}

document
  .querySelector(".start-button")
  .addEventListener("click", start_function);
document.querySelector("#tile-1").addEventListener("click", press_tile);
document.querySelector("#tile-2").addEventListener("click", press_tile);
document.querySelector("#tile-3").addEventListener("click", press_tile);
document.querySelector("#tile-4").addEventListener("click", press_tile);
document.querySelector("#tile-5").addEventListener("click", press_tile);
document.querySelector("#tile-6").addEventListener("click", press_tile);
document.querySelector("#tile-7").addEventListener("click", press_tile);
document.querySelector("#tile-8").addEventListener("click", press_tile);
document.querySelector("#tile-9").addEventListener("click", press_tile);
document.querySelector("#tile-10").addEventListener("click", press_tile);
document.querySelector("#tile-11").addEventListener("click", press_tile);
document.querySelector("#tile-12").addEventListener("click", press_tile);
document.querySelector("#tile-13").addEventListener("click", press_tile);
document.querySelector("#tile-14").addEventListener("click", press_tile);
document.querySelector("#tile-15").addEventListener("click", press_tile);
document.querySelector("#tile-16").addEventListener("click", press_tile);
