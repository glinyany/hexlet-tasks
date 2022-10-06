// @ts-nocheck
// @ts-ignore

import { uniqueId } from 'lodash';
import React from 'react';
import Item from './Item.jsx';

// BEGIN (write your solution here)
export default class TodoBox extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [],
      value: '',
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { items } = this.state;
    this.setState({ items: [...items, { text: this.state.value, id: uniqueId('task_') }], value: '', })
  }

  handleChange = (e) => {
    e.preventDefault();
    this.setState({ value: e.target.value })
  }

  handleRemove = (value) => (e) => {
    e.preventDefault();
    const newItems = this.state.items.filter(item => item !== value);
    this.setState({ items: newItems });
  };

  render() {
    const { items } = this.state;
    return (
      <div>
        <div className="mb-3">
          <form onSubmit={this.handleSubmit} className="d-flex">
            <div className="me-3">
              <input onChange={this.handleChange} value={this.state.value}
              type="text" required="" className="form-control" placeholder="I am going..."/>
            </div>
            <button type="submit" className="btn btn-primary">add</button>
          </form>
        </div>
        {items.map(item => <Item key={uniqueId()} onRemove={this.handleRemove} value={item} />)}
      </div>
    )
  }
}
// END
