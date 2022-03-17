const faq = document.querySelector(".faq__item-btn");
const info = document.querySelector(".faq__item-info");
const icon = document.querySelector(".faq__btn-icon");
faq.addEventListener("click", function() {
    info.classList.toggle("faq__item-info--opened");
    icon.classList.toggle("faq__btn-icon--opened")
});