"use strict";

(function () {

/* Mobile menu* */

  let nav = document.querySelector(".header__wrapper");
  let menuButton = nav.querySelector(".header__toggle");
  let docWidth = window.innerWidth;
  let tabletWidth = 768;


  nav.classList.remove("header__wrapper--nojs");

  function burgerClickHandler() {
    nav.classList.toggle("header__wrapper--show");
  }

  menuButton.addEventListener("click", burgerClickHandler);

/* Example block */

  let example = document.querySelector(".example__slider");

  if (example) {
    let btnBefore = example.querySelector(".example__button--before");
    let btnAfter = example.querySelector(".example__button--after");

    btnBefore.addEventListener("click", function () {
      if (example.classList.contains("example__slider--after")) {
        example.classList.remove("example__slider--after");
      }
    })

    btnAfter.addEventListener("click", function () {
      if (!example.classList.contains("example__slider--after")) {
        example.classList.add("example__slider--after");
      }
    })

    if (docWidth >= tabletWidth) {
      let imgBefore = example.querySelector(".example__image--fatcat");
      let imgAfter = example.querySelector(".example__image--catskinny");
      let scale = example.querySelector(".example__bar");
      let range = scale.querySelector(".example__bar-range");

      range.addEventListener("input", function() {
        imgBefore.style.width = (100 - range.value) + "%";
        imgAfter.style.width = range.value + "%";
      })

      btnBefore.addEventListener("click", function () {
        imgBefore.style.width = "100%";
        imgAfter.style.width = "0%";
        range.value = 0;
      })

      btnAfter.addEventListener("click", function () {
        imgBefore.style.width = "0%";
        imgAfter.style.width = "100%";
        range.value = 100;
      })
    }
  }
})();
