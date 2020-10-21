// check if both passwords match
import domElements from './references';

const { pwd } = domElements;
const { pwd2 } = domElements;
const { pwdError2 } = domElements;

const confirmPassword = () => {
  const displayErrorMsg = () => {
    if (pwd2.validity.valueMissing) {
      pwdError2.textContent = 'Please confirm your password';
    } else {
      pwdError2.textContent = pwd2.validationMessage;
    }
    pwdError2.className = 'error active';
  };

  pwd2.addEventListener('input', () => {
    pwd2.setCustomValidity('Passwords do not match');
    if (pwd.value === pwd2.value) {
      pwd2.setCustomValidity('');
      pwdError2.textContent = '';
      pwdError2.className = 'error';
    } else {
      displayErrorMsg();
    }
  });
};

// eslint-disable-next-line import/prefer-default-export
export { confirmPassword, pwdError2 };
