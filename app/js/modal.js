function createModal() {
  const body = document.querySelector("body");
  const modal = document.createElement("div");
  modal.classList.add("modal");

  const modalBody = document.createElement("div");
  modalBody.classList.add("modal__body");

  const modalClose = document.createElement("div");
  modalClose.classList.add("modal__close");

  const modalImg = document.createElement("img");
  modalImg.classList.add("modal__img");
  modalBody.appendChild(modalImg);
  modalBody.appendChild(modalClose);
  modal.appendChild(modalBody);

  body.appendChild(modal);

  return modal;
}

function modal(options) {
  const modalWindow = createModal();
  const modalBody = modalWindow.children[0];
  const modalImg = modalBody.children[0];

  function open() {
    const isOpening = modalWindow.classList.contains("opening");
    if (!isOpening) {
      modalWindow.classList.add("active");
      modalWindow.classList.add("opening");
      setTimeout(() => {
        modalWindow.classList.remove("opening");
      }, 300);
    }
  }
  function close() {
    const isClosing = modalWindow.classList.contains("closing");
    if (!isClosing) {
      modalWindow.classList.remove("active");
      modalWindow.classList.add("closing");
      setTimeout(() => {
        modalWindow.classList.remove("closing");
      }, 300);
    }
  }
  function setContent(url) {
    modalImg.setAttribute("src", `${url}`);
  }
  modalWindow.addEventListener("click", (e) => {
    if (e.target !== modalImg) close();
  });
  return {
    open,
    close,
    setContent,
  };
}

const imgMod = modal();
const images = document.querySelectorAll(".media-grid__img");
const imgContainer = document.querySelectorAll(".media-grid__img-small");

imgContainer.forEach((item) => {
  item.addEventListener("click", (e) => {
    const image = item.querySelector(".media-grid__img");
    const url = image.getAttribute("src");
    imgMod.setContent(url);
    imgMod.open();
  });
});
