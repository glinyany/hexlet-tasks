import cn from 'classnames';
import React, { useState } from 'react';

const BtnGroup = () => {
  // BEGIN (write your solution here)
  const [left, setLeft] = React.useState(false);
  const [right, setRight] = React.useState(false);


  const btnClassesLeft = cn('btn', 'btn-secondary', 'left', { 'active' : left });
  const btnClassesRight = cn('btn', 'btn-secondary', 'right', { 'active': right });

  return (
    <div className="btn-group" role="group">
      <button
          onClick={() => {
          setLeft(true);
          setRight(false);
        }}
        type="button" className={btnClassesLeft}>
        Left
      </button>
      <button
        onClick={() => {
          etRight(true)
          setLeft(false);
        }}
        type="button" className={btnClassesRight}>
        Right
      </button>
    </div>
  )
  // END
};

export default BtnGroup;
