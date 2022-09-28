// @ts-nocheck
/* eslint-disable no-param-reassign, no-console  */

import keyBy from 'lodash/keyBy.js';
import has from 'lodash/has.js';
import isEmpty from 'lodash/isEmpty.js';
import * as yup from 'yup';
import onChange from 'on-change';
import axios from 'axios';

// urls нельзя хардкодить: https://ru.hexlet.io/blog/posts/izbavlyaytes-ot-strok
const routes = {
  usersPath: () => '/users',
};

const schema = yup.object().shape({
  name: yup.string().trim().required(),
  email: yup.string().required().email(),
  password: yup.string().required().min(6),
  passwordConfirmation: yup.string()
    .required('password confirmation is a required field')
    .oneOf(
      [yup.ref('password'), null],
      'password confirmation does not match to password',
    ),
});

// Этот объект можно использовать для того, чтобы обрабатывать ошибки сети.
// Это необязательное задание, но крайне рекомендуем попрактиковаться.
const errorMessages = {
  network: {
    error: 'Network Problems. Try again.',
  },
};

// Используйте эту функцию для выполнения валидации
// Выведите в консоль её результат, чтобы увидеть, как получить сообщения об ошибках
const validate = (fields) => {
  try {
    schema.validateSync(fields, { abortEarly: false });
    return {};
  } catch (e) {
    return keyBy(e.inner, 'path');
  }
};

// BEGIN (write your solution here)

export default () => {
  const state = {
    registrationForm: {
      //state: 'invalid',
      isValid: false,
      data: {
        name: '',
        email: '',
        password: '',
        passwordConfirmation: '',
      },
      errors: {},
    },
  };

  const form = document.querySelector('form');

  const watchedState = onChange(state, (path, value) => {
    if (path === 'registrationForm.isValid') { // Submit
      const submitBtn = document.querySelector('input[type="submit"]');
      console.log(value, ' VALUE TRUE?');

      if (value === true) {
        console.log('FORM VALID');

        submitBtn.removeAttribute('disabled');
        const formData = state.registrationForm.data;
        form.addEventListener('submit', async (e) => {
          e.preventDefault();
          try {
            await axios.post(routes.usersPath(), formData)
              .then((response) => {
                if (response.status == '200') {
                  console.log('SUCCESS!');
                  const container = document.querySelector('[data-container="sign-up"]');
                  container.innerHTML = `User Created!`;
                }
              });
          } catch (error) {
            console.log(error, ':::');
          };
        });
      } else {
        console.log('FORM ISNT VALID');
        submitBtn.setAttribute('disabled', '');
      }

    } else { // validation handler
      const splitedPath = path.split('.');
      const elementName = splitedPath[splitedPath.length - 1];
      const inputThatValidate = document.querySelector(`input[name="${elementName}"]`);
      console.log('INPUT HERE', state.registrationForm);
      if (state.registrationForm.data.password !== state.registrationForm.data.passwordConfirmation) {
        const passwordConfirmation = form.querySelector('input[name="passwordConfirmation"]');
        passwordConfirmation.classList.add('is-invalid');
      } else {
        const passwordConfirmation = form.querySelector('input[name="passwordConfirmation"]');
        passwordConfirmation.classList.remove('is-invalid');
      }

      if (has(state.registrationForm.errors, elementName)) {
        inputThatValidate.classList.add('is-invalid');
        const div = document.createElement('div');
        div.classList.add('invalid-feedback');
        div.textContent = state.registrationForm.errors[elementName];

        if (inputThatValidate.parentNode.querySelector('.invalid-feedback')) {
          const oldFeedbackMessage = inputThatValidate.parentNode.querySelector('.invalid-feedback');
          inputThatValidate.parentNode.removeChild(oldFeedbackMessage);
          inputThatValidate.parentNode.append(div);
          return;
        }

        inputThatValidate.parentNode.append(div)
        return;
      }

      if (!has(state.registrationForm.errors, elementName)) {
        console.log('PROBLEM:', inputThatValidate, elementName, state, path, value)
        inputThatValidate.classList.remove('is-invalid');
        return;
      }
    }

  });

  const handleInputChange = (e) => {
    watchedState.registrationForm.data[e.target.name] = e.target.value;
    const errors = validate(state.registrationForm.data);
    console.log('Errors is empty?:\n', isEmpty(errors));

    if (isEmpty(errors)) { // all fields validated
      watchedState.registrationForm.isValid = true;
    }

    if (errors[e.target.name]) { // error exist in choosen input
      console.log('::ERROR exist::');
      //console.log('key:', e.target.name, '\nvalue:', errors[e.target.name].message);
      watchedState.registrationForm.errors[e.target.name] = errors[e.target.name].message;
      watchedState.registrationForm.isValid = false;
    } else { // no errors detected in choosen input
      console.log('::NO ERRORS:');
      delete watchedState.registrationForm.errors[e.target.name];
    }
  }

  form.elements.name.addEventListener('input', handleInputChange);
  form.elements.email.addEventListener('input', handleInputChange);
  form.elements.password.addEventListener('input', handleInputChange);
  form.elements.passwordConfirmation.addEventListener('input', handleInputChange);
};
// END







