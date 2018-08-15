import React from 'react';
import Typography from '@material-ui/core/Typography';
import './About.css';

class About extends React.Component {
  render() {
    return (
      <div className="topPage">
        <Typography variant="display3" color="secondary">
          <div className="aboutMe">About Me</div>
        </Typography>
        <Typography variant="headline" color="primary" className="jobTitle">
          <div className="jobTitle">Software Engineer from Reno, Nevada</div>
        </Typography>
        <Typography color="primary">
          <div className="elevatorPitch">
            My Passion has always been computers. I've always been interested
            with the hardware side and that interest has drove me to the
            software side of things. My passion for computer hardware led me to
            be a sales associate at best buy selling everything from your normal
            laptops to gaming computers and even selling TV's and full home
            theatre systems. Just like being a developer you're always working
            on a team whether you're trying to hit personal goals yourself,
            helping others hit their personal goals and helping improve the
            store/section as a team. The passion I have for computer hardware
            and tech transferred right over to Software Development.
          </div>
        </Typography>
      </div>
    );
  }
}

export default About;
