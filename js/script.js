//toggle class active
const navbarNav = document.querySelector(".navbar-nav");
//ketika menu diklik
document.querySelector("#menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

//klik di luar sidebar untuk menghilangkan nav

const menuX = document.querySelector("#menu");

document.addEventListener("click", function (e) {
  if (!menuX.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
