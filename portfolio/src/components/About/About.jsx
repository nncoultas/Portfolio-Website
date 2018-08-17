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
  }
};

const About = props => {
  const { classes } = props;
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
            My Passion has always been working with computers. While I've had an
            interest in the hardware side of things my real Passion is the
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
        <a title="Click The Icon To Copy My Email!">
          <Chip
            avatar={<Avatar src={EmailIcon} alt="EmailIcon Icon" />}
            className={classes.chipThree}
          />
        </a>
      </div>
    </div>
  );
};

export default withStyles(styles)(About);
