// @ts-nocheck

// BEGIN (write your solution here) (write your solution here)
const render = (state, result) => {
  const ulElement = document.createElement('ul');

  const filtered = state.products.filter((laptop) => 
    Object.entries(state.filters).every(([filterName, filterValue]) => {
      if (!filterValue) return true;
      console.log(`fname: ${filterName}, fvalue: ${filterValue}`);
      if (filterName.split('_')[0] === 'frequency') {
        return filterName.split('_')[1] === 'gte'
          ? laptop[filterName.split('_')[0]] >= filterValue
          : laptop[filterName.split('_')[0]] <= filterValue;
      }

      return typeof laptop[filterName] === 'number' && typeof filterValue === 'string' //
        ? parseInt(filterValue, 10) === laptop[filterName]
        : filterValue === laptop[filterName];
    }))
  console.log(filtered, ' :Laptopts');

  const laptops = filtered.map((laptop) => {
    const liElement = document.createElement('li');
    liElement.textContent = laptop.model;
    return liElement; 
  });

  ulElement.append(...laptops)
  result.replaceChildren(ulElement);
  if (laptops.length === 0) {
    result.innerHTML = '';
  }
};

const inputsConfig = {
  processor_eq: 'change',
  memory_eq: 'change',
  frequency_lte: 'input',
  frequency_gte: 'input',
};

const app = (laptops) => {
  const state = {
    products: laptops,
    filters: {}
  };

  const resultContainer = document.querySelector('.result');
  render(state, resultContainer);

  Object.entries(inputsConfig).forEach(([inputName, eventName]) => {
    const input = document.querySelector(`[name="${inputName}"]`);
    input.addEventListener(eventName, ({ target }) => {
      const value = target?.value;
      const name = (target?.name.split('_')[0] === 'frequency')
       ? target.name
       : target.name.split('_')[0];
      state.filters[name] = value;
      render(state, resultContainer);
    });
  });
};

export default app;
// END

// TEACHERS SOLUTION
const predicates = {
  eq: (value) => (el) => String(el) === String(value),
  gte: (value) => (el) => (el) >= Number(value),
  lte: (value) => (el) => (el) <= Number(value),
};

const inputsConfig = {
  processor_eq: 'change',
  memory_eq: 'change',
  frequency_lte: 'input',
  frequency_gte: 'input',
};

const filterItems = (items, query) => {
  // Остаются только изменённые пользователем фильтры
  const activeFilters = Object.entries(query).filter(([, filterValue]) => filterValue !== null);
  // Фильтрация товаров: каждый товар должен удовлетворять каждому фильтру из списка
  return items.filter((item) => activeFilters.every(([filterName, filterValue]) => {
    const [propertyName, predicate] = filterName.split('_');
    const match = predicates[predicate];
    const itemProperty = item[propertyName];
    return match(filterValue)(itemProperty);
  }));
};

const render = (state) => {
  const resultElement = document.querySelector('.result');
  const filtered = filterItems(state.laptops, state.filter);

  if (filtered.length === 0) {
    resultElement.innerHTML = '';
    return;
  }
  // элементы для вставки можно как создать через интерфейс document.createElement,
  // так и собрать строку
  const html = `<ul>${filtered.map((item) => `<li>${item.model}</li>`).join('')}</ul>`;
  resultElement.innerHTML = html;
};

export default (laptops) => {
  // state на уровне приложения
  const state = {
    laptops,
    filter: {
      processor_eq: null,
      memory_eq: null,
      frequency_lte: null,
      frequency_gte: null,
    },
  };
  // На каждое поле ввода вешается обработчик, изменяющий стейт и вызывающий отрисовку
  Object.entries(inputsConfig).forEach(([inputName, eventName]) => {
    const input = document.querySelector(`[name="${inputName}"]`);
    input.addEventListener(eventName, ({ target }) => {
      state.filter[inputName] = target.value === '' ? null : target.value;
      render(state);
    });
  });
  render(state);
};