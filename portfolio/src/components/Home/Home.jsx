import React from 'react';
import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import { withStyles } from '@material-ui/core/styles';

import HeadShot from './portrait-photo.jpg';
import backgroundImage from './background-image.jpg';
import GitHubIcon from './25231.svg';
import LinkedInIcon from './61109.svg';
import EmailIcon from './54215.svg';
import PhoneIcon from './baseline-phone-24px.svg';
import ResumeIcon from './resume.svg';

const styles = theme => ({
  backgroundImageStyle: {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '150vh'
  },
  bottomPageStyle: {
    display: 'flex',
    justifyContent: 'space-evenly',
    maxWidth: '35%',
    marginTop: '2%',
    marginLeft: 'auto',
    marginRight: 'auto',
    [theme.breakpoints.up('md')]: {
      maxWidth: '95%'
    },
    [theme.breakpoints.down('sm')]: {
      maxWidth: '60%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }
  },
  textSize: {
    width: '34%',
    color: 'black',
    [theme.breakpoints.down('md')]: {
      width: '76%'
    },
    [theme.breakpoints.down('sm')]: {
      width: '165%'
    }
  },
  chipLayout: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '18%',
    [theme.breakpoints.down('sm')]: {
      width: '68%',
      marginTop: '5%'
    }
  },
  chipStyle: {
    backgroundColor: 'white',
    color: 'Black'
  },
  pictureStyle: {
    width: '100%',
    height: '94vh',
    [theme.breakpoints.down('sm')]: {
      height: '53vh'
    }
  },
  titleStyle: {
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    marginTop: '29.5%',
    color: 'white',
    paddingLeft: '23%',
    fontSize: '428%',
    [theme.breakpoints.down('lg')]: {
      display: 'none'
    }
  },
  textColor: {
    color: '#76c1d4'
  },
  underlineColor: {
    borderBottom: '5px solid #76c1d4'
  }
});

class Home extends React.Component {
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
      <div className={classes.backgroundImageStyle}>
        <Typography>
          <Typography variant="headline" className={classes.titleStyle}>
            Let's create things and&nbsp;
            <p className={classes.underlineColor}>make a difference.</p>
          </Typography>
          <img src={HeadShot} className={classes.pictureStyle} />
        </Typography>
        <Typography className={classes.bottomPageStyle}>
          <Card className={classes.textSize}>
            <CardContent>
              <Typography>
                <Typography className={classes.textColor} variant="headline">
                  About Me
                </Typography>
                <br />
                My passion in life has always been technology. I started from
                the ground up exploring every avenue I could where I could learn
                about computers and software. I took a position with Best Buy as
                a Sales associate so I could dive into hardware and support (the
                roots of technology). At that point in my life, I was still
                eager to learn more and take a deeper dive into software
                engineering. I found an intense and immersive program through
                Lambda School where I learned Javascript, React, Redux,
                HTML/CSS, HTTP/AJAX, Node.js, and Express.js. With my experience
                working on teams from a technical and non-technical standpoint,
                I believe I could utilize my soft skills and technical skills to
                be part of a productive development team, creating meaningful
                code and projects.
              </Typography>
            </CardContent>
          </Card>
          <Card className={classes.chipLayout}>
            <br />
            <Typography className={classes.textColor} variant="headline">
              Contact
            </Typography>
            <br />
            <a
              href={'http://github.com/nncoultas'}
              title="View my Github"
              style={{ textDecoration: 'none' }}
            >
              <Chip
                className={classes.chipStyle}
                avatar={<Avatar src={GitHubIcon} alt="GitHub Icon" />}
                label="Github"
                clickable
              />
            </a>
            <a
              href={'https://www.linkedin.com/in/nick-coultas-a1491b167/'}
              title="Connect with me on LinkedIn"
              style={{ textDecoration: 'none' }}
            >
              <Chip
                className={classes.chipStyle}
                avatar={<Avatar src={LinkedInIcon} alt="LinkedIn Icon" />}
                label="LinkedIn"
                clickable
              />
            </a>
            <a title="Click the icon to copy my email!" id="email">
              <Chip
                className={classes.chipStyle}
                avatar={<Avatar src={EmailIcon} alt="Email Icon" />}
                onClick={this.copyEmail}
                label="Email address"
              />
            </a>
            <a title="Click the icon to copy my phone number" id="phone">
              <Chip
                className={classes.chipStyle}
                avatar={<Avatar src={PhoneIcon} alt="Phone Icon" />}
                onClick={this.copyPhoneNumber}
                label="Phone number"
              />
            </a>
            <a
              href={
                'https://drive.google.com/file/d/1WqUydLNgRudNzbpIFAwRrPFhR2IQBTn-/view'
              }
              title="Click the icon to view my resume"
              style={{ textDecoration: 'none' }}
            >
              <Chip
                className={classes.chipStyle}
                avatar={<Avatar src={ResumeIcon} alt="Resume Icon" />}
                label="My Resume"
                clickable
              />
            </a>
          </Card>
        </Typography>
      </div>
    );
  }
}

export default withStyles(styles)(Home);
