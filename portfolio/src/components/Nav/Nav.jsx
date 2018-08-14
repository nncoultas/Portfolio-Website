import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import fingerPrint from './baseline-fingerprint-24px.svg';
import accountCircle from './baseline-account_circle-24px.svg';
import note from './baseline-note-24px.svg';
import home from './baseline-home-24px.svg';
import subject from './baseline-subject-24px.svg';

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
            <Tab label="Home" icon={<img src={home} alt="home" />} />
            <Tab
              label="About"
              icon={<img src={accountCircle} alt="account-cirlce" />}
            />
            <Tab label="Projects" icon={<img src={note} alt="note" />} />
            <Tab label="Blog" icon={<img src={subject} alt="subject" />} />
            <Tab
              label="Contact"
              href="#basic-tabs"
              icon={<img src={fingerPrint} alt="finger-print" />}
            />
          </Tabs>
        </AppBar>
      </div>
    );
  }
}

export default Nav;
