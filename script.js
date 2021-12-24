// constants
const modal = document.querySelector(".modal")
const modalLink = document.querySelector(".modal-link")
const modalClose = document.querySelector(".modal-close")
const tab = document.querySelector(".tab")
const tabLink = document.querySelector(".tab-link")
const tabArrow = document.getElementById("tab-arrow")

// variables
let arrowTog = true

modalClose.onclick = function() {
  modal.style.display = "none";
}
modalLink.onclick = function() {
  modal.style.display = "flex";
}

tabLink.onclick = function() {
  tab.classList.toggle("active");
  tabArrow.classList.toggle("active");
  arrowTog = !arrowTog;
  if (arrowTog == true) {
    tabArrow.src = 'links_tab.png'
  } else {
    tabArrow.src = 'links_tab_1.png'
  }
}


window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
