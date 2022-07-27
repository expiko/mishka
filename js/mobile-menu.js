"use strict";

var mainNavigation = document.querySelector(".main-navigation");
var menuToggle = mainNavigation.querySelector(".main-navigation__toggle");

mainNavigation.classList.remove("main-navigation--nojs");

menuToggle.addEventListener("click", function (event) {
  event.preventDefault();

  if (mainNavigation.classList.contains("main-navigation--closed")) {
    mainNavigation.classList.remove("main-navigation--closed");
    mainNavigation.classList.add("main-navigation--opened");
  } else {
    mainNavigation.classList.remove("main-navigation--opened");
    mainNavigation.classList.add("main-navigation--closed");
  }
});