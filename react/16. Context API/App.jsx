// @ts-nocheck

import React from 'react';
import { Tabs, Tab } from 'react-bootstrap';

import Home from './Home.jsx';
import Profile from './Profile.jsx';
import ThemeSwitcher from './ThemeSwitcher.jsx';
import ThemeContext from './contexts';

const themes = [
  {
    id: 1,
    name: 'White',
    className: 'light',
  },
  {
    id: 2,
    name: 'Black',
    className: 'dark',
  },
  {
    id: 3,
    name: 'Blue',
    className: 'dark-blue',
  },
];

class App extends React.Component {
  // BEGIN (write your solution here)
  constructor(props) {
    super(props);
    this.state = {
      theme: themes[0],
      themes: themes,
      toggleTheme: this.toggleTheme,
    }
  }

  toggleTheme = (e) => {
    const themeById = this.state.themes.filter((theme) => theme.id == e);
    this.setState({ theme: themeById[0] });
  };

  render() {
    return (
      <>
        <Tabs>
          <Tab eventKey="home" title="Home">
            <ThemeContext.Provider value={this.state}>
              <Home />
            </ThemeContext.Provider>
          </Tab>
          <Tab eventKey="profile" title="Profile">
            <ThemeContext.Provider value={this.state}>
              <Profile />
            </ThemeContext.Provider>
          </Tab>
        </Tabs>
        <ThemeContext.Provider value={this.state}>
          <ThemeSwitcher />
        </ThemeContext.Provider>
      </>

    );
  }
  // END
}

export default App;
