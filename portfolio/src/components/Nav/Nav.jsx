import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import accountCircle from './baseline-account_circle-24px.svg';
import note from './baseline-note-24px.svg';
import home from './baseline-home-24px.svg';
import subject from './baseline-subject-24px.svg';
import { Link } from 'react-router-dom';

class Nav extends React.Component {
  state = {
    value: 0
  };

  handleChange = (e, value) => {
    this.setState({ value });
  };

  render() {
    const { value } = this.state;
    return (
      <div>
        <AppBar position="static" style={{ backgroundColor: '#2a6ccf' }}>
          <Tabs value={value} onChange={this.handleChange} centered>
            <Tab
              label="Home"
              icon={<img src={home} alt="home" />}
              component={Link}
              to="/"
            />
            <Tab
              label="About"
              icon={<img src={accountCircle} alt="account-cirlce" />}
              component={Link}
              to="/About"
            />
            <Tab
              label="Projects"
              icon={<img src={note} alt="note" />}
              component={Link}
              to="/Projects"
            />
            <Tab
              label="Blog"
              icon={<img src={subject} alt="subject" />}
              component={Link}
              to="/Blog"
            />
          </Tabs>
        </AppBar>
      </div>
    );
  }
}

export default Nav;
