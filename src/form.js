/* eslint-disable no-param-reassign */
import domElements from './references';
import { checkName } from './check_name';
import { checkEmail } from './check_email';

const { form } = domElements;
const { name, email } = domElements;

const checkForm = () => {
  checkName();
  checkEmail();

  form.addEventListener('submit', (e) => {
    if (name.validity.valid && email.validity.valid) {
        alert("Successful submission");
    } else {
        e.preventDefault();
    }
  });
};

// eslint-disable-next-line import/prefer-default-export
export { checkForm };
