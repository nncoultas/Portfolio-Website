import React from 'react';
import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';
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
  },
  bottomPageStyle: {
    display: 'flex',
    marginTop: '2%',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '30%',
    flexDirection: 'column'
  },
  companyStyle: {
    display: 'flex',
    justifyContent: 'space-between',
    flexGrow: 1,
    paddingTop: '4%',
    paddingBottom: '4%',
    borderBottom: '1px solid rgba(0,0,0,.125)'
  },
  cardContentStyle: {
    paddingTop: '5%'
  },
  cardFooterStyle: {
    paddingTop: '6%',
    fontSize: '87%'
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
            <Typography variant="headline">
              Want to check out my recent projects I've been working on?
              <br />
              <a href="http://github.com/nncoultas">Check out my github.</a>
            </Typography>
          </Typography>
          <Typography className={classes.bottomPageStyle}>
            <Card>
              <CardContent>
                <Typography
                  className={classes.companyStyle}
                  variant="h1"
                  component="h2"
                  color="primary"
                >
                  Lambda School
                  <Typography>Software Engineer</Typography>
                </Typography>
                <Typography
                  className={classes.cardContentStyle}
                  color="primary"
                >
                  <ul>
                    <li>
                      6+ months Full-Time CS Fundamental/software development
                      program
                    </li>
                    <li>
                      Gained experience working with clients and understanding
                      client demands by <br /> collaborating on full lifecycle
                      projects.{' '}
                    </li>
                    <li>
                      {' '}
                      Completed all curriculum coursework including; <br />{' '}
                      React, react native, redux, node, express, mongoDB, mocha,
                      chai, python, django. <br />
                    </li>
                    <li>
                      {' '}
                      Hands on experience with client and server testing, paired
                      programming, and CS fundamentals.
                    </li>
                  </ul>
                </Typography>
                <Typography
                  className={classes.cardFooterStyle}
                  variant="subtitle1"
                  color="textSecondary"
                >
                  February 2018 - August 2018
                </Typography>
              </CardContent>
            </Card>
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
        </Typography>
      </div>
    );
  }
}

export default withStyles(styles)(About);
