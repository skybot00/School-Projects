function validateForm() {
    let isValid = true;

    // Get all input values
    let username = document.getElementById("username");
    let email = document.getElementById("email");
    let phone = document.getElementById("phone");
    let password = document.getElementById("password");
    let confirmPassword = document.getElementById("confirmPassword");
    let ageGroup = document.getElementById("ageGroup");
    let gender = document.querySelector('input[name="gender"]:checked');

    // Clear previous errors
    clearErrors();

    // Username validation
    const usernameRegex = /^[a-z0-9]{4,12}$/;
    if (!username.value) {
        setError('usernameError', "Please enter a username");
        isValid = false;
    } else if (!usernameRegex.test(username.value)) {
        setWarning('usernameError', "Username must be 4-12 lowercase letters or numbers");
        isValid = false;
    }

    // Email validation
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|net|org|edu)$/;
    if (!email.value) {
        setError('emailError', "Please enter an email");
        isValid = false;
    } else if (!emailRegex.test(email.value)) {
        setWarning('emailError', "Please enter a valid email");
        isValid = false;
    }

    // Phone number validation
    const phoneRegex = /^\(\d{3}\)-\d{3}-\d{4}$/;
    if (!phone.value) {
        setError('phoneError', "Please enter a phone number");
        isValid = false;
    } else if (!phoneRegex.test(phone.value)) {
        setWarning('phoneError', "Please enter a valid phone number in format (123)-456-7890");
        isValid = false;
    }

    // Password validation
    const passwordRegex = /^[A-Za-z\d_]{8,}$/; // 8 characters minimum
    if (!password.value) {
        setError('passwordError', "Please enter a password");
        isValid = false;
    } else if (!passwordRegex.test(password.value)) {
        setWarning('passwordError', "Password must be at least 8 characters (letters, numbers, or underscores)");
        isValid = false;
    }

    // Confirm Password validation
    if (!confirmPassword.value) {
        setError('confirmPasswordError', "Please confirm your password");
        isValid = false;
    } else if (password.value !== confirmPassword.value) {
        setError('confirmPasswordError', "Passwords do not match");
        isValid = false;
    }

    // Gender validation
    if (!gender) {
        setError('genderError', "Please select a gender");
        isValid = false;
    }

    // Age group validation
    if (ageGroup.value === "") {
        setError('ageGroupError', "Please select an age group");
        isValid = false;
    }

    return isValid;
}

// Set error in red
function setError(elementId, message) {
    const element = document.getElementById(elementId);
    element.textContent = message;
    element.classList.remove('warning');
    element.classList.add('error');
}

// Set warning in orange
function setWarning(elementId, message) {
    const element = document.getElementById(elementId);
    element.textContent = message;
    element.classList.remove('error');
    element.classList.add('warning');
}

// Clear all previous errors and warnings
function clearErrors() {
    const errors = document.querySelectorAll('.error, .warning');
    errors.forEach(function (error) {
        error.textContent = '';
    });
}

// Reset form and clear errors
function resetForm() {
    clearErrors();
}
