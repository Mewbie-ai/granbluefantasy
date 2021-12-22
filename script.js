const modal = document.querySelector(".modal")
const modalLink = document.querySelector(".modal-link")
// const modalClose = document.querySelector(".modal-close")

modalLink.onclick = function() {
  modal.style.display = "block";
}

// modalClose.onclick = function() {
//   modal.style.display = "none";
// }

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}