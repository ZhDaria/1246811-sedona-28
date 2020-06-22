var bookingLink = document.querySelector(".start-searching-button");
var bookingPopup = document.querySelector(".modal");
var bookingForm = document.querySelector(".searching-form");
var bookingCheckin = document.querySelector(".ckeckin");
var bookingCheckout = document.querySelector(".ckeckout");
var bookingAdults = document.querySelector(".adults-input");
var bookingKids = document.querySelector(".kids-input");

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("adults-amount");
  storage = localStorage.getItem("kids-amount");
} catch (err) {
  isStorageSupport = false;
}

bookingPopup.classList.add("modal-hide");

bookingLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    bookingPopup.classList.toggle("modal-hide");

    if (bookingPopup.classList.contains('modal-hide')) {
        bookingPopup.classList.remove("modal-error");
    }

    if (storage) {
        bookingAdults.value = storage;
        bookingKids.value = storage;
    }
    bookingCheckin.focus();
});

bookingForm.addEventListener("submit", function (evt) {
    if (!bookingCheckin.value || !bookingCheckout.value || !bookingAdults.value || !bookingKids.value)  {
        evt.preventDefault();
        bookingPopup.classList.remove("modal-error");
        bookingPopup.offsetWidth = bookingPopup.offsetWidth;
        bookingPopup.classList.add("modal-error");
      }
    else {
        if (isStorageSupport) { 
        localStorage.setItem("adults-amount", bookingAdults.value);
        localStorage.setItem("kids-amount", bookingKids.value);
        }
      }
    });

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        if (!bookingPopup.classList.contains("modal-hide")) {
            evt.preventDefault();
            bookingPopup.classList.add("modal-hide");
            bookingPopup.classList.remove("modal-error");
          }
        }
      });

  