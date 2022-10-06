// @ts-nocheck
/* eslint-disable react/prefer-stateless-function */

import React from 'react';

// BEGIN (write your solution here)
export default class Progress extends React.Component {
  render() {
    const { percentage } = this.props;
    const widthPercent = `${percentage}%`;
    return (
      <div className="progress">
        <div className="progress-bar" role="progressbar" aria-valuenow={percentage} aria-valuemin="0" aria-valuemax="100" aria-label="progressbar" style={{ width: widthPercent}}></div>
      </div>
    )
  }
}
// END
