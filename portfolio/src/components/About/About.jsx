import React from 'react';
import Typography from '@material-ui/core/Typography';
import './About.css';

class About extends React.Component {
  render() {
    return (
      <div>
        <div className="topPage">
          <Typography variant="display3" color="secondary">
            <div className="aboutMe">About Me</div>
          </Typography>
          <Typography variant="headline" color="primary" className="jobTitle">
            <div className="jobTitle">Software Engineer from Reno, Nevada</div>
          </Typography>
          <Typography color="primary">
            <div className="elevatorPitch">
              My Passion has always been working with computers. While I've had
              an interest in the hardware side of things my real Passion is the
              software side of things and creating web applications.
            </div>
          </Typography>
        </div>
      </div>
    );
  }
}

export default About;
