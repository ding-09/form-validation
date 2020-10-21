import domElements from './references';

const { name } = domElements;
const { nameError } = domElements;

const checkName = () => {
  const displayErrorMsg = () => {
    if (name.validity.valueMissing) {
      nameError.textContent = 'Please enter your name';
    } else if (name.validity.tooLong) {
      nameError.textContent = 'Please do not exceed 25 characters';
    }
    nameError.className = "error active";
  };

  name.addEventListener('input', () => {
    if (name.validity.valid) {
      nameError.textContent = '';
      nameError.className = 'error';
    } else {
      displayErrorMsg();
    }
  });
};

// eslint-disable-next-line import/prefer-default-export
export { checkName };
