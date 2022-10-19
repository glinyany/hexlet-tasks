/* eslint-disable no-console, no-unused-vars */
const logger = (store) => (next) => (action) => {
  console.group(action.type);
  console.info('dispatching', action);
  const result = next(action);
  console.log('next state', store.getState());
  console.groupEnd();
  return result;
};

const addDate = (store) => (next) => (action) => {
  // BEGIN (write your solution here)
  console.group(action.type);
  if (action.type === 'TASK_ADD') {
    console.info('! ADD: dispatching', action);
    const today = new Date();
    const formatedDate = today.toLocaleDateString('ru-RU');
    action.payload.task.text = `Задача на ${formatedDate}: ${action.payload.task.text}`;
    const result = next(action);
    console.groupEnd();
    return result;
  };

  console.info('# UPDATE: dispatching', action);
  const result = next(action);
  console.log('next state', store.getState());
  console.groupEnd();
  return result;
  // END
};

export default { logger, addDate };
