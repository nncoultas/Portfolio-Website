import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import backgroundImage from './background-image.jpg';
import LambdaNotes from './LambdaNotes.png';
import BackwoodsPicture from './Backwoods.jpg';
import PythonPicture from './Python.png';
import WeatherAppPicture from './WeatherApp.png';
import './Projects.css';

const styles = () => ({
  backgroundImageStyle: {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '150vh'
  },
  topPageStyle: {
    color: 'white',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#76c1d4',
    borderBottom: '1px solid rgba(0,0,0,.125)'
  },
  card: {
    borderRadius: 0,
    maxWidth: 462,
    margin: '0.5%'
  },
  media: {
    height: 0,
    paddingTop: '56.25%'
  },
  projectColor: {
    color: '#76c1d4'
  },
  viewColor: {
    color: '#3d7c47'
  }
});

class Projects extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.backgroundImageStyle}>
        <Typography className={classes.topPageStyle} variant="display3">
          Projects
        </Typography>
        <div className="projectView">
          <Card className={`${classes.card}`}>
            <CardMedia
              className={classes.media}
              image={BackwoodsPicture}
              title="BackwoodsPicture "
            />
            <CardContent>
              <Typography
                className={classes.projectColor}
                gutterBottom
                variant="headline"
                component="h2"
              >
                BackWoods
              </Typography>
              <Typography component="p">
                Backwoods is a backwoods tracker to track trips from point A to
                B adding waypoints to check in to along the way. <br />
                Trips can also be shared with friends and family to be able to
                keep track of your loved ones when they venture on trips
                <br />
                Working on a team with 2 developers and a Project Manager using
                Pair Programming as often as possible.
                <br />I contributed to both the front-end and back-end of this
                app creating models and association between them, creating the
                controllers and routes on both the back-end and front-end and
                contributed to styling and layout of the app. <br />
                Tech Stack: React, React-Router, material-ui, Google-maps, Node,
                Sequelize, PosgreSQL, JWT, Bcrypt, mocha, chai, Express, Heroku,
                Netlify.
              </Typography>
            </CardContent>
            <CardActions>
              <a
                href={'https://www.backwoods.app/'}
                style={{ textDecoration: 'none' }}
              >
                <Button className={classes.viewColor} size="small">
                  View Site
                </Button>
              </a>
              <a
                href={'https://github.com/Lambda-School-Labs/CS8-backwoods'}
                style={{ textDecoration: 'none' }}
              >
                <Button className={classes.viewColor} size="small">
                  View Code
                </Button>
              </a>
            </CardActions>
          </Card>
          <Card className={`${classes.card}`}>
            <CardMedia
              className={classes.media}
              image={WeatherAppPicture}
              title="WeatherAppPicture"
            />
            <CardContent>
              <Typography
                className={classes.projectColor}
                gutterBottom
                variant="headline"
                component="h2"
              >
                Weather App
              </Typography>
              <Typography component="p">
                Weather app is a Single Page Application that uses Dark Sky API
                to obtain the weather for the current day and four days after.{' '}
                <br />
                This Application also uses the Map Quest Geocoding API to get
                the location that is entered into the search bar. <br />
                Tech Stack: React, React-Redux, Material-UI, Axios, Moment,
                Prop-types, Netlify
              </Typography>
            </CardContent>
            <CardActions>
              <a
                href={'https://weather-app-darksky.netlify.com/'}
                style={{ textDecoration: 'none' }}
              >
                <Button className={classes.viewColor} size="small">
                  View Site
                </Button>
              </a>
              <a
                href={'https://github.com/nncoultas/Weather-App'}
                style={{ textDecoration: 'none' }}
              >
                <Button className={classes.viewColor} size="small">
                  View Code
                </Button>
              </a>
            </CardActions>
          </Card>
          <Card className={`${classes.card}`}>
            <CardMedia
              className={classes.media}
              image={LambdaNotes}
              title="lambdaNotes"
            />
            <CardContent>
              <Typography
                className={classes.projectColor}
                gutterBottom
                variant="headline"
                component="h2"
              >
                Lambda Notes
              </Typography>
              <Typography component="p">
                Lambda Notes app is targeted towards people looking for an
                online sticky-notes type site where they can make daily notes as
                reminders or similar to a to-do list. <br />
                This was a solo project working on both the front-end and the
                back-end. <br />
                Tech Stack: React, Redux, Bootstrap, Node, Express, JWT, Bcrypt,
                Mocha, Chai, Mongoose, MongoDB, Heroku.
              </Typography>
            </CardContent>
            <CardActions>
              <a
                href={'https://lambda-notes-project-second.herokuapp.com/'}
                style={{ textDecoration: 'none' }}
              >
                <Button className={classes.viewColor} size="small">
                  View Site
                </Button>
              </a>
              <a
                href={'https://github.com/nncoultas/front-end-project-week'}
                style={{ textDecoration: 'none' }}
              >
                <Button className={classes.viewColor} size="small">
                  View Front-End Code
                </Button>
              </a>
              <a
                href={'https://github.com/nncoultas/back-end-project-week'}
                style={{ textDecoration: 'none' }}
              >
                <Button className={classes.viewColor} size="small">
                  View Back-End Code
                </Button>
              </a>
            </CardActions>
          </Card>
          <Card className={`${classes.card}`}>
            <CardMedia
              className={classes.media}
              image={PythonPicture}
              title="PythonPicture"
            />
            <CardContent>
              <Typography
                className={classes.projectColor}
                gutterBottom
                variant="headline"
                component="h2"
              >
                Python/Javascript Notes
              </Typography>
              <Typography component="p">
                This is another note-taking app but built with a Javascript
                front-end and a Python Back-end. <br />
                This was a solo project working on both the front-end and the
                back-end. <br />
                Tech Stack: Python, Javascript, React, React-Redux, Reactstrap,
                React-Router, Axios, Django.
              </Typography>
            </CardContent>
            <CardActions>
              <a
                href={'https://github.com/nncoultas/Python-Front-End'}
                style={{ textDecoration: 'none' }}
              >
                <Button className={classes.viewColor} size="small">
                  View Front-End Code
                </Button>
              </a>
              <a
                href={'https://github.com/nncoultas/djorg-cs8-1'}
                style={{ textDecoration: 'none' }}
              >
                <Button className={classes.viewColor} size="small">
                  View Back-End Code
                </Button>
              </a>
            </CardActions>
          </Card>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Projects);
