import React from 'react';
import './About.css';
import HeadShot from './image1.jpeg';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  avatar: {
    width: 217,
    height: 287,
    borderRadius: 32,
    position: 'absolute',
    marginLeft: 996
  }
};

class About extends React.Component {
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
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(About);
