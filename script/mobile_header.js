// Home page mobile header menu.
const menuButton = document.querySelector(".mob_header__dash");
menuButton.addEventListener('click', () => {
    document.querySelector(".mob_header__content").style.animation = 'header 1s forwards';
})

const crossButton = document.querySelector(".mobile__links__cross");
crossButton.addEventListener('click', () =>{
    document.querySelector(".mob_header__content").style.animation = 'headerBack 1s forwards';
})

const mobileLinks = document.querySelectorAll(".mobile__link");
mobileLinks.forEach(elem => {
    elem.addEventListener('click', () => {
        document.querySelector(".mob_header__content").style.animation = 'headerBack 1s forwards';
    })
})