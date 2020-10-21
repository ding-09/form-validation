/* eslint-disable no-param-reassign */
import domElements from './references';
import { checkName } from './check_name';
import { checkEmail } from './check_email';
import { checkPassword } from './check_pwd';
import { confirmPassword } from './confirm_pwd';

const { form } = domElements;
const { name, email, pwd, pwd2 } = domElements;

const checkForm = () => {
  checkName();
  checkEmail();
  checkPassword();
  confirmPassword();

  form.addEventListener('submit', (e) => {
    if (
      name.validity.valid &&
      email.validity.valid &&
      pwd.validity.valid &&
      pwd2.validity.valid
    ) {
      alert('Good job!');
    } else {
      alert('NO!');
      e.preventDefault();
    }
  });
};

// eslint-disable-next-line import/prefer-default-export
export { checkForm };
