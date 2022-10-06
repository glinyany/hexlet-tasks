// @ts-check
/* eslint-disable react/prefer-stateless-function */

// @ts-ignore
import cn from 'classnames';
import React from 'react';

// BEGIN (write your solution here)

export default class Alert extends React.Component {
  render() {
    const { text, type } = this.props;

    const divClass = cn('alert', `alert-${type}`);

    return (
      <div className={divClass} role='alert'>{text}</div>
    )
  }
}

// END
