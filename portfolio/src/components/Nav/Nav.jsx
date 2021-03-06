import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Link } from 'react-router-dom';

import MenuIcon from './Menu-Icon.png';

const styles = theme => ({
  title: {
    color: '#76c1d4',
    fontSize: '23px'
  },
  subTitle: {
    fontSize: '10px',
    color: '#3d7c47'
  },
  end: {
    display: 'flex',
    justifyContent: 'flex-end'
  },
  start: {
    flexGrow: 1,
    opacity: 1,
    display: 'flex',
    alignItems: 'center'
  },
  noIndicator: {
    height: 0
  },
  hideTabs: {
    color: 'black',
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  },
  hideListMenu: {
    [theme.breakpoints.up('md')]: {
      display: 'none'
    }
  },
  buttonStyle: {
    color: 'black'
  }
});

class Nav extends React.Component {
  state = {
    value: 0,
    right: false
  };

  handleChange = (e, value) => {
    this.setState({ value });
  };

  toggleDrawer = (side, open) => event => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    this.setState({ ...this.state, [side]: open });
  };

  sideList = side => (
    <div
      onClick={this.toggleDrawer(side, false)}
      onKeyDown={this.toggleDrawer(side, false)}
    >
      <List>
        <ListItem button key={'Experience'} component={Link} to="/Experience">
          <ListItemText primary={'Experience'} />
        </ListItem>
        <Divider />
        <ListItem button key={'Skills'} component={Link} to="/Skills">
          <ListItemText primary={'Skills'} />
        </ListItem>
        <Divider />
        <ListItem button key={'Projects'} component={Link} to="/Projects">
          <ListItemText primary={'Projects'} />
        </ListItem>
        <Divider />
        <ListItem button key={'Blog'} component={Link} to="/Blog">
          <ListItemText primary={'Blog'} />
        </ListItem>
        <Divider />
      </List>
    </div>
  );

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
        <AppBar position="sticky" style={{ backgroundColor: 'white' }}>
          <Tabs
            classes={{ indicator: classes.noIndicator }}
            value={value}
            onChange={this.handleChange}
          >
            <div className={classes.start}>
              <Tab
                className={classes.start}
                label={
                  <span className={classes.title}>
                    Nick Coultas <br />
                    <a className={classes.subTitle}>
                      Full Stack Software Engineer
                    </a>
                  </span>
                }
                component={Link}
                to="/"
              />
            </div>
            <Tab
              className={classes.hideTabs}
              label="Experience"
              component={Link}
              to="/Experience"
            />
            <Tab
              className={classes.hideTabs}
              label="Skills"
              component={Link}
              to="/Skills"
            />
            <Tab
              className={classes.hideTabs}
              label="Projects"
              component={Link}
              to="/Projects"
            />
            <Tab
              className={classes.hideTabs}
              label="Blog"
              component={Link}
              to="/Blog"
            />
            <Button
              className={`${classes.buttonStyle} ${classes.hideListMenu}`}
              onClick={this.toggleDrawer('right', true)}
            >
              <Avatar src={MenuIcon} />
            </Button>
            <Drawer
              className={classes.buttonStyle}
              anchor="right"
              open={this.state.right}
              onClose={this.toggleDrawer('right', false)}
            >
              {this.sideList('right')}
            </Drawer>
          </Tabs>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(styles)(Nav);
