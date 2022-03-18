const burger=document.querySelector(".header__burger");
const nav=document.querySelector(".nav");
burger.addEventListener("click", function() {
    nav.classList.toggle("header__nav--opened")
})
const faq = document.querySelector(".faq__item-btn");
const info = document.querySelector(".faq__item-info");
const icon = document.querySelector(".faq__btn-icon");
faq.addEventListener("click", function() {
    info.classList.toggle("faq__item-info--opened");
    icon.classList.toggle("faq__btn-icon--opened")
});


