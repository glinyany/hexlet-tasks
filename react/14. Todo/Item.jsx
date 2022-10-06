// @ts-check
/* eslint-disable react/prefer-stateless-function */

import React from 'react';

// BEGIN (write your solution here)
export default class Item extends React.Component {

  render() {
    const { value, onRemove } = this.props;
    return (
      <div>
        <div className="row">
          <div className="col-auto">
            <button onClick={onRemove(value)} type="button" className="btn btn-primary btn-sm">-</button>
          </div>
          <div key={value.id} className="col">{value.text}</div>
        </div>
        <hr />
      </div>
    )
  }
}
// END
