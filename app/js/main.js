const fullPage = new Swiper(".swiper-container", {
  // Optional parameters
  direction: "horizontal",
  loop: false,

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
    } else {
      mediaSection.classList.remove("night");
    }
    button.classList.add("active");
    currentTab.classList.add("active");
  });
});
