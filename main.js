// Get elements
const modal = document.getElementById("modal");
const modalBtn = document.getElementById("modalBtn");
const closeBtn = document.getElementById("close-btn");

// Listen for events
modalBtn.addEventListener("click", openModal);

// Listen for close click
closeBtn.addEventListener("click", closeModal);

// Listen for outside click
window.addEventListener("click", clickOutside);

//  Open the modal
function openModal() {
  modal.style.display = "block";
}

// Close the modal
function closeModal() {
  modal.style.display = "none";
}

function clickOutside(e) {
  if (e.target === modal) {
    modal.style.display = "none";
  }
}
