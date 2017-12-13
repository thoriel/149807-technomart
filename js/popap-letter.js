var letter_link = document.querySelector(".contacts-link");
var letter_popap = document.querySelector(".popap-letter");
var letter_close = document.querySelector(".modal-close");
var letter_login = letter_popap.querySelector("[name=login]");

letter_link.addEventListener("click", function (evt) {
	evt.preventDefault();
	letter_popap.classList.add("popap-letter-show");
	letter_login.focus();
});

letter_close.addEventListener("click", function (evt) {
	evt.preventDefault();
	letter_popap.classList.remove("popap-letter-show");
});