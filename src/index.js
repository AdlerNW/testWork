import "./index.scss";
let cardNumbers = null,
    cardHolder = null,
    CVVnumber = null,
    btnSubmit = null,
    form = null,
    testResult = true,
    regExpNotNumber = /\D/,
    regExpFourNamber = /\d{4}/,
    regExpThreeNamber = /\d{3}/,
    regExpForCardholderNaN = /[^A-Za-z]/,
    regExpForCardholderMin = /[A-Za-z]{4,}/;
window.onload = function(){
    cardNumbers = document.querySelectorAll("input.form__cardNumber");
    cardHolder = document.querySelector("input.form__cardHolder");
    CVVnumber = document.querySelector("input.form__CVVnumber");
    btnSubmit = document.querySelector("button.form__btnSubmit");
    form = document.querySelector("form.form");
    btnSubmit.addEventListener('click', checkInputs);
    console.log(cardNumbers);
    console.log(cardHolder);
    console.log(CVVnumber);
    console.log(btnSubmit);
    console.log(form);
}

function checkInputs(e){
    e.preventDefault();
    testResult = true;
    if (regExpNotNumber.test(CVVnumber.value) || !regExpThreeNamber.test(CVVnumber.value) || (CVVnumber.value == '000')){
        testResult = false;
    } 

    for (let i = 0; i < cardNumbers.length; i++){
        if (regExpNotNumber.test(cardNumbers[i].value) || !regExpFourNamber.test(cardNumbers[i].value) || (cardNumbers[i].value == '0000')){
            testResult = false;
        }
    }

    if (regExpForCardholderNaN.test(cardHolder.value) || !regExpForCardholderMin.test(cardHolder.value)){
        testResult = false;
    }
    if (testResult){
        form.submit();
    }
}

// ну баттон повесить проверку (сделай для этого ф-ю!), если проверка тру, то форм.сабмит()