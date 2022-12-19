const toggleNavbar = () => {
  document.querySelector('.coverPage').classList.toggle('show');
};

document.querySelector('.toggleNav').addEventListener('click', () => {
  toggleNavbar();
});

document.querySelector('.exit').addEventListener('click', () => {
  toggleNavbar();
});

const menuBtn = document.querySelectorAll('.menuBtn');
const menuArr = Array.from(menuBtn);
menuArr.forEach((element) => {
  element.addEventListener('click', () => {
    toggleNavbar();
  });
});
