import domElements from './references';

const { pwd } = domElements;
const { pwdError } = domElements;

const checkPassword = () => {
  const displayErrorMsg = () => {
    if (pwd.validity.valueMissing) {
      pwdError.textContent = 'Please enter a password';
    } else if (pwd.validity.tooShort) {
      pwdError.textContent = 'Password must contain at least 6 characters';
    }
    pwdError.className = 'error active';
  };

  pwd.addEventListener('input', () => {
    if (pwd.validity.valid) {
      pwdError.textContent = '';
      pwdError.className = 'error';
    } else {
      displayErrorMsg();
    }
  });
};

// eslint-disable-next-line import/prefer-default-export
export { checkPassword, pwdError };
