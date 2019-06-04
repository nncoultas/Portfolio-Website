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
    justifyContent: 'space-evenly',
    maxWidth: '35%',
    marginTop: '2%',
    marginLeft: 'auto',
    marginRight: 'auto',
    [theme.breakpoints.up('md')]: {
      maxWidth: '55%'
    },
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      flexDirection: 'column'
    }
  },
  textSize: {
    width: '57%',
    [theme.breakpoints.down('md')]: {
      width: '76%'
    },
    [theme.breakpoints.down('sm')]: {
      width: '165%'
    }
  },
  chipLayout: {
    width: '14%'
  },
  chipStyle: {
    backgroundColor: 'white',
    color: 'Black'
  },
  pictureStyle: {
    width: '6%',
    height: '0%'
  },
  titleStyle: {
    marginTop: '0.5%'
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
      <div>
        <Typography className={classes.topPageStyle}>
          <Avatar src={HeadShot} className={classes.pictureStyle} />
          <Typography
            variant="display3"
            color="secondary"
            className={classes.titleStyle}
          >
            Nick Coultas
          </Typography>
          <Typography variant="headline" color="primary">
            Let's create things that make a difference.
          </Typography>
        </Typography>
        <Typography className={classes.bottomPageStyle}>
          <Typography color="primary" className={classes.textSize}>
            <Typography variant="headline">About Me</Typography>
            <br />
            My passion in life has always been technology. I started from the
            ground up exploring every avenue I could where I could learn about
            computers and software. I took a position with Best Buy as a Sales
            associate so I could dive into hardware and support (the roots of
            technology). At that point in my life, I was still eager to learn
            more and take a deeper dive into software engineering. I found an
            intense and immersive program through Lambda School where I learned
            Javascript, React, Redux, HTML/CSS, HTTP/AJAX, Node.js, and
            Express.js. With my experience working on teams from a technical and
            non-technical standpoint, I believe I could utilize my soft skills
            and technical skills to be part of a productive development team,
            creating meaningful code and projects.
          </Typography>
          <Typography className={classes.chipLayout}>
            <br />
            <Typography variant="headline">Contact</Typography>
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
                label="Copy my email address"
              />
            </a>
            <a title="Click the icon to copy my phone number" id="phone">
              <Chip
                className={classes.chipStyle}
                avatar={<Avatar src={PhoneIcon} alt="Phone Icon" />}
                onClick={this.copyPhoneNumber}
                label="Copy my phone number"
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
          </Typography>
        </Typography>
      </div>
    );
  }
}

export default withStyles(styles)(Home);
