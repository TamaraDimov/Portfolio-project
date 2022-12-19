const toggleNavbar = () => {
  document.querySelector(".coverPage").classList.toggle("show");
};

document.querySelector(".toggleNav").addEventListener("click", function () {
  toggleNavbar();
});

document.querySelector(".exit").addEventListener("click", function () {
    toggleNavbar();
});

const menuBtn = document.querySelectorAll(".menuBtn");
const menuArr = Array.from(menuBtn);
menuArr.forEach((element) => {
  element.addEventListener("click", function () {
    toggleNavbar();
  });
});
