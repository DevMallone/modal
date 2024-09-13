const buttons = document.querySelectorAll("[data-modal]");
const modals = document.querySelectorAll(".modal");
const boxModal = document.querySelector(".boxModal");

console.log();

buttons.forEach((buttonsModal) => {
  buttonsModal.addEventListener("click", function () {
    const clicked = this;
    const modal = clicked.dataset.modal;
    const open = document.querySelector(modal);

    open.style = "display:flex";
    boxModal.style = "display:flex";

    const closeButton = document.querySelectorAll(".close");
    closeButton.forEach((btnClose) => {
      btnClose.addEventListener("click", function () {
        open.style = "display:none";
        boxModal.style = "display:none";
      });
    });

    boxModal.addEventListener("click", function (e) {
      if (e.target == this) close();
    });

    function close() {
      boxModal.style = "display:none";
      open.style = "display:none";
    }
  });
});
