// JavaScript Document
let modal = document.querySelector(".modal-icon");
let btn = document.querySelector(".modal-btn");
let popup = document.querySelector(".modal");
let checkin = popup.querySelector("[name=date_checkin]");
let checkout = popup.querySelector("[name=date-checkout]");
let error = document.querySelector(".error");


let isStorageSupport = true;
let checkinstorage = "";
let checkoutstorage = "";

try {
    checkinstorage = localStorage.getItem("checkin");
    checkoutstorage = localStorage.getItem("checkout");
} catch (err) {
    isStorageSupport = false;
}
if (checkinstorage && checkoutstorage) {
    checkin.value = checkinstorage;
    checkout.value = checkoutstorage;
}
if (checkinstorage) {
    checkin.value = checkinstorage;
    checkout.focus();
} else {
    checkin.focus();
}
btn.addEventListener("click", (evt) => {
    evt.preventDefault();
    modal.classList.toggle("hidden");
	modal.classList.add("animate");
    checkin.focus();
});

popup.addEventListener("submit", function(evt) {
    if (!checkin.value || !checkout.value) {
        evt.preventDefault();
        error.innerHTML = "Заполните поля формы!!!";
        this.classList.add("modal-error");
    } else {
        if (isStorageSupport) {
            localStorage.setItem("checkin", checkin.value);

        }


    }
});