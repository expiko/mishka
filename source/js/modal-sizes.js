"use strict";

var controller = new AbortController();
var order = document.querySelector(".product-of-week__button");
var overlay = document.querySelector(".overlay");
var modalSizes = document.querySelector(".modal-sizes");
var modalClose = modalSizes.querySelector(".modal-sizes__add");
var addToCartButtons = document.querySelectorAll(".catalog-item__put");
var body = document.body;

order.addEventListener("click", function (event) {
  event.preventDefault();

  modalSizes.classList.remove("modal-sizes--show");
  overlay.classList.remove("overlay--show");
  body.classList.remove("body--hidden");

  modalSizes.classList.add("modal-sizes--show");
  overlay.classList.add("overlay--show");
  body.classList.add("body--hidden");
});

// modalClose.addEventListener("click", function (event) {
//   event.preventDefault();

//   modalSizes.classList.remove("modal-sizes--show");
//   overlay.classList.remove("overlay--show");
//   body.classList.remove("body--hidden");
// });

// overlay.addEventListener("click", function (event) {
//   var isClosest = event.target.closest("modal-sizes");

//   if (!isClosest && overlay.classList.contains("overlay--show")) {
//     modalSizes.classList.remove("modal-sizes--show");
//     overlay.classList.remove("overlay--show");
//     body.classList.remove("body--hidden");
//   }
// });

window.addEventListener("keydown", function (event) {
  if (event.key === "Escape" || event.key === "Esc") {
    event.preventDefault();

    if (modalClose.classList.contains("modal-sizes--show") || overlay.classList.contains("overlay--show")) {
      modalSizes.classList.remove("modal-sizes--show");
      overlay.classList.remove("overlay--show");
      body.classList.remove("body--hidden");
    }
  }
});
