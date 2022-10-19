import omit from 'lodash/omit';
import redux from 'redux';

const { createStore } = redux;

// BEGIN (write your solution here)
const reducer = (state = {}, action) => {
  switch (action.type) {
    case 'TASK_ADD':
      const { task } = action.payload; // данные
      console.log(`state is: ${state}, task is: ${task}, id: ${task.id}`)
      return {...state, [task.id]: task};
    case 'TASK_REMOVE':
      const { id } = action.payload; // данные

      return omit(state, id);
    default:
      return state;
  }
};

export default (initialState) => {
  return createStore(reducer, initialState)
};
// END
