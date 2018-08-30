import React from 'react';
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

const styles = theme => ({
  topPage: {
    display: 'flex',
    flexDirection: 'column',
    width: 1360,
    height: 203,
    justifyContent: 'center',
    textAlign: 'center',
    paddingTop: 78,
    [theme.breakpoints.down('sm')]: {
      width: '68%',
      height: '100%'
    },
    [theme.breakpoints.up('md')]: {
      width: '53%',
      height: '100%'
    }
  },
  middlePage: {
    marginBottom: -91
  },
  aboutMe: {
    marginLeft: '55%',
    fontSize: 71,
    [theme.breakpoints.down('sm')]: {
      marginLeft: '23%',
      width: '113%',
      fontSize: 54
    }
  },
  jobTitle: {
    opacity: 0.6,
    marginLeft: '51%',
    marginTop: '.5%',
    color: 'darkblue',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      marginLeft: '23%'
    }
  },
  elevatorPitch: {
    marginLeft: '51%',
    marginTop: '2%',
    fontSize: 17,
    color: 'darkblue',
    [theme.breakpoints.down('sm')]: {
      marginLeft: '9%',
      width: '134%'
    }
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
  languagesSkills: {
    position: 'absolute',
    marginLeft: '37.4%',
    marginTop: '1%',
    [theme.breakpoints.down('sm')]: {
      marginLeft: '33%',
      marginTop: '-328%'
    }
  },
  frontEndSkills: {
    position: 'absolute',
    marginLeft: '47%',
    marginTop: '1%',
    [theme.breakpoints.down('sm')]: {
      marginLeft: '33%',
      marginTop: '-245%'
    }
  },
  backEndSkills: {
    position: 'absolute',
    marginLeft: '57.5%',
    marginTop: '1%',
    [theme.breakpoints.down('sm')]: {
      marginLeft: '33%',
      marginTop: '2%'
    }
  },
  border: {
    borderBottom: '1px solid gray',
    marginTop: 162,
    marginLeft: 390,
    opacity: 0.3,
    width: '100%',
    marginBottom: 19,
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      marginTop: '39%',
      marginLeft: -17
    }
  },
  avatar: {
    width: '24%',
    height: '43%',
    borderRadius: 32,
    marginLeft: '105%',
    marginTop: '-34%',
    [theme.breakpoints.down('sm')]: {
      marginLeft: '50%',
      marginTop: '5%',
      width: '51%',
      height: '33%'
    }
  },

  chipIcons: {
    marginTop: '4%',
    display: 'flex',
    justifyContent: 'center',
    marginLeft: '86%',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      marginLeft: '53%',
      width: '15%'
    }
  },
  chipStyle: {
    backgroundColor: 'white',
    color: 'blue'
  },
  expStyle: {
    textAlign: 'center'
  },
  skillsTitle: {
    display: 'flex',
    justifyContent: 'space-evenly',
    width: '34%',
    marginLeft: '33%',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      alignItems: 'center',
      width: '41%',
      marginLeft: '29%'
    }
  },
  chipList: {
    marginBottom: 32
  },
  frontEndTitle: {
    [theme.breakpoints.down('sm')]: {
      marginTop: '194%'
    }
  },
  backEndTitle: {
    [theme.breakpoints.down('sm')]: {
      marginTop: '594%'
    }
  },
  skillsStyled: {
    display: 'flex',
    flexDirection: 'column',
    width: '6%',
    [theme.breakpoints.down('sm')]: {
      width: '33%'
    }
  }
});
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
            My passion in life has always been technology. I started from the
            ground up exploring every avenue I could where I could learn about
            computers and software. I took a position with Best Buy as a Sales
            associate so I could dive into hardware and support (the roots of
            technology). At that point in my life I was still eager to learn
            more and take a deeper dive into software engineering. I found an
            intense and immersive program through Lambda School where I learned
            Javascript, React, Redux, HTML/CSS, HTTP/AJAX, Node.js, and
            Express.js. With my experience working on teams from a technical and
            non technical standpoint, I believe I could utilize my soft skills
            and technical skills to be part of a productice development team,
            creating meaningful code and projects.
          </Typography>
          <Avatar src={HeadShot} className={classes.avatar} />
          <Typography className={classes.chipIcons}>
            <a
              href={'http://github.com/nncoultas'}
              title="View my Github"
              style={{ textDecoration: 'none' }}
            >
              <Chip
                avatar={<Avatar src={GitHubIcon} alt="GitHub Icon" />}
                label="My Github"
                className={classes.chipStyle}
                clickable
              />
            </a>
            <a
              href={'https://www.linkedin.com/in/nick-coultas-a1491b167/'}
              title="Connect with me on LinkedIn"
              style={{ textDecoration: 'none' }}
            >
              <Chip
                avatar={<Avatar src={LinkedInIcon} alt="LinkedIn Icon" />}
                className={classes.chipStyle}
                label="My LinkedIn"
                clickable
              />
            </a>
            <a title="Click the icon to copy my email!" id="email">
              <Chip
                avatar={<Avatar src={EmailIcon} alt="Email Icon" />}
                className={classes.chipStyle}
                onClick={this.copyEmail}
                label="Copy my email address"
              />
            </a>
            <a title="Click the icon to copy my phone number" id="phone">
              <Chip
                avatar={<Avatar src={PhoneIcon} alt="Phone Icon" />}
                className={classes.chipStyle}
                onClick={this.copyPhoneNumber}
                label="Copy my phone number"
              />
            </a>
            <a
              href={
                'https://drive.google.com/file/d/1dNkQB6wKUtt9R8msCymyLiUWZA9SsKd3/view'
              }
              title="Click the icon to view my resume"
              style={{ textDecoration: 'none' }}
            >
              <Chip
                avatar={<Avatar src={ResumeIcon} alt="Resume Icon" />}
                className={classes.chipStyle}
                label="My Resume"
                clickable
              />
            </a>
          </Typography>
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
          <Typography className={classes.skillsTitle}>
            <Typography variant="headline" color="Primary">
              Languages
            </Typography>
            <Typography
              variant="headline"
              color="Primary"
              className={classes.frontEndTitle}
            >
              Front-End
            </Typography>
            <Typography
              variant="headline"
              color="Primary"
              className={classes.backEndTitle}
            >
              Back-End
            </Typography>
          </Typography>
          <Typography className={classes.skillsStyled}>
            <Typography
              className={`${classes.skillsStyled} ${classes.languagesSkills}`}
            >
              <Chip
                label="Javascript"
                color="primary"
                className={classes.chipList}
              />
              <Chip label="C" color="primary" className={classes.chipList} />
              <Chip
                label="Python"
                color="primary"
                className={classes.chipList}
              />
            </Typography>
            <Typography
              className={`${classes.skillsStyled} ${classes.frontEndSkills}`}
            >
              <Chip
                label="React"
                color="primary"
                className={classes.chipList}
              />
              <Chip
                label="React-Router"
                color="primary"
                className={classes.chipList}
              />
              <Chip
                label="Redux"
                color="primary"
                className={classes.chipList}
              />
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
              <Chip
                label="Axios"
                color="primary"
                className={classes.chipList}
              />
            </Typography>
            <Typography
              className={`${classes.skillsStyled} ${classes.backEndSkills}`}
            >
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
              <Chip
                label="Django"
                color="primary"
                className={classes.chipList}
              />
              <Chip label="JWT" color="primary" className={classes.chipList} />
              <Chip
                label="Bcrypt"
                color="primary"
                className={classes.chipList}
              />
            </Typography>
          </Typography>
        </Typography>
      </div>
    );
  }
}

export default withStyles(styles)(About);