// TEACHERS SOLUTION

// BEGIN
const handleProcessState = (elements, processState) => {
  switch (processState) {
    case 'sent':
      elements.container.innerHTML = 'User Created!';
      break;

    case 'error':
      elements.submitButton.disabled = false;
      break;

    case 'sending':
      elements.submitButton.disabled = true;
      break;

    case 'filling':
      elements.submitButton.disabled = false;
      break;

    default:
      // https://ru.hexlet.io/blog/posts/sovershennyy-kod-defolty-v-svitchah
      throw new Error(`Unknown process state: ${processState}`);
  }
};

const handleProcessError = () => {
  // вывести сообщение о сетевой ошибке
};

const renderErrors = (elements, errors, prevErrors) => {
  Object.entries(elements.fields).forEach(([fieldName, fieldElement]) => {
    const error = errors[fieldName];
    // правильный путь - проверять модель, а не DOM. Модель - единый источник правды.
    const fieldHadError = has(prevErrors, fieldName);
    const fieldHasError = has(errors, fieldName);
    if (!fieldHadError && !fieldHasError) {
      return;
    }

    if (fieldHadError && !fieldHasError) {
      fieldElement.classList.remove('is-invalid');
      fieldElement.nextElementSibling.remove();
      return;
    }

    if (fieldHadError && fieldHasError) {
      const feedbackElement = fieldElement.nextElementSibling;
      feedbackElement.textContent = error.message;
      return;
    }

    fieldElement.classList.add('is-invalid');
    const feedbackElement = document.createElement('div');
    feedbackElement.classList.add('invalid-feedback');
    feedbackElement.textContent = error.message;
    fieldElement.after(feedbackElement);
  });
};
// Представление не меняет модель.
// По сути, в представлении происходит отображение модели на страницу
// Для оптимизации рендер происходит точечно в зависимости от того, какая часть модели изменилась
// Функция возвращает функцию. Подробнее: https://ru.hexlet.io/qna/javascript/questions/chto-oznachaet-funktsiya-vida-const-render-a-b
const render = (elements) => (path, value, prevValue) => {
  switch (path) {
    case 'form.processState':
      handleProcessState(elements, value);
      break;

    case 'form.processError':
      handleProcessError();
      break;

    case 'form.valid':
      elements.submitButton.disabled = !value;
      break;

    case 'form.errors':
      renderErrors(elements, value, prevValue);
      break;

    default:
      break;
  }
};

export default () => {
  const elements = {
    container: document.querySelector('[data-container="sign-up"]'),
    form: document.querySelector('[data-form="sign-up"]'),
    fields: {
      name: document.getElementById('sign-up-name'),
      email: document.getElementById('sign-up-email'),
      password: document.getElementById('sign-up-password'),
      passwordConfirmation: document.getElementById('sign-up-password-confirmation'),
    },
    submitButton: document.querySelector('input[type="submit"]'),
  };
  // Модель ничего не знает о контроллерах и о представлении. В ней не хранятся DOM-элементы.
  const state = onChange({
    form: {
      valid: true,
      processState: 'filling',
      processError: null,
      errors: {},
      fields: {
        name: '',
        email: '',
        password: '',
        passwordConfirmation: '',
      },
    },
  }, render(elements));
  // Контроллеры меняют модель, тем самым вызывая рендеринг.
  // Контроллеры не должны менять DOM напрямую, минуя представление.
  Object.entries(elements.fields).forEach(([fieldName, fieldElement]) => {
    fieldElement.addEventListener('input', (e) => {
      const { value } = e.target;
      state.form.fields[fieldName] = value;
      const errors = validate(state.form.fields);
      state.form.errors = errors;
      state.form.valid = isEmpty(errors);
    });
  });

  elements.form.addEventListener('submit', async (e) => {
    e.preventDefault();

    state.form.processState = 'sending';
    state.form.processError = null;

    try {
      const data = {
        name: state.form.fields.name,
        email: state.form.fields.email,
        password: state.form.fields.password,
      };
      await axios.post(routes.usersPath(), data);
      state.form.processState = 'sent';
    } catch (err) {
      // в реальных приложениях необходимо помнить об обработке ошибок сети
      state.form.processState = 'error';
      state.form.processError = errorMessages.network.error;
      throw err;
    }
  });
};
// END