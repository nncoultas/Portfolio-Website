import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  topPageStyle: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '2%',
    backgroundColor: '#f5f8fa',
    borderBottom: '1px solid rgba(0,0,0,.125)',
    borderTop: '1px solid rgba(0,0,0,.125)'
  }
});
class About extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Typography>
          <Typography
            className={classes.topPageStyle}
            variant="display3"
            color="secondary"
          >
            Experience
            <Typography>
              Want to check out my recent projects I've been working on?
              <br />
              <a href="http://github.com/nncoultas">Check out my github.</a>
            </Typography>
          </Typography>
          <Typography variant="headline" color="primary">
            Software Engineer
          </Typography>
          <Typography variant="title" color="primary">
            Lambda School | February 2018 - August 2018
          </Typography>
          <Typography color="primary">
            6+ months Full-Time CS Fundamental/software development program
          </Typography>
          <Typography color="primary">
            Gained experience working with clients and understanding client
            demands by <br /> collaborating on full lifecycle projects.{' '}
          </Typography>
          <Typography color="primary">
            Completed all curriculum coursework including; <br /> React, react
            native, redux, node, express, mongoDB, mocha, chai, python, django.{' '}
            <br />
            Hands on experience with client and server testing, paired
            programming, and CS fundamentals.
          </Typography>
          <Typography variant="headline" color="primary">
            Sales Asscoiate
          </Typography>
          <Typography variant="title" color="primary">
            Best Buy | November 2016 - Present
          </Typography>
          <Typography color="primary">
            Home Theater/Computer sales associate with a team of 5+ people
          </Typography>
          <Typography color="primary">
            Required to hit a quota of sales each month both personal and
            section wide.
          </Typography>
        </Typography>
      </div>
    );
  }
}

export default withStyles(styles)(About);
