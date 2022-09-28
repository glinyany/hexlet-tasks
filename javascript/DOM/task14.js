// BEGIN Teachers solution
const render = (element, data) => {
  const div = document.createElement('div');
  const { email, name, comment } = data;
  div.innerHTML = `
    <p>Feedback has been sent</p>
    <div>Email: ${htmlEscape(email)}</div>
    <div>Name: ${htmlEscape(name)}</div>
    <div>Comment: ${htmlEscape(comment)}</div>
  `;
  element.replaceWith(div);
};

export default () => {
  const formElement = document.querySelector('.feedback-form');
  const handle = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    render(formElement, Object.fromEntries(formData));
  };
  formElement.addEventListener('submit', handle);
};
// END

// BEGIN (write your solution here) mine solution
const minesolution = () => {
  const form = document.querySelector('.feedback-form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    // Данные формы извлекаются из DOM автоматически 
    // На вход передается элемент формы взятый из события
    const formData = new FormData(e.target);
    const email = formData.get('email');
    const name = formData.get('name');
    const comment = formData.get('comment');

    const div = document.createElement('div');
    const p = document.createElement('p');
    const divEmail = document.createElement('div');
    const divName = document.createElement('div');
    const divComment = document.createElement('div');

    p.innerHTML = `Feedback has been sent`;
    divEmail.innerHTML = `Email: ${email}`;
    divName.innerHTML = `Name: ${name}`;
    divComment.textContent = `Comment: ${comment}`;

    div.append(p, divEmail, divName, divComment);
    console.log(div.outerHTML)
    const container = document.querySelector('.container');
    container.replaceWith(div)
  });
};

// END