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
import PhoneIcon from './baseline-phone-24px.svg';
import ResumeIcon from './resume.svg';

const styles = {
  topPage: {
    display: 'flex',
    flexDirection: 'column',
    width: 1360,
    height: 203,
    justifyContent: 'center',
    textAlign: 'center',
    paddingTop: 78
  },
  middlePage: {
    marginBottom: -91
  },
  aboutMe: {
    width: 293,
    marginLeft: 652,
    fontSize: 71
  },
  jobTitle: {
    opacity: 0.8,
    marginLeft: 171,
    marginTop: 2,
    color: 'darkblue'
  },
  elevatorPitch: {
    width: 528,
    marginLeft: 536,
    marginTop: 19,
    fontSize: 17,
    color: 'darkblue'
  },
  experienceTitle: {
    marginTop: 37
  },
  experienceHeader: {
    padding: 12
  },
  bulletPoints: {
    paddingTop: 12
  },
  languages: {
    marginRight: 392
  },
  backEnd: {
    position: 'absolute',
    marginLeft: 1106,
    marginTop: -32
  },
  frontEnd: {
    marginTop: -32
  },
  languagesSkills: {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    marginLeft: 714,
    marginTop: 11
  },
  frontEndSkills: {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    marginLeft: 904,
    marginTop: 11
  },
  backEndSkills: {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    marginLeft: 1112,
    marginTop: 11
  },
  border: {
    borderBottom: '1px solid gray',
    marginTop: 162,
    marginLeft: 390,
    opacity: 0.3,
    width: 1061
  },
  avatar: {
    width: 217,
    height: 287,
    borderRadius: 32,
    position: 'absolute',
    marginLeft: 1073
  },
  chipOne: {
    backgroundColor: 'white',
    marginLeft: -78,
    marginTop: 90,
    position: 'absolute',
    color: 'blue'
  },
  chipTwo: {
    backgroundColor: 'white',
    marginLeft: 43,
    marginTop: 90,
    position: 'absolute',
    color: 'blue'
  },
  chipThree: {
    backgroundColor: 'white',
    marginLeft: 175,
    marginTop: 90,
    position: 'absolute',
    color: 'blue'
  },
  chipFour: {
    backgroundColor: 'white',
    marginLeft: 287,
    marginTop: 90,
    position: 'absolute',
    color: 'blue'
  },
  chipFive: {
    backgroundColor: 'white',
    marginLeft: 452,
    marginTop: 90,
    position: 'absolute',
    color: 'blue'
  },
  expStyle: {
    textAlign: 'center'
  },
  skillsTitle: {
    textAlign: 'center'
  },
  chipList: {
    marginBottom: 32
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

  copyPhoneNumber = () => {
    let phoneTextField = document.createElement('textarea');
    phoneTextField.innerText = '775-636-2352';
    document.body.appendChild(phoneTextField);
    phoneTextField.select();
    document.execCommand('copy');
    phoneTextField.remove();
    document.getElementById('phone').title =
      'My phone number has been copied to your clipboard!';
  };
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Typography className={classes.topPage}>
          <Typography
            variant="display3"
            color="secondary"
            className={classes.aboutMe}
          >
            About Me
          </Typography>
          <Typography
            variant="headline"
            color="primary"
            className={classes.jobTitle}
          >
            Software Engineer from Reno, Nevada
          </Typography>
          <Typography color="primary" className={classes.elevatorPitch}>
            My Passion has always been working with computers. While I've had an
            interest in the hardware side of things my real Passion is the
            software side of things and creating web applications.
          </Typography>
          <Avatar src={HeadShot} className={classes.avatar} />

          <a href={'http://github.com/nncoultas'} title="View my Github">
            <Chip
              avatar={<Avatar src={GitHubIcon} alt="GitHub Icon" />}
              label="My Github"
              className={classes.chipOne}
              clickable
            />
          </a>
          <a
            href={'https://www.linkedin.com/in/nick-coultas-a1491b167/'}
            title="Connect with me on LinkedIn"
          >
            <Chip
              avatar={<Avatar src={LinkedInIcon} alt="LinkedIn Icon" />}
              className={classes.chipTwo}
              label="My LinkedIn"
              clickable
            />
          </a>
          <a title="Click the icon to copy my email!" id="email">
            <Chip
              avatar={<Avatar src={EmailIcon} alt="Email Icon" />}
              className={classes.chipThree}
              onClick={this.copyEmail}
              label="My email"
            />
          </a>
          <a title="Click the icon to copy my phone number" id="phone">
            <Chip
              avatar={<Avatar src={PhoneIcon} alt="Phone Icon" />}
              className={classes.chipFour}
              onClick={this.copyPhoneNumber}
              label="My phone number"
            />
          </a>
          <a
            href={
              'https://drive.google.com/file/d/1dNkQB6wKUtt9R8msCymyLiUWZA9SsKd3/view'
            }
            title="Click the icon to view my resume"
          >
            <Chip
              avatar={<Avatar src={ResumeIcon} alt="Resume Icon" />}
              className={classes.chipFive}
              label="My Resume"
              clickable
            />
          </a>
        </Typography>
        <Typography className={classes.border} />
        <Typography className={classes.middlePage}>
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
            className={`${classes.expStyle} ${classes.experienceTitle}`}
          >
            Software Engineer
          </Typography>
          <Typography
            variant="title"
            color="primary"
            className={`${classes.expStyle} ${classes.experienceHeader}`}
          >
            Lambda School | February 2018 - August 2018
          </Typography>
          <Typography
            color="primary"
            className={`${classes.expStyle} ${classes.bulletPoints}`}
          >
            6+ months Full-Time CS Fundamental/software development program
          </Typography>
          <Typography
            color="primary"
            className={`${classes.expStyle} ${classes.bulletPoints}`}
          >
            Gained experience working with clients and understanding client
            demands by <br /> collaborating on full lifecycle projects.{' '}
          </Typography>
          <Typography
            color="primary"
            className={`${classes.expStyle} ${classes.bulletPoints}`}
          >
            Completed all curriculum coursework including; <br /> React, react
            native, redux, node, express, mongoDB, mocha, chai, python, django.{' '}
            <br />
            Hands on experience with client and server testing, paired
            programming, and CS fundamentals.
          </Typography>
          <Typography
            variant="headline"
            color="primary"
            className={`${classes.expStyle} ${classes.experienceTitle}`}
          >
            Sales Asscoiate
          </Typography>
          <Typography
            variant="title"
            color="primary"
            className={`${classes.expStyle} ${classes.experienceHeader}`}
          >
            Best Buy | November 2016 - Present
          </Typography>
          <Typography
            color="primary"
            className={`${classes.expStyle} ${classes.bulletPoints}`}
          >
            Home Theater/Computer sales associate with a team of 5+ people
          </Typography>
          <Typography
            color="primary"
            className={`${classes.expStyle} ${classes.bulletPoints}`}
          >
            Required to hit a quota of sales each month both personal and
            section wide.
          </Typography>
        </Typography>
        <Typography className={classes.border} />
        <Typography className="bottomPage">
          <Typography
            variant="display3"
            color="secondary"
            className={classes.expStyle}
          >
            Skills
          </Typography>
          <Typography
            variant="headline"
            color="Primary"
            className={`${classes.skillsTitle} ${classes.languages}`}
          >
            Languages
          </Typography>
          <Typography
            variant="headline"
            color="Primary"
            className={`${classes.skillsTitle} ${classes.backEnd}`}
          >
            Back-End
          </Typography>
          <Typography
            variant="headline"
            color="Primary"
            className={`${classes.skillsTitle} ${classes.frontEnd}`}
          >
            Front-End
          </Typography>
          <Typography className={classes.languagesSkills}>
            <Chip
              label="Javascript"
              color="primary"
              className={classes.chipList}
            />
            <Chip label="C" color="primary" className={classes.chipList} />
            <Chip label="Python" color="primary" className={classes.chipList} />
          </Typography>
          <Typography className={classes.frontEndSkills}>
            <Chip label="React" color="primary" className={classes.chipList} />
            <Chip
              label="React-Router"
              color="primary"
              className={classes.chipList}
            />
            <Chip label="Redux" color="primary" className={classes.chipList} />
            <Chip
              label="Bootstrap"
              color="primary"
              className={classes.chipList}
            />
            <Chip
              label="Material-UI"
              color="primary"
              className={classes.chipList}
            />
            <Chip
              label="HTML/CSS"
              color="primary"
              className={classes.chipList}
            />
            <Chip label="LESS" color="primary" className={classes.chipList} />
            <Chip
              label="HTTP/AJAX"
              color="primary"
              className={classes.chipList}
            />
            <Chip label="Axios" color="primary" className={classes.chipList} />
          </Typography>
          <Typography className={classes.backEndSkills}>
            <Chip
              label="MongoDB"
              color="primary"
              className={classes.chipList}
            />
            <Chip
              label="PostgreSQL"
              color="primary"
              className={classes.chipList}
            />
            <Chip
              label="Sequelize"
              color="primary"
              className={classes.chipList}
            />
            <Chip
              label="Node.js"
              color="primary"
              className={classes.chipList}
            />
            <Chip
              label="Express.js"
              color="primary"
              className={classes.chipList}
            />
            <Chip label="Django" color="primary" className={classes.chipList} />
            <Chip label="JWT" color="primary" className={classes.chipList} />
            <Chip label="Bcrypt" color="primary" className={classes.chipList} />
          </Typography>
        </Typography>
      </div>
    );
  }
}

export default withStyles(styles)(About);
