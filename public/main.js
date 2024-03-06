"use strict";
const menuBtn = document.querySelector('#menu');
const mobileNav = document.querySelector('#mobile-navbar');
const closeBtn = document.querySelector('#btn-close');
menuBtn.addEventListener('click', () => {
    mobileNav.classList.toggle('active');
});
closeBtn.addEventListener('click', () => {
    mobileNav.classList.toggle('active');
});
