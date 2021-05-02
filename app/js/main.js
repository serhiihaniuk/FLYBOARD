//# sliders --
const page = document.querySelector(".page");
const swiperContainer = document.querySelector(".swiper-container");
const screenWrapper = document.querySelector(".screen-wrapper");

const breakpoint = window.matchMedia("(min-width:577px)");
let fullPage = undefined;

function breakpointChecker() {
  if (breakpoint.matches === true) {
    return enableSwiper();
  } else if (breakpoint.matches === false) {
    initMobile();
    if (fullPage !== undefined) {
      fullPage.destroy(true);
    }
    return;
  }
}

function enableSwiper() {
  initFullpage();
  fullPage = new Swiper(".swiper-container", {
    wrapperClass: "screen-wrapper",
    slideClass: "screen",
    // Optional parameters
    direction: "vertical",
    slidesPerView: "auto",
    loop: false,

    speed: 800,
    parallax: true,
    freeMode: true,
    mousewheel: {
      invert: false,
    },

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      577: {
        direction: "horizontal",
        slidesPerView: "auto",
        freeMode: false,
      },
    },
  });
}

breakpoint.addListener(breakpointChecker);
breakpointChecker();

function initFullpage() {
  page.classList.remove("mobile");
  swiperContainer.classList.remove("mobile");
  screenWrapper.classList.remove("mobile");
}

function initMobile() {
  page.classList.add("mobile");
  swiperContainer.classList.add("mobile");
  screenWrapper.classList.add("mobile");
}

const photoSlider = new Swiper(".slider-photo", {
  // Optional parameters
  direction: "horizontal",
  loop: false,
  speed: 800,
  spaceBetween: 0,
  slidesPerView: "auto",

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
  // breakpoints: {
  //   577: {
  //     spaceBetween: -1000,
  //   },
  // },
});

//# tabs --
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

//# aside --

const aside = document.querySelector(".aside-events");
const asideBody = document.querySelector(".aside-events__body");
const asideClose = document.querySelector(".aside-events__close");
const asideBurger = document.querySelector(".header__brgr");
const asideMenuLinks = document.querySelectorAll(".aside-events__item");

asideBurger.addEventListener("click", () => {
  aside.classList.add("active");
  asideBody.classList.add("active");
});

asideClose.addEventListener("click", () => {
  asideMenuClose();
});
aside.addEventListener("click", (e) => {
  if (e.target === aside) {
    asideMenuClose();
  }
});

function asideMenuClose() {
  aside.classList.remove("active");
  asideBody.classList.remove("active");
}

function fullPageMenu() {
  asideMenuLinks[fullPage.realIndex].classList.add("active");
  for (let i = 0; i < asideMenuLinks.length; i++) {
    const currentMenuLink = asideMenuLinks[i];
    currentMenuLink.addEventListener("click", (e) => {
      linkRemoveActive();
      asideMenuClose();
      console.log(fullPage.slideTo(i));
      fullPage.slideTo(i, 800);
      currentMenuLink.classList.add("active");
      e.preventDefault;
    });
  }
}
fullPageMenu();
function linkRemoveActive() {
  const menuLinkActive = document.querySelector(".aside-events__item.active");
  if (menuLinkActive) menuLinkActive.classList.remove("active");
}
