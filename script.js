'use strict';

const signInModal = document.querySelector('.header__sign-in');
const logInModal = document.querySelector('.header__log-in');
const signIn = document.querySelector('.sign-in');
const signInClose = document.querySelector('.sign-in__times');

const fullName = document.querySelector('.full-name');
const email = document.querySelector('.email');
const date = document.querySelector('.date');
const password = document.querySelector('.password');
const confirmPassword = document.querySelector('.confirm-password');
const signInForm = document.querySelector('.sign-in__form');

const logIn = document.querySelector('.log-in');
const logInForm = document.querySelector('.log-in__form');
const logEmail = document.getElementById('log-email');
const logPassword = document.getElementById('log-password');
const logError = document.querySelector('.log-error');
const logInClose = document.querySelector('.log-in__times');

const errorMsg = document.querySelector('.error-msg');

// Add an event listener to open the sign in modal button
signInModal.addEventListener('click', function () {
  // Some code
  signIn.style.display = 'block';
  logIn.style.display = 'none';
});

// Add an event listener to close the sign in modal button
signInClose.addEventListener('click', function () {
  signIn.classList.remove('sign-in__modal');
  signIn.style.display = 'none';
});

// Get the data from the user
const user = [];

signInForm.addEventListener('submit', function (e) {
  e.preventDefault();

  //   Check the inputs
  if (
    fullName.value === '' &&
    email.value === '' &&
    date.value === '' &&
    password.value === '' &&
    confirmPassword.value === ''
  ) {
    return;
  } else if (password.value !== confirmPassword.value) {
    errorMsg.textContent = 'Passwords do not match';
    password.classList.add('error-border');
    confirmPassword.classList.add('error-border');
  } else {
    const studentsList = {
      studentName: fullName.value.trim(),
      studentEmail: email.value.trim(),
      studentBirthYear: date.value,
      studentPassword: password.value.trim(),
    };

    user.push(studentsList);
    localStorage.setItem('student', JSON.stringify(user));

    fullName.value =
      email.value =
      date.value =
      password.value =
      confirmPassword.value =
        '';
  }
});

// Add an event listener to the log in button
logInModal.addEventListener('click', function () {
  logIn.style.display = 'block';
  signIn.style.display = 'none';
});

logInClose.addEventListener('click', function () {
  logIn.style.display = 'none';
});

// Log in functionality
logInForm.addEventListener('submit', function (e) {
  e.preventDefault();

  // Get the data from the local storage
  const data = JSON.parse(localStorage.getItem('student'));

  // Get the data from the UI
  data.forEach(function (student, i) {
    if (
      logEmail.value.trim() !== student.studentEmail &&
      logPassword.value.trim() !== student.studentPassword
    ) {
      logError.textContent = 'Invalid credentials';
      logEmail.classList.add('error-border');
      logPassword.classList.add('error-border');
    } else {
      logEmail.value = logPassword.value = '';

      alert('You have successifully logged in');

      logIn.style.display = 'none';
    }
  });
});
