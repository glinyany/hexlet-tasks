// @ts-nocheck
/* eslint-disable react/static-property-placement */

import cn from 'classnames';
import React from 'react';

// BEGIN (write your solution here)
const Header = (props) => {
  const { toggle } = props;
  return (
    <div className="modal-header">
      <div className="modal-title">Modal title</div>
      <button onClick={toggle} type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
  )
};

const Body = (props) => <div className="modal-body">{props.children}</div>;

const Footer = (props) => <div className="modal-footer">{props.children}</div>;

export default class Modal extends React.Component {
  static Body = Body;
  static Header = Header;
  static Footer = Footer;

  render() {
    const { isOpen } = this.props

    const modalClasses = cn('modal', {
      'fade': isOpen,
      'show': isOpen,
    })

    return (
      <div className={modalClasses} style={{ display: isOpen ? 'block' : 'none' }} role="dialog">
        <div className="modal-dialog">
          <div className="modal-content">
            {this.props.children}
          </div>
        </div>
      </div>)
      ;
  }
}
// END
