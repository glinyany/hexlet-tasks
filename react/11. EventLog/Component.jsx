/* eslint-disable jsx-a11y/anchor-is-valid */

import get from 'lodash/get';
import uniqueId from 'lodash/uniqueId';
import React from 'react';

// BEGIN (write your solution here)
export default class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'idle',
      items: [],
    }
  }

  handleClick = (e) => {
    const { items } = this.state;
    console.log('Clicked on: ', e.target.textContent, '\nItems length:', items.length);
    const lastIndexItem = items[items.length - 1];
    let index = items.length;
    let value;
    if (e.target.textContent === '+') {
      value = items.length === 0 ? 1 : lastIndexItem.value + 1;
    } else {
      value = items.length === 0 ? -1 : lastIndexItem.value - 1;
    }
    switch (e.target.textContent) {
      case '+':
        const newItem = { value, index, id: uniqueId('buttonId_') };
        this.setState({ items: [...items, newItem], status: 'filling' });
        break;
      case '-':
        const newNegativeItem = { value, index, id: uniqueId('buttonId_') };
        this.setState({ items: [...items, newNegativeItem] , status: 'filling' })
        break;
    }
  }

  renderIdle = () => {
    return (
      <div>
        <div className="btn-group font-monospace" role="group">
          <button onClick={this.handleClick} type="button" className="btn btn-outline-success">+</button>
          <button onClick={this.handleClick} type="button" className="btn btn-outline-danger">-</button>
        </div>
      </div>)
  }

  // items.length === 0 ? return status = 'idle'
  renderFilled = () => {
    const renderLog = () => {
      const { items } = this.state;
      if (items.length === 0) {
        return null;
      }
      return (
        <div className="list-group">
          {this.state.items.map((item) => this.renderItem(item)).reverse()}
        </div>
      )
    }
    return (
      <div>
        <div className="btn-group font-monospace" role="group">
          <button onClick={this.handleClick} type="button" className="btn btn-outline-success">+</button>
          <button onClick={this.handleClick} type="button" className="btn btn-outline-danger">-</button>
        </div>
        {renderLog()}
      </div>)
  }

  render() {
    const { status } = this.state;
    console.log('# - Status is: ', status, ' - state:', this.state)

    switch (status) {
      case 'idle':
        return this.renderIdle();
      case 'filling':
        return this.renderFilled();
    }
  }

  removeItem = (clickeditem) => (e) => {
    e.preventDefault();
    const newItems = this.state.items.filter((item) => item.id !== clickeditem.id);
    this.setState({ items: newItems });
  };

  renderItem = (item) => {
    const { value, id } = item;
    console.log('Rendering item:', value, ', ID:', id, item)
    return <button type="button" key={id} onClick={this.removeItem(item)} className="list-group-item list-group-item-action">{value}</button>
  }
}
// END
