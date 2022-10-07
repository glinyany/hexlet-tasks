// @ts-nocheck

/* eslint-disable react/static-property-placement */

import React from 'react';

import ThemeContext from './contexts';

const content = 'Текст для вкладки Home';

class Home extends React.Component {
  // BEGIN (write your solution here)
  static contextType = ThemeContext;

  render() {
    const { context } = this;
    const { theme } = context;
    return <article className={theme.className}>{content}</article>;
  }
  // END
}

export default Home;
