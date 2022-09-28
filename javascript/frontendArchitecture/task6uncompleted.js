// @ts-check
/* eslint-disable no-param-reassign */

// BEGIN (write your solution here) (write your solution here)
const render = (state, input, usersValue = null) => {
  //console.log('INPUT\n', input, '\n RENDER STATE:\n', state);
  const container = document.querySelector('.container');
  if (state.editingProcess.state === 'form') {
    //console.log(`1! OLd CONTENT`, input.textContent)
    const formType = input.dataset.editableTarget; // name or email
    const form = createForm(formType, input.textContent);
    container.replaceChild(form, input);

    const inputField = form.querySelector('input[type="text"]');
    const saveButton = form.querySelector('input[type="submit"]');

    inputField.focus();
    saveButton.addEventListener('click', (e) => {
      e.preventDefault();
      state.editingProcess.state = 'text';
      render(state, form, inputField.value);
    });
  }
  if (state.editingProcess.state === 'text') {
    const inputName = input.querySelector('input[name]')
    const contentType = inputName.getAttribute('name');
    const newHtml = createDiv(state, contentType, usersValue);
    console.log(container, contentType, 'OLD', input, input.querySelector('input[name]'));
    container.replaceChild(newHtml, input);
    app();
  }
};

const createDiv = (state, contentType, usersValue) => {
  const div = document.createElement('div');
  div.dataset.editableTarget = contentType;
  div.innerHTML = state.initialValues[contentType];

  console.log('2!: Initial:', state.initialValues[contentType], '\n users input:', usersValue);
  if (usersValue.length === 0) {
    console.log('!Empty input', contentType)
    div.innerHTML = `${state.initialValues.name}`;
  } else {
    div.textContent = usersValue;
  }
  //usersValue = '' ? div.textContent = state.initialValues[contentType] : div.textContent = usersValue;
  return div;
}

const createForm = (contentType, oldContent) => {
  const form = document.createElement('form');
  const text = document.createElement('input');
  const submit = document.createElement('input');
  text.setAttribute('type', 'text');
  text.setAttribute('name', contentType);
  text.setAttribute('value', oldContent.trim());
  submit.setAttribute('type', 'submit');
  submit.setAttribute('value', 'save');
  form.append(text, submit);
  return form;
};

const app = () => {
  const name = document.querySelector('[data-editable-target="name"]');
  const email = document.querySelector('[data-editable-target="email"]');
  const inputs = [name, email];

  const state = {
    editingProcess: {
      state: 'text',
    },
    initialValues: {
      name: name.innerHTML,
      email: email.innerHTML,
    },
  };

  inputs.forEach((input) =>
    input.addEventListener('click', () => {
      state.editingProcess.state = 'form';
      render(state, input);
    })
  );
};

export default app;
// END
// not working 
// form should be inside div name\email that already exist