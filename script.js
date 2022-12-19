const toggleNavbar = () => {
  document.querySelector(".coverPage").classList.toggle("show");
};

document.querySelector(".toggleNav").addEventListener("click", function () {
  toggleNavbar();
});

const menuBtn = document.querySelectorAll(".menuBtn");
Array.from(nodeList);
const menuArr = Array.from(menubtn);
menuArr.forEach((element) => {
  element.addEventListener("click", function () {
    toggleNavbar();
  });
});
