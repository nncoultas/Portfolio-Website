import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

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
            <Tab label="Home" />
            <Tab label="About" />
            <Tab label="Blog" />
            <Tab label="Contact" href="#basic-tabs" />
          </Tabs>
        </AppBar>
      </div>
    );
  }
}

export default Nav;
