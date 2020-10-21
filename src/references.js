// grab all dom element objects and export them

const domElements = (() => {
  // get form
  const form = document.getElementById('form');

  // name input and error span
  const name = document.getElementById('name');
  const nameError = document.querySelector(`#${name.id} + span.error`);

  // email and error span
  const email = document.getElementById('email');
  const emailError = document.querySelector(`#${email.id} + span.error`);

  // passwords
  const pwd = document.getElementById('pwd');
  const pwd2 = document.getElementById('pwd2');

  // pwd error span
  const pwdError = document.querySelector(`#${pwd.id} + span.error`);
  const pwdError2 = document.querySelector(`#${pwd2.id} + span.error`);

  // inputs
  const inputs = Array.from(document.querySelectorAll('input:not(#submit)'));

  // errors
  const errors = Array.from(document.querySelectorAll('span'));
  return {
    form,
    name,
    email,
    pwd,
    pwd2,
    nameError,
    emailError,
    pwdError,
    pwdError2,
    inputs,
    errors,
  };
})();

export { domElements as default };
