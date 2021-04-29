const fullPage = new Swiper(".swiper-container", {
  // Optional parameters
  direction: "vertical",
  loop: false,
  mousewheel: {
    invert: false,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const photoSlider = new Swiper(".slider-photo", {
  // Optional parameters
  direction: "horizontal",
  loop: false,
  speed: 800,
  spaceBetween: -1000,

  navigation: {
    nextEl: ".slider-photo__next",
    prevEl: ".slider-photo__prev",
  },
  pagination: {
    el: ".swiper-photo-pagination",
    type: "bullets",
    bulletClass: "swiper-photo-bullet",
    bulletActiveClass: "swiper-photo-bullet-active",
    clickable: true,
  },
});

//* show section tabs
const showTabButtons = document.querySelectorAll(".show__tab-but");
const showTabContent = document.querySelectorAll(".show__tab-cont");
const showSection = document.querySelector(".show");

showTabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const tabId = button.getAttribute("data-show-tab");
    const currentTab = document.querySelector(tabId);

    showTabButtons.forEach((button) => {
      button.classList.remove("active");
    });
    showTabContent.forEach((tab) => {
      tab.classList.remove("active");
    });
    console.log(tabId);

    if (tabId === "#show-tab-second") {
      showSection.classList.add("night");
    } else {
      showSection.classList.remove("night");
    }
    button.classList.add("active");
    currentTab.classList.add("active");
  });
});

//* media section tabs
const mediaTabButtons = document.querySelectorAll(".media__tab-but");
const mediaTabContent = document.querySelectorAll(".media__tab-cont");
const mediaSection = document.querySelector(".media");
const controls = document.querySelector(".slider-photo__controls");

mediaTabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const tabId = button.getAttribute("data-media-tab");
    const currentTab = document.querySelector(tabId);

    mediaTabButtons.forEach((button) => {
      button.classList.remove("active");
    });
    mediaTabContent.forEach((tab) => {
      tab.classList.remove("active");
    });
    console.log(tabId);

    if (tabId === "#media-tab-second") {
      mediaSection.classList.add("night");
      controls.style.display = "none";
    } else {
      mediaSection.classList.remove("night");
      controls.style.display = "";
    }
    button.classList.add("active");
    currentTab.classList.add("active");
  });
});

//* info section tabs
const infoTabButtons = document.querySelectorAll(".info__tab-but");
const infoTabContent = document.querySelectorAll(".info__tab-cont");
const infoSection = document.querySelector(".info");

infoTabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const tabId = button.getAttribute("data-info-tab");
    const currentTab = document.querySelector(tabId);

    infoTabButtons.forEach((button) => {
      button.classList.remove("active");
    });
    infoTabContent.forEach((tab) => {
      tab.classList.remove("active");
    });
    console.log(tabId);

    if (tabId === "#info-tab-second") {
      infoSection.classList.add("night");
    } else {
      infoSection.classList.remove("night");
    }
    button.classList.add("active");
    currentTab.classList.add("active");
  });
});
