"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const loader = document.querySelector(".loader");
  setTimeout(function () {
    loader.style.opacity = "0";
    setTimeout(function () {
      loader.style.display = "none";
    }, 1000);
  }, 1500);
});

const up = document.querySelector(".up");

var debounce = (func, wait, immediate) => {
  var timeout;
  return function () {
    var context = this,
      args = arguments;
    var later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};

const checkScroll = () => {
  console.log(window.scrollY);
  if (window.scrollY > 200) {
    up.classList.add("active");
  } else {
    up.classList.remove("active");
  }
};

window.addEventListener("scroll", debounce(checkScroll, 20));
