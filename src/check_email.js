import domElements from './references';

const { email } = domElements;
const { emailError } = domElements;


const checkEmail = () => {

  const displayErrorMsg = () => {
    if (email.validity.valueMissing) {
      emailError.textContent = 'Please enter your e-mail';
    } else if (email.validity.typeMismatch) {
      emailError.textContent = 'Please use a correct e-mail format';
    }
    emailError.className = 'error active';
  };

  email.addEventListener('input', () => {
    if (email.validity.valid) {
      emailError.textContent = '';
      emailError.className = 'error';
    } else {
      displayErrorMsg();
    }
  });
};

// eslint-disable-next-line import/prefer-default-export
export { checkEmail, emailError };
