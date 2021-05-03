function createModal(options) {
  const body = document.querySelector("body");
  const modal = document.createElement("div");
  modal.classList.add("modal");

  const modalBody = document.createElement("div");
  modalBody.classList.add("modal__body");

  const modalClose = document.createElement("div");
  modalClose.classList.add("modal__close");

  if (options.type == "video") {
    const iFrame = `<iframe src="" 
                    title="YouTube 
                    video player" frameborder="0" 
                    allow="accelerometer; autoplay; 
                    clipboard-write; encrypted-media; 
                    gyroscope; picture-in-picture" 
                    allowfullscreen>
                  </iframe>`;
    modalBody.insertAdjacentHTML("afterbegin", iFrame);
  }
  if (options.type == "photo") {
    const modalImg = document.createElement("img");
    modalImg.classList.add("modal__img");
    modalBody.appendChild(modalImg);
  }

  modalBody.appendChild(modalClose);
  modal.appendChild(modalBody);
  body.appendChild(modal);

  return modal;
}

function modal(options) {
  const modalWindow = createModal(options);
  const modalBody = modalWindow.children[0];
  const modalMedia = modalBody.children[0];

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
    if (options.type == "video") {
      modalMedia.setAttribute("src", `https://www.youtube.com/embed/${url}`);
    }
    if (options.type == "photo") {
      modalMedia.setAttribute("src", `${url}`);
    }
  }
  modalWindow.addEventListener("click", (e) => {
    if (e.target !== modalMedia) close();
  });
  return {
    open,
    close,
    setContent,
  };
}

const imgMod = modal({
  type: "photo",
});
const videoMod = modal({
  type: "video",
});

const imgContainer = document.querySelectorAll(".media-grid__img-small");
const videoContainer = document.querySelectorAll(".media-grid__video");

imgContainer.forEach((item) => {
  item.addEventListener("click", (e) => {
    const image = item.querySelector(".media-grid__img");
    const url = image.getAttribute("src");
    imgMod.setContent(url);
    imgMod.open();
  });
});

videoContainer.forEach((item) => {
  item.addEventListener("click", (e) => {
    const url = item.getAttribute("data-url");
    videoMod.setContent(url);
    videoMod.open();
  });
});
