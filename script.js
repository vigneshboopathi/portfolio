const li = document.querySelectorAll(".navbtn");
const sec = document.querySelectorAll("section[id]");

function activeMenu() {
  let len = sec.length;
  while(--len && window.scrollY + 97 < sec[len].offsetTop){}
  li.forEach(itx => itx.classList.remove("active"));
  li[len].classList.add("active");
}
activeMenu();
window.addEventListener("scroll", activeMenu);
