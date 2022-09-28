// @ts-nocheck
/**
Реализуйте логику переключения табов для компонента list-group бутстрапа, используя архитектуру MVC.
Код должен работать даже в том случае, если на странице есть несколько компонентов list-group.
Пример работы: https://getbootstrap.com/docs/4.5/components/list-group/#javascript-behavior
*/
import onChange from 'on-change';

// BEGIN (write your solution here)
const render = (listGroup, activeId, previousActiveId) => {
  const newActiveElement = listGroup.querySelector(`#${activeId}`);
  const previousActiveElement = listGroup.querySelector(`#${previousActiveId}`);
  newActiveElement.classList.add('active');
  previousActiveElement.classList.remove('active');

  const row = listGroup.parentNode.parentNode;
  const newActiveContent = row.querySelector(`[aria-labelledby="${activeId}"]`);
  const previousActiveContent = row.querySelector(`[aria-labelledby="${previousActiveId}"]`);
  newActiveContent.classList.add('active', 'show');
  previousActiveContent.classList.remove('active', 'show');
};

export default () => {
  const listGroups = document.querySelectorAll('.list-group');
  listGroups.forEach((listGroupContainer) => { 
    // model
    const state = {
      activeId: null,
    }; 

    const items = listGroupContainer.querySelectorAll('.list-group-item');

    const activeItem = listGroupContainer.querySelector('.active');
    state.activeId = activeItem.getAttribute('id');

    // view
    const watchedState = onChange(state, (path, value, previousValue) => {
      render(listGroupContainer, value, previousValue);
    });

    items.forEach((item) => {
      item.addEventListener('click', (e) => {
        watchedState.activeId = e.target.getAttribute('id');
      })
    })
  })
}
// END
