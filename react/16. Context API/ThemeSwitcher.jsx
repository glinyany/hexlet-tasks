// @ts-nocheck

/* eslint-disable react/static-property-placement */

import React from 'react';
import { ButtonGroup, ToggleButton } from 'react-bootstrap';
import _ from 'lodash';
import ThemeContext from './contexts';

class ThemeSwitcher extends React.Component {
  // BEGIN (write your solution here)
  static contextType = ThemeContext;

  render() {
    const { context } = this;
    const { themes, theme, toggleTheme } = context;

    return (
      <ButtonGroup className="mb-2">
        {themes.map((el) => (
          <ToggleButton
            key={_.uniqueId('themeId_')}
            id={el.id}
            type="checkbox"
            variant={el.id === context.theme.id ? 'success' : 'secondary'}
            onChange={(e) => toggleTheme(e.currentTarget.id)}
            value={el.name}
          >
          {el.name}
          </ToggleButton>))}
      </ButtonGroup>
    );
  }
  
  // END
}

export default ThemeSwitcher;
