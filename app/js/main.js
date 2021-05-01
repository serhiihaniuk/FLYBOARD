//@ sliders --

const fullPage = new Swiper(".swiper-container", {
  // Optional parameters
  direction: "vertical",
  loop: false,
  speed: 800,
  parallax: true,
  // freeMode: true,
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

//@ tabs --
runTabs("show");
runTabs("media");
runTabs("info");
runTabs("gather");

const controls = document.querySelector(".slider-photo__controls");
function runTabs(sectionName) {
  const buttons = document.querySelectorAll(`.${sectionName}__tab-but`);
  const tabContent = document.querySelectorAll(`.${sectionName}__tab-cont`);
  const section = document.querySelector(`.${sectionName}`);
  tabs(buttons, tabContent, section, sectionName);
}
function tabs(buttons, tabContent, section, sectionName) {
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const tabId = button.getAttribute(`data-${sectionName}-tab`);
      const currentTab = document.querySelector(tabId);

      buttons.forEach((button) => {
        button.classList.remove("active");
      });
      tabContent.forEach((tab) => {
        tab.classList.remove("active");
      });

      if (tabId === `#${sectionName}-tab-second`) {
        tabId === "#media-tab-second" ? (controls.style.display = "none") : "";
        section.classList.add("night");
      } else {
        section.classList.remove("night");
        controls.style.display = "";
      }
      button.classList.add("active");
      currentTab.classList.add("active");
    });
  });
}
