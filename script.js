const slide = document.querySelectorAll(".slide");
const dot = document.querySelectorAll(".dot");

const toggle = document.querySelector(".toggle");
const navigation = document.querySelector(".navigation");
toggle.onclick = function () {
  toggle.classList.toggle("active");
  navigation.classList.toggle("active");
};

const setActive = (i) => {
  for (slides of slide) {
    slides.classList.remove("active");
    slide[i].classList.add("active");
  }
  for (dots of dot) {
    dots.classList.remove("active");
    dot[i].classList.add("active");
  }
};

for (let index = 0; index < dot.length; index++) {
  dot[index].addEventListener("click", function () {
    setActive(index);
  });
}
