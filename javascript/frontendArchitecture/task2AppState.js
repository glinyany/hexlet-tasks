
// BEGIN (write your solution here)
export const mySoluiton = () => {
  function setFocus() {
    document.querySelector('.form-control').focus();
  }
  setFocus();
  let valueState = 0;
  const result = document.getElementById('result');

  const form = document.querySelector('.form-inline');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const inputValue = formData.get('number');
    valueState += parseInt(inputValue)
    result.textContent = valueState;

    const resetBtn = form.querySelector('.btn-outline-primary');
    resetBtn.addEventListener('click', () => {
      valueState = 0;
      result.textContent = valueState;
      setFocus();
    });

    form.reset();
    setFocus();
  })
};
// END

// BEGIN
// повторяющийся код удобно вынести в отдельную функцию
const render = (state, formEl, inputEl, resultEl) => {
  formEl.reset();
  inputEl.focus();
  resultEl.textContent = state;
};

export const teachersSolution = () => {
  // состояние относится к уровню приложения
  let state = 0;

  const formEl = document.querySelector('form');
  const inputEl = document.querySelector('input');
  const resetEl = document.querySelector('button');
  const resultEl = document.querySelector('#result');

  formEl.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    state += parseInt(data.get('number'), 10);
    render(state, formEl, inputEl, resultEl);
  });

  resetEl.addEventListener('click', () => {
    state = 0;
    render(state, formEl, inputEl, resultEl);
  });

  inputEl.focus();
};
// END