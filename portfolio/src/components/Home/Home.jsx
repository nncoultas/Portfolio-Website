import React from 'react';
import './Home.css';
import Particles from 'react-particles-js';

const particleParams = {
  particles: {
    number: {
      value: 120,
      density: {
        enable: true,
        value_area: 800
      }
    },
    line_linked: {
      shadow: {
        enable: true,
        color: '#FF000B'
      }
    }
  }
};

class Home extends React.Component {
  render() {
    return (
      <div>
        <div className="particles">
          <Particles params={particleParams} />
        </div>
        <div className="homeWrapper">
          <div className="header">
            <h1 className="titleText">
              My Name is Nick Coultas. <br />
              Welcome to my Website. <br />
            </h1>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
