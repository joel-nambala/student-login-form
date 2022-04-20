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

const errorMsg = document.querySelector('.error-msg');

// Add an event listener to open the sign in modal button
signInModal.addEventListener('click', function () {
  // Some code
  signIn.classList.toggle('sign-in__modal');
  signIn.style.display = 'block';
  console.log('Hello');
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
    Date.value === '' &&
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
      studentPassword: password.value,
    };

    user.push(studentsList);
    console.log(user);
  }
});
