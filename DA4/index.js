// var name = window.prompt("Name");
// console.log(name);


function submitBtn() {
    validateFirst();
    validateLastName();
    validateEmail();
    validateUsername();
    validatePassword();
    validateDOB();
    validatePhone();
    validateAmount();
    validateYear();
};

function validateFirst() {
    const firstEl = document.getElementById('First-Name');
    const pat = /^[A-Za-z]{8,10}$/;
    if (!pat.test(firstEl.value)) {
        window.alert('Enter correct First Name.');
        firstEl.focus();
    }
}

function validateLastName() {
    const lastEl = document.getElementById('Last-Name');
    const pat = /^(.[A-Za-z]{1}){1,}$/;
    if (!pat.test(lastEl.value)) {
        window.alert('Enter correct Last Name.');
        lastEl.focus();
    }
}

function validateEmail() {
    const emailEl = document.getElementById('E-mail');
    const pat = /^[0-9a-zA-Z]+@gmail.com$/;
    if (!pat.test(emailEl.value)) {
        window.alert('Wrong E-mail entered. E-mail type: xxx@gmail.com');
        emailEl.focus();
    }
}

function validateDOB() {
    const dobEl = document.getElementById('Date-Of-Birth');
    const pat = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]([2][01]\d{2}|[1][9]\d{2})$/;
    if (!pat.test(dobEl.value)) {
        window.alert('Enter correct DOB.');
    }
}

function validatePhone() {
    const phoneEl = document.getElementById('Phone');
    const pat = /^[6-9]{1}[0-9]{9}$/;
    if (!pat.test(phoneEl.value)) {
        window.alert('Wrong Phone entered. Enter correct Phone Number.');
    }
}

function validateUsername() {
    const usernameEl = document.getElementById('Username');
    const pat = /^[_a-zA-Z0-9]{8,}$/;
    if (!pat.test(usernameEl.value)) {
        window.alert('Wrong Username entered. Enter correct Usernamer.');
    }
}


function validatePassword() {
    const passwordEl = document.getElementById('Password');
    if (passwordEl.value.length == 0) {
        window.alert('Enter Password.');
    }
}

function validateAmount() {
    const amountEl = document.getElementById('Insurance-Amount');
    const pat = /^[0-9]{4,}$/;
    if (!pat.test(amountEl.value)) {
        window.alert('Enter correct Amount Number.');
    }
}


function validateYear() {
    const yearEl = document.getElementById('Year');
    const pat = /^[1-3][0-9]{1}$/;
    if (!pat.test(yearEl.value)) {
        window.alert('Enter correct year.');
    }
}







