import React from 'react';
import HeadShot from './image1.jpeg';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({});
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
        <Typography />
        <Typography>
          <Typography variant="display3" color="secondary">
            Experience
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
