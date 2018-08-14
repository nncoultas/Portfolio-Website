import React from 'react';
import './Home.css';
import Particles from 'react-particles-js';

const particleStyle = {
  particles: {
    number: {
      value: 150,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
};

class Background extends React.Component {
  render() {
    return (
      <div className="particlesBG">
        <Particles params={particleStyle} />
      </div>
    );
  }
}

export default Background;
