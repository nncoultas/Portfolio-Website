import React from 'react';
import './Home.css';
import Particles from 'react-particles-js';
import Paper from '@material-ui/core/Paper';

const particleStyle = {
  particles: {
    number: {
      value: 120,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
};

class Home extends React.Component {
  render() {
    return (
      <div className="homeWrapper">
        <Paper className="paper">
          <div className="header">
            <h1 className="titleText">
              My Name is Nick Coultas. <br />
              Welcome to my Website. <br />
            </h1>
          </div>
        </Paper>
        <Particles params={particleStyle} />
      </div>
    );
  }
}

export default Home;
