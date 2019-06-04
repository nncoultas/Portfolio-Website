import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import accountCircle from './baseline-account_circle-24px.svg';
import note from './baseline-note-24px.svg';
import subject from './baseline-subject-24px.svg';
import { Link } from 'react-router-dom';

const styles = () => ({
  title: {
    fontSize: '23px'
  },
  subTitle: {
    fontSize: '10px',
    color: 'white'
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
  }
});

class Nav extends React.Component {
  state = {
    value: 0
  };

  handleChange = (e, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;
    return (
      <div className={classes.root}>
        <AppBar position="static" style={{ backgroundColor: '#2a6ccf' }}>
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
              label="Experience"
              icon={<img src={accountCircle} alt="account-cirlce" />}
              component={Link}
              to="/Experience"
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

export default withStyles(styles)(Nav);
