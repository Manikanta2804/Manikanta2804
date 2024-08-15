document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    let valid = true;

    if (name.length < 5) {
        showError('fullName', 'Name must be at least 5 characters long.');
        valid = false;
    } else {
        removeError('fullName');
    }

    if (!email.includes('@')) {
        showError('email', 'Enter a valid email address.');
        valid = false;
    } else {
        removeError('email');
    }

    if (phone === '123456789' || !/^\d{10}$/.test(phone)) {
        showError('phone', 'Enter a valid 10-digit phone number.');
        valid = false;
    } else {
        removeError('phone');
    }

    if (password.length < 8 || password.toLowerCase() === 'password' || password.toLowerCase() === name.toLowerCase()) {
        showError('password', 'Password must be at least 8 characters long and not be "password" or your name.');
        valid = false;
    } else {
        removeError('password');
    }

    if (password !== confirmPassword) {
        showError('confirmPassword', 'Passwords do not match.');
        valid = false;
    } else {
        removeError('confirmPassword');
    }

    if (valid) {
        alert('Form submitted successfully!');
    }
});

function showError(fieldId, message) {
    const field = document.getElementById(fieldId);
    field.classList.add('is-invalid');
    field.nextElementSibling.textContent = message;
}

function removeError(fieldId) {
    const field = document.getElementById(fieldId);
    field.classList.remove('is-invalid');
}
