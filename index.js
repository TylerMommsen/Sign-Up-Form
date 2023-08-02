const submitButton = document.querySelector('button');
const passError = document.querySelector('#password-error');

submitButton.addEventListener('click', checkPasswordsMatch);

function checkPasswordsMatch() {
    const pass1 = document.querySelector('#password');
    const pass2 = document.querySelector('#confirm_password');

    if (pass1.value === pass2.value) {
        return;
    } else {
        pass1.style['border-color'] = 'red';
        pass2.style['border-color'] = 'red';
        pass1.value = '';
        pass2.value = '';
        passError.style.display = 'block';
    }
}