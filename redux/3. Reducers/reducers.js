import _ from 'lodash';
import { combineReducers } from 'redux';

const comments = (state = {}, action) => {
  // BEGIN (write your solution here)
  switch (action.type) {
    case 'TASK_COMMENT_ADD': {
      const { comment } = action.payload;
      console.log(`TASK_COMMENT_ADD:`, comment, '\nState:', state);
      return { ...state, [comment.id]: comment };
    }
    case 'TASK_COMMENT_REMOVE': {
      const { id } = action.payload;
      console.log(`Task_COMMENT_REMOVE by id:`, id, '\nState:', state);
      return _.omit(state, id);
    }
    case 'TASK_REMOVE': {
      const { id } = action.payload;
      return _.omitBy(state, (comment) => comment.taskId === id);
    }
    default: 
      return state;
  }
  // END
};

const tasks = (state = {}, action) => {
  // BEGIN (write your solution here)
  switch (action.type) {
    case 'TASK_ADD':
      const { task } = action.payload;
      console.log(`Task ADD:`, task, '\nState:', state);
      return { ...state, [task.id]: task };
    case 'TASK_REMOVE':
      const { id } = action.payload;
      console.log(`Task REMOVE by id:`, id, '\nState:', state);
      return _.omit(state, id);
    default:
      return state;
  }
  // END
};

export default combineReducers({
  comments,
  tasks,
});
