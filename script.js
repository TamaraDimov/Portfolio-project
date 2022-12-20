const toggleNavbar = () => {
  document.querySelector(".coverPage").classList.toggle("show");
};

document.querySelector(".toggleNav").addEventListener("click", () => {
  toggleNavbar();
});

document.querySelector(".exit").addEventListener("click", () => {
  toggleNavbar();
});

const menuBtn = document.querySelectorAll(".menuBtn");
const menuArr = Array.from(menuBtn);
menuArr.forEach((element) => {
  element.addEventListener("click", () => {
    toggleNavbar();
  });
});

// let cardName = {'Tonic','Multi-post Stories','Tonic','Multi-post Stories'}
// let tonic = {
//   Image:
//   name: 'Tonic',

// }

const toggleWorkCard = () => {
  document.querySelectorAll(".more").classList.toggle("");
};

document.querySelectorAll(".more").addEventListener("click", () => {
  toggleNavbar();
});

document.querySelector(".icon").addEventListener("click", () => {
  toggleNavbar();
});
