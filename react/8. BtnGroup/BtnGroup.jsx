// @ts-check

// @ts-ignore
import cn from 'classnames';
import React from 'react';

// BEGIN (write your solution here)
export default class BtnGroup extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      activeLeft: false,
      activeRight: false,
    };
  }

  onChangeClassLeft = () => {
    this.setState(({ activeLeft }) => ({
      activeLeft: true,
      activeRight: false 
    }));


  };

  onChangeClassRight = () => {
    this.setState(({ activeRight }) => ({
      activeRight: true,
      activeLeft: false
    }));
  };

  render() {
    const buttonClassLeft = cn(
      'btn', 'btn-secondary', 'left',
      { 'active': this.state.activeLeft }
      );
    const buttonClassRight = cn([
      'btn', 'btn-secondary', 'right', 
      { 'active': this.state.activeRight }


    ]);
    return (
      <div className="btn-group" role="group">
        <button type="button" className={buttonClassLeft} onClick={this.onChangeClassLeft}>Left</button>
        <button type="button" className={buttonClassRight} onClick={this.onChangeClassRight}>Right</button>
      </div>)
  }
}
// END

