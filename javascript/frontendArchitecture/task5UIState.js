/* eslint-disable no-param-reassign */
// @ts-nocheck

// BEGIN (write your solution here) (write your solution here)
const render = (state, container) => {
  const oldDiv = container.querySelector('div');
  const newDiv = document.createElement('div');
  newDiv.textContent = state.active[0].description;
  console.log(`Render State: ${state.active}`, 'OLD:', oldDiv, 'NEW:', newDiv);

  function falseState() {
    container.removeChild(oldDiv);
    console.log('Con', container, 'app', newDiv)
    container.append(newDiv);
  }

  if (!container.querySelector('div')) {
    container.append(newDiv);
  } else {
    oldDiv.textContent === newDiv.textContent
    ? container.removeChild(oldDiv)
    : falseState();
  }
};

const app = (companies) => {
  const state = {
    companies,
    active: null,
  }
  const container = document.querySelector('.container');
  state.companies.map((company) => {
    const button = document.createElement('button');
    button.classList.add('btn', 'btn-primary');
    button.textContent = company.name;
    container.append(button);
  })

  const buttons = document.querySelectorAll('.btn');
  buttons.forEach((button) => button.addEventListener('click', (e) => {
    const companyName = e.target.textContent;
    const filtered = companies.filter((company) => {
      return company.name === companyName;
    });
    state.active = filtered;
    render(state, container);
  }));
};
export default app;
// END OF MINE SOLUTION

// BEGIN (write your solution here) TEACHERS SOLUITON
const render = (state, container) => {
  container.innerHTML = '';
  const buttons = state.companies.map(({ id, name }) => {
    const button = document.createElement('button');
    button.setAttribute('type', 'button');
    button.classList.add('btn', 'btn-primary');
    button.textContent = name;
    button.addEventListener('click', () => {
      const nextSelectedId = state.uiState.selectedCompanyId === id ? null : id;
      state.uiState.selectedCompanyId = nextSelectedId;
      render(state, container);
    });
    return button;
  });

  container.append(...buttons);

  if (state.uiState.selectedCompanyId === null) {
    return;
  }

  const outputContainer = document.createElement('div');
  const selectedCompany = state.companies.find((c) => c.id === state.uiState.selectedCompanyId);
  outputContainer.textContent = selectedCompany.description;
  container.append(outputContainer);
};

export default (companies) => {
  const state = {
    companies,
    uiState: {
      selectedCompanyId: null,
    },
  };

  const container = document.querySelector('.container');

  render(state, container);
};
// END