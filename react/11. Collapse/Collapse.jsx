// @ts-check
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/static-property-placement */

import React from 'react';
// @ts-ignore
import cn from 'classnames';

// BEGIN (write your solution here)
export default class Collapse extends React.Component {
  constructor(props) {
    super(props);
    
    const { text, opened } = props;

    this.state = {
      text,
      opened,
    };
  }

  handleClick = (e) => {
    e.preventDefault();

    this.setState(({ opened }) => ({ opened: !opened }));
  }

  render() {
    const { opened, text } = this.state;

    const classNames = cn('collapse' , {
      show: opened
    })


    return (
      <div>
        <p>
          <a 
          onClick={this.handleClick} 
          className="btn btn-primary" 
          data-bs-toggle="collapse" 
          href="#" 
          role="button" 
          aria-expanded={opened}>
          Link with href
          </a>
        </p>
        <div className={classNames}>
          <div className="card card-body">
            {text}
          </div>
        </div>
      </div>
    )
  }
}

Collapse.defaultProps = {
  opened: true,
}
