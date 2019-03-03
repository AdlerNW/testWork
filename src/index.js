import "./index.scss";
let cardNumbers = null,
    cardHolder = null,
    CVVnumber = null,
    btnSubmit = null,
    form = null,
    testResult = true,
    regExpFourNamber = /\d{4}/,
    regExpThreeNamber = /\d{3}/,
    regExpForCardholderNaN = /[^a-z\s]/i,
    regExpForCardholderMin = /[a-z\s]{4,}/i;

document.addEventListener("DOMContentLoaded", function () {
    cardNumbers = document.querySelectorAll("input.form__cardNumber");
    cardHolder = document.querySelector("input.form__cardHolder");
    CVVnumber = document.querySelector("input.form__CVVnumber");
    btnSubmit = document.querySelector("button.form__btnSubmit");
    form = document.querySelector("form.form");
    btnSubmit.addEventListener('click', checkInputs);
});

function checkInputs(e) {
    e.preventDefault();
    testResult = true;
    CVVnumber.className = 'form__CVVnumber';
    for (let i = 0; i < cardNumbers.length; i++) {
        cardNumbers[i].className = 'form__cardNumber';
    }
    cardHolder.className = 'form__cardHolder';

    if (!regExpThreeNamber.test(CVVnumber.value) || (CVVnumber.value == '000')) {
        testResult = false;
        CVVnumber.className = 'form__CVVnumber form_error';
    }

    for (let i = 0; i < cardNumbers.length; i++) {
        if (!regExpFourNamber.test(cardNumbers[i].value) || (cardNumbers[i].value == '0000')) {
            testResult = false;
            cardNumbers[i].className = 'form__cardNumber form_error';
        }
    }

    if (regExpForCardholderNaN.test(cardHolder.value) || !regExpForCardholderMin.test(cardHolder.value)) {
        testResult = false;
        cardHolder.className = 'form__cardHolder form_error';
    }
    if (testResult) {
        form.submit();
    }
}