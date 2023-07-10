var form = document.getElementById('myForm');
var nameField = document.getElementById('name');
var emailField = document.getElementById('email');
var phoneField = document.getElementById('phone');
var passwordField = document.getElementById('password');
var ageField = document.getElementById('age');
var genderField = document.getElementById('gender');
var dateField = document.getElementById('date');
var colorField = document.getElementById('color');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  var isValid = validateForm();

  if (isValid) {
    // Submit the form or perform other actions
    console.log('Form submitted successfully!');
    form.reset();
  }
});

function validateForm() {
  var isValid = true;

  // Reset error messages
  clearErrorMessages();

  // Name validation
  if (nameField.value.trim() === '') {
    displayErrorMessage('nameError', 'Name is required');
    isValid = false;
  }

  // Email validation
  if (emailField.value.trim() === '') {
    displayErrorMessage('emailError', 'Email is required');
    isValid = false;
  } else if (!isValidEmail(emailField.value.trim())) {
    displayErrorMessage('emailError', 'Please enter a valid email');
    isValid = false;
  }

  // Phone number validation
  if (phoneField.value.trim() === '') {
    displayErrorMessage('phoneError', 'Phone number is required');
    isValid = false;
  } else if (!isValidPhoneNumber(phoneField.value.trim())) {
    displayErrorMessage('phoneError', 'Please enter a valid phone number');
    isValid = false;
  }

  // Password validation
  if (passwordField.value.trim() === '') {
    displayErrorMessage('passwordError', 'Password is required');
    isValid = false;
  }

  // Age validation
  if (ageField.value === '' || parseInt(ageField.value) <= 0) {
    displayErrorMessage('ageError', 'Please enter a valid age');
    isValid = false;
  }

  // Gender validation
  if (genderField.value === '') {
    displayErrorMessage('genderError', 'Please select a gender');
    isValid = false;
  }

  // Date validation
  if (dateField.value.trim() === '') {
    displayErrorMessage('dateError', 'Date is required');
    isValid = false;
  }

  // Color validation
  if (colorField.value.trim() === '') {
    displayErrorMessage('colorError', 'Color is required');
    isValid = false;
  }

  return isValid;
}

function displayErrorMessage(elementId, message) {
  var errorElement = document.getElementById(elementId);
  errorElement.textContent = message;
}

function clearErrorMessages() {
  var errorElements = document.getElementsByClassName('error');
  for (var i = 0; i < errorElements.length; i++) {
    errorElements[i].textContent = '';
  }
}

function isValidEmail(email) {
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}

function isValidPhoneNumber(phone) {
  var phonePattern = /^\d{10}$/;
  return phonePattern.test(phone);
}