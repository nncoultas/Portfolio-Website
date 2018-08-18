import React from 'react';
import './About.css';
import HeadShot from './image1.jpeg';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import { withStyles } from '@material-ui/core/styles';
import GitHubIcon from './25231.svg';
import LinkedInIcon from './61109.svg';
import EmailIcon from './54215.svg';

const styles = {
  avatar: {
    width: 217,
    height: 287,
    borderRadius: 32,
    position: 'absolute',
    marginLeft: 1073
  },
  chipOne: {
    backgroundColor: 'white',
    marginLeft: -39,
    marginTop: 90,
    position: 'absolute'
  },
  chipTwo: {
    backgroundColor: 'white',
    marginLeft: 114,
    marginTop: 90,
    position: 'absolute'
  },
  chipThree: {
    backgroundColor: 'white',
    marginLeft: 246,
    marginTop: 90,
    position: 'absolute'
  },
  expStyle: {
    textAlign: 'center'
  }
};
class About extends React.Component {
  copyEmail = () => {
    let textField = document.createElement('textarea');
    textField.innerText = 'nncoultas@yahoo.com';
    document.body.appendChild(textField);
    textField.select();
    document.execCommand('copy');
    textField.remove();
    document.getElementById('email').title =
      'My email address has been copied to your clipboard!';
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <div className="topPage">
          <Typography variant="display3" color="secondary">
            <div className="aboutMe">About Me</div>
          </Typography>
          <Typography variant="headline" color="primary">
            <div className="jobTitle">Software Engineer from Reno, Nevada</div>
          </Typography>
          <Typography color="primary">
            <div className="elevatorPitch">
              My Passion has always been working with computers. While I've had
              an interest in the hardware side of things my real Passion is the
              software side of things and creating web applications.
            </div>
          </Typography>
          <Avatar src={HeadShot} className={classes.avatar} />

          <a href={'http://github.com/nncoultas'} title="View My Github">
            <Chip
              avatar={<Avatar src={GitHubIcon} alt="GitHub Icon" />}
              className={classes.chipOne}
            />
          </a>
          <a
            href={'https://www.linkedin.com/in/nick-coultas-a1491b167/'}
            title="Connect With Me On LinkedIn"
          >
            <Chip
              avatar={<Avatar src={LinkedInIcon} alt="LinkedIn Icon" />}
              className={classes.chipTwo}
            />
          </a>
          <a title="Click The Icon To Copy My Email!" id="email">
            <Chip
              avatar={<Avatar src={EmailIcon} alt="EmailIcon Icon" />}
              className={classes.chipThree}
              onClick={this.copyEmail}
            />
          </a>
        </div>
        <div className="border" />
        <div className="middlePage">
          <Typography
            variant="display3"
            color="secondary"
            className={classes.expStyle}
          >
            Experience
          </Typography>
          <Typography
            variant="headline"
            color="primary"
            className={classes.expStyle}
          >
            <div className="engineer">Software Engineer</div>
          </Typography>
          <Typography
            variant="title"
            color="primary"
            className={classes.expStyle}
          >
            <div className="lambda">
              Lambda School | February 2018 - August 2018
            </div>
          </Typography>
          <Typography color="primary" className={classes.expStyle}>
            <div className="bullet1">
              6+ months Full-Time CS Fundamental/software development program
            </div>
          </Typography>
          <Typography color="primary" className={classes.expStyle}>
            <div className="bullet2">
              Gained experience working with clients and understanding client
              demands by <br /> collaborating on full lifecycle projects.{' '}
            </div>
          </Typography>
          <Typography color="primary" className={classes.expStyle}>
            <div className="bullet3">
              Completed all curriculum coursework including; <br /> React, react
              native, redux, node, express, mongoDB, mocha, chai, python,
              django. <br />
              Hands on experience with client and server testing, paired
              programming, and CS fundamentals.
            </div>
          </Typography>
          <Typography
            variant="headline"
            color="primary"
            className={classes.expStyle}
          >
            <div className="engineer">Sales Asscoiate</div>
          </Typography>
          <Typography
            variant="title"
            color="primary"
            className={classes.expStyle}
          >
            <div className="lambda">Best Buy | November 2016 - Present</div>
          </Typography>
          <Typography color="primary" className={classes.expStyle}>
            <div className="bullet1">
              Home Theater/Computer sales associate with a team of 5+ people
            </div>
          </Typography>
          <Typography color="primary" className={classes.expStyle}>
            <div className="bullet2">
              Required to hit a quota of sales each month both personal and
              section wide.
            </div>
          </Typography>
        </div>
        <div className="border" />
        <div className="bottomPage">
          <Typography
            variant="display3"
            color="secondary"
            className={classes.expStyle}
          >
            Skills
          </Typography>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(About);
