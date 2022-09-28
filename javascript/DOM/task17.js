  // BEGIN
  const autocompleteElements = document.querySelectorAll('input[data-autocomplete]');
  autocompleteElements.forEach((el) => {
    const route = el.dataset.autocomplete;
    const dataAutocompleteName = el.dataset.autocompleteName;
    el.addEventListener('input', async (e) => {
      const list = document.querySelector(`ul[data-autocomplete-name="${dataAutocompleteName}"]`);
      const url = new URL(route, window.location.origin);
      url.searchParams.append('search', e.target.value);
      const response = await fetch(url);
      const items = await response.json();
      const options = items.length === 0 ? ['Nothing'] : items;
      const listHTML = options.map((item) => `<li>${item}</li>`).join('\n');
      list.innerHTML = listHTML;
    });
  });
  // END

  /**
  // @ts-ignore

import 'whatwg-fetch';

export default () => {
  // BEGIN (write your solution here)
  const inputs = document.querySelectorAll('input');
  inputs.forEach((input) => {
    input.addEventListener('input', (e) => {
      const autocompleteName = input.getAttribute('data-autocomplete-name')
      const autocompleteJSON = input.getAttribute('data-autocomplete')
      const url = new URL(`${window.location.origin}${autocompleteJSON}`)
      url.searchParams.append('search', e.target.value);
      console.log(url.href)
      fetch(url)
        .then((response) => {
          console.log(`- response status: ${response.status}`)
          return response.json();
        })
        .then((data) => {
          console.log('- then: data', data)
          if (data.length !== 0) { 
            const ul = document.querySelector(`ul[data-autocomplete-name="${autocompleteName}"]`)
            ul.innerHTML = '';
            data.map((el) => {
              const li = document.createElement('li')
              li.textContent = el;
              ul.append(li);
            })
            console.log(ul.innerHTML)
          }
          
        })
        .catch(console.error);
    })
  })
  // END
};

  */