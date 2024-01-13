"use strict";

const clc = document.querySelector(".grey-section");
const headerBodyCon = document.querySelector(".header-body-con");
const nav = document.querySelector(".nav");
const header = document.querySelector("header");

const obsOption = {
  root: null,
  threshold: 0,
};

const obsCallback = (entries) => {
  const entry = entries[0];
  console.log(entry);

  if (!entry.isIntersecting) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
};

const observer = new IntersectionObserver(obsCallback, obsOption);
observer.observe(headerBodyCon);



