let svgContainers = document.querySelectorAll(".svg-container");
svgContainers.forEach(function (container) {
  let coolicon = container.querySelector("#coolicon");
  let originalColor = coolicon.getAttribute("fill");
  let newColor = "#e24b33";
  let isToggled = false;

  coolicon.addEventListener("click", function () {
    if (isToggled) {
      this.style.fill = originalColor;
      isToggled = false;
    } else {
      this.style.fill = newColor;
      isToggled = true;
    }
  });
});

let like = document.getElementById("like");
let originalColor = like.getAttribute("fill");
let newColor = "#e24b33";
let isToggled = false;

like.addEventListener("click", function () {
  if (isToggled) {
    this.style.fill = originalColor;
    isToggled = false;
  } else {
    this.style.fill = newColor;
    isToggled = true;
  }
});

const arrow = document.getElementById("arrow-down");
const cityBox = document.querySelector(".city-box");
const cityList = document.querySelector(".city-list");
const cities = cityList.querySelectorAll("li");

arrow.addEventListener("click", function () {
  cityList.classList.toggle("show");
  arrow.classList.toggle("rotate");
});

for (let i = 0; i < cities.length; i++) {
  cities[i].addEventListener("click", function (event) {
    for (let j = 0; j < cities.length; j++) {
      cities[j].classList.remove("selected");
    }
    event.target.classList.add("selected");
    cityList.classList.remove("show");
    arrow.classList.remove("rotate");
    const selectedCity = event.target.textContent;
    document.querySelector(".city").textContent = selectedCity;
  });
}
