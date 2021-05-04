//# sliders --
const page = document.querySelector(".page");
const swiperContainer = document.querySelector(".swiper-container");
const screenWrapper = document.querySelector(".screen-wrapper");

//# aside navigation --
const aside = document.querySelector(".aside-events");
const asideBody = document.querySelector(".aside-events__body");
const asideClose = document.querySelector(".aside-events__close");
const asideBurger = document.querySelector(".header__brgr");
const asideMenuLinks = document.querySelectorAll(".aside-events__item");
const prevArrowName = document.querySelector(".prev-screen__name");
const nextArrowName = document.querySelector(".next-screen__name");
const screenNames = {
  0: "Главная",
  1: "Мероприятия",
  2: "Виды шоу",
  3: "Что входит?",
  4: "Наши фото и видео",
  5: "Как мы работаем",
  6: "Скидка для агентств",
  7: "Соберите Ваше шоу",
};
function changeArrowName() {
  if (!screenNames[fullPage.realIndex - 1]) {
    prevArrowName.nextElementSibling.style.display = "none";
  } else {
    prevArrowName.nextElementSibling.style.display = "";
  }
  if (!screenNames[fullPage.realIndex + 1]) {
    nextArrowName.nextElementSibling.style.display = "none";
  } else {
    nextArrowName.nextElementSibling.style.display = "";
  }
  prevArrowName.innerHTML = screenNames[fullPage.realIndex - 1] || "";
  nextArrowName.innerHTML = screenNames[fullPage.realIndex + 1] || "";
}

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
      e.preventDefault();
      linkRemoveActive();
      asideMenuClose();
      fullPage.slideTo(i, 800);
      currentMenuLink.classList.add("active");
    });
  }
}
function linkRemoveActive() {
  const menuLinkActive = document.querySelector(".aside-events__item.active");
  if (menuLinkActive) menuLinkActive.classList.remove("active");
}
//# aside navigation mobile --
const asideMobileBurger = document.querySelector(".header__menu-brgr");
const asideMenuList = document.querySelector(".header__menu");
const asideMobileClose = document.querySelector(".header__aside-close");
const asideMobileCloseList = document.querySelectorAll(".close");

asideMobileBurger.addEventListener("click", () => {
  asideMenuList.classList.add("active");
});
asideMobileClose.addEventListener("click", () => {
  asideMenuList.classList.remove("active");
});
asideMobileCloseList.forEach((item) => {
  item.addEventListener("click", () => {
    asideMenuList.classList.remove("active");
  });
});

//# fullpage init --
const breakpointWidth = window.matchMedia("(min-width:577px)");
const breakpointHeight = window.matchMedia("(min-height:700px)");

let fullPage = undefined;

function breakpointChecker() {
  if (breakpointWidth.matches === true && breakpointHeight.matches === true) {
    return enableSwiper();
  } else if (
    breakpointWidth.matches === false ||
    breakpointHeight.matches === false
  ) {
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
    init: false,
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
      nextEl: ".next-screen",
      prevEl: ".prev-screen",
    },
    breakpoints: {
      577: {
        direction: "horizontal",
        slidesPerView: "auto",
        freeMode: false,
      },
    },
    on: {
      slideChange: function () {
        changeArrowName();
        linkRemoveActive();
        asideMenuLinks[fullPage.realIndex].classList.add("active");
      },
    },
  });
  fullPage.init();
  fullPageMenu();
}

breakpointWidth.addListener(breakpointChecker);
breakpointHeight.addListener(breakpointChecker);
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
});

//# tabs --
runTabs("show");
runTabs("media");
runTabs("info");
runTabs("gather");
runTabs("order");

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

//# promo order

const orderHeaderBtn = document.querySelector(".header__order");
const orderAside = document.querySelector(".order");
const orderAsideBody = document.querySelector(".order__body");
const orderAsideContent = document.querySelector(".order__content");
const orderAsideTitle = document.querySelector(".order__title");
const orderAsideClose = document.querySelector(".order__close");
const orderAsideBtn = document.querySelector(".aside-events__order");
const makeOrderBtns = document.querySelectorAll(".form-button");

const requestAside = document.querySelector(".request");
const requestAsideBody = document.querySelector(".request__body");
const requestAsideContent = document.querySelector(".request__content");
const requestAsideClose = document.querySelector(".request__close");
const requestBtn = document.querySelector(".request-button");
const gatherConfirmBtns = document.querySelectorAll(".gather__confirm");

const orderThank = `  
    <div class="order__thank">
        <div class="order__thank-img"></div>
        <div class="order__thank-text">
            Спасибо, что вы выбрали нас!
            Наш оператор свяжется с вами,
            после чего Ваши данные занесутся
            в нашу базу
        </div>
        <button class="common-button order__thank-btn">На главную</button>
    </div>`;

orderHeaderBtn.addEventListener("click", (e) => {
  e.preventDefault();
  orderAside.classList.add("active");
  orderAsideBody.classList.add("active");
});
orderAsideBtn.addEventListener("click", (e) => {
  e.preventDefault();
  asideMenuClose();
  orderAside.classList.add("active");
  orderAsideBody.classList.add("active");
});

orderAsideClose.addEventListener("click", () => {
  orderMenuClose();
});
orderAside.addEventListener("click", (e) => {
  if (e.target === orderAside) {
    asideMenuClose();
  }
});

function orderMenuClose() {
  orderAside.classList.remove("active");
  orderAsideBody.classList.remove("active");
}

function requestMenuClose() {
  requestAside.classList.remove("active");
  requestAsideBody.classList.remove("active");
}

//* open send request aside menu after pressing "send request btn"
gatherConfirmBtns.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    requestAside.classList.add("active");
    requestAsideBody.classList.add("active");
  });
});

//* close send request aside menu
requestAsideClose.addEventListener("click", () => {
  requestMenuClose();
});

//* show thanks screen after order
makeOrderBtns.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    showThanks();
  });
});

function showThanks() {
  orderAsideTitle.innerHTML = "";
  orderAsideBody.removeChild(orderAsideContent);
  orderAsideBody.insertAdjacentHTML("beforeend", orderThank);
  requestAsideBody.removeChild(requestAsideContent);
  requestAsideBody.insertAdjacentHTML("beforeend", orderThank);
  const goMainOrder = orderAsideBody.querySelector(".order__thank-btn");
  const goMainRequest = requestAsideBody.querySelector(".order__thank-btn");

  goMainOrder.addEventListener("click", (e) => {
    orderMenuClose();
    fullPage.slideTo(0, 800);
  });
  goMainRequest.addEventListener("click", (e) => {
    console.log("asd");

    requestMenuClose();
    fullPage.slideTo(0, 800);
  });
}
