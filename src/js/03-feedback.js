

import throttle from "lodash.throttle";

const STORAGE_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');

form.addEventListener('input', throttle(onFormInput, 500));
form.addEventListener('submit', onFormSubmit);

const formData = JSON.parse(localStorage.getItem(STORAGE_KEY));
if (formData) {
  form.email.value = formData.email;
  form.message.value = formData.message;
}

function onFormInput(event) {
  const { name, value } = event.target;
  const formData = {
    ...JSON.parse(localStorage.getItem(STORAGE_KEY)),
    [name]: value,
  };
  const formDataJson = JSON.stringify(formData);
  localStorage.setItem(STORAGE_KEY, formDataJson);
};

function onFormSubmit(event) {
  event.preventDefault();
  const formData = JSON.parse(localStorage.getItem(STORAGE_KEY));
  console.log(formData);
  localStorage.removeItem(STORAGE_KEY);
  form.reset();
};
