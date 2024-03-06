const menuBtn = document.querySelector('#menu') as HTMLButtonElement
const mobileNav = document.querySelector('#mobile-navbar') as HTMLDivElement
const closeBtn = document.querySelector('#btn-close') as HTMLButtonElement

menuBtn.addEventListener('click', () => {
  mobileNav.classList.toggle('active')
})

closeBtn.addEventListener('click', () => {
  mobileNav.classList.toggle('active')
})