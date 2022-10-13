import React from 'react';

// BEGIN (write your solution here)
export default class Item extends React.Component {

  render() {
    const { value, onClick } = this.props;
    const { id, text, state } = value;
    console.log('# INSIDE ITEM:', value)
    return (
      <div className="row">
        <div className="col-1">{id}</div>
        <div className="col">
          {
            state === 'active' ?
              <a onClick={onClick(id)} href="#" className="todo-task">{text}</a>
              : <s><a onClick={onClick(id)} href="#" className="todo-task">{text}</a></s>
          }
        </div>
      </div>
    );
  };
};
// END
