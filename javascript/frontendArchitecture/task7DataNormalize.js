// @ts-nocheck
/* eslint-disable no-param-reassign */
/*
TODO Application
deleting task or list isnt implemented!

*/
import uniqueId from 'lodash/uniqueId.js';

// BEGIN (write your solution here)
const render = (state, targetContainer) => {

  switch (state.phase) {
    case 'general': {
      const listsContainer = document.querySelector('[data-container="lists"]');
      const ul = document.createElement('ul');
      const li = document.createElement('li');
      li.innerHTML = `<b>General</b>`;
      ul.append(li);
      listsContainer.append(ul);
      
      const generalList = { id: 1, name: 'General', isActive: true }
      state.lists.push(generalList);
      addListener(state, li);
      break;
    }
    case 'new-list-form': {
      const ul = targetContainer.querySelector('ul');
      const li = document.createElement('li');
      li.innerHTML = `<a href="#${state.value.toLowerCase()}">${state.value}</a>`;
      ul.append(li);
      const newList = { id: state.lists.length + 1, name: state.value, isActive: false, }
      state.lists.push(newList);

      addListener(state, li)
      break;
    }
    case 'new-task-form': { // add logic that check current active list to add task
      const newTask = { id: state.tasks.length + 1, listId: state.activeListId, name: state.value };
      if (!targetContainer.querySelector('ul')) {
        const ul = document.createElement('ul');
        const li = document.createElement('li');
        li.textContent = state.value;
        ul.append(li);
        targetContainer.append(ul);
        state.tasks.push(newTask);
        break;
      }

      const ul = targetContainer.querySelector('ul');
      const li = document.createElement('li');
      li.textContent = state.value;
      ul.append(li);

      state.tasks.push(newTask);
      console.log('least.. task added', state.tasks);
      break;
    }
    default:
      throw new Error(`Unknown mode: ${state.mode}`);
  }
  function addListener(state, li) {
    li?.addEventListener('click', (e) => {
      const oldActiveElementId = state.activeListId;
      const choosenName = e.target.textContent; // 0: {id: 1, name: 'general', isActive: true}
      const choosenList = state.lists.filter((list) => list.name === choosenName);
      state.activeListId = choosenList[0].id;
      renderListClick(state, choosenList, oldActiveElementId);
    });
  };

  const renderListClick = (state, choosenList, oldActiveElementId) => {
    const tasksContainer = document.querySelector('[data-container="tasks"]');
    const listsContainer = document.querySelector('[data-container="lists"]');
    console.log(listsContainer.firstChild.children);
    const oldActiveList = state.lists[oldActiveElementId - 1];

    listsContainer.firstChild.children[oldActiveElementId - 1]
      .innerHTML = `<li><a href="#${oldActiveList.name}">${oldActiveList.name}</a></li>`;
    listsContainer.firstChild.children[state.activeListId - 1]
      .innerHTML = `<li><b>${choosenList[0].name}</b></li>`;

    const filteredTasks = state.tasks.filter((task) => task.listId === state.activeListId);

    tasksContainer.innerHTML = '';
    if (filteredTasks.length !== 0) {
      tasksContainer.append(document.createElement('ul'));
      filteredTasks.map((task) => {
        const li = document.createElement('li');
        li.textContent = task.name;
        tasksContainer.firstChild.append(li);
      });
    }
  };
};

export default () => {
  const state = {
    phase: 'general',
    value: '',
    activeListId: 1,
    lists: [],
    tasks: [],
  };

  render(state);

  const forms = document.querySelectorAll('.form-inline');
  forms.forEach((form) => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const formData = new FormData(e.target);
      const name = formData.get('name');
      const formName = form.dataset.container;
      const dataContainer = e.target.nextElementSibling;

      state.phase = formName;
      state.value = name;
      form.reset();
      render(state, dataContainer);
    });
  });
}
// END

// // BEGIN
// const renderTasks = (state, elements) => {
//   elements.tasksContainer.innerHTML = '';

//   const filteredTasks = state.tasks.filter(({ listId }) => listId === state.activeListId);

//   if (filteredTasks.length === 0) {
//     return;
//   }

//   const ulForTasks = document.createElement('ul');

//   filteredTasks.forEach(({ name }) => {
//     const li = document.createElement('li');
//     li.textContent = name;
//     ulForTasks.append(li);
//   });

//   elements.tasksContainer.append(ulForTasks);
// };

// const renderLists = (state, elements) => {
//   elements.listsContainer.innerHTML = '';
//   const ulForLists = document.createElement('ul');

//   state.lists.forEach(({ id, name }) => {
//     const li = document.createElement('li');
//     let channelNameElement;

//     if (id === state.activeListId) {
//       channelNameElement = document.createElement('b');
//       channelNameElement.textContent = name;
//     } else {
//       channelNameElement = document.createElement('a');
//       channelNameElement.setAttribute('href', `#${name.toLowerCase()}`);
//       channelNameElement.textContent = name;
//       channelNameElement.addEventListener('click', (e) => {
//         e.preventDefault();
//         state.activeListId = id;
//         renderLists(state, elements);
//         renderTasks(state, elements);
//       });
//     }

//     li.append(channelNameElement);
//     ulForLists.append(li);
//   });

//   elements.listsContainer.append(ulForLists);
// };

// export default () => {
//   const defaultChannelId = uniqueId();
//   const state = {
//     activeListId: defaultChannelId,
//     lists: [{ id: defaultChannelId, name: 'General' }],
//     tasks: [],
//   };

//   const elements = {
//     listsContainer: document.querySelector('[data-container="lists"]'),
//     tasksContainer: document.querySelector('[data-container="tasks"]'),
//   };

//   const newListForm = document.querySelector('[data-container="new-list-form"]');
//   const newTaskForm = document.querySelector('[data-container="new-task-form"]');

//   newListForm.addEventListener('submit', (e) => {
//     e.preventDefault();
//     const form = e.target;
//     const formData = new FormData(form);
//     const listName = formData.get('name');
//     const list = { id: uniqueId(), name: listName.trim() };
//     form.reset();
//     form.focus();
//     state.lists.push(list);
//     renderLists(state, elements);
//   });

//   newTaskForm.addEventListener('submit', (e) => {
//     e.preventDefault();
//     const form = e.target;
//     const formData = new FormData(form);
//     const taskName = formData.get('name');
//     const task = { id: uniqueId(), name: taskName.trim(), listId: state.activeListId };
//     form.reset();
//     form.focus();
//     state.tasks.push(task);
//     renderTasks(state, elements);
//   });

//   renderLists(state, elements);
//   renderTasks(state, elements);
// };
// // END