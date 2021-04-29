const swiper = new Swiper(".swiper-container", {
  // Optional parameters
  direction: "horizontal",
  loop: false,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
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
