import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import backgroundImage from './background-image.jpg';
import Macbook from './clement-h-544786-unsplash.jpg';
import './Blog.css';

const styles = {
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
    maxWidth: 462,
    marginTop: 68
  },
  media: {
    height: 0,
    paddingTop: '56.25%'
  },
  blogColor: {
    color: '#76c1d4'
  },
  readColor: {
    color: '#3d7c47'
  }
};

class Blog extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.backgroundImageStyle}>
        <Typography className={classes.topPageStyle} variant="display3">
          Blog
        </Typography>
        <div className="blogView">
          <Card className={classes.card}>
            <CardMedia
              className={classes.media}
              image={Macbook}
              title="macbook"
            />
            <CardContent>
              <Typography
                className={classes.blogColor}
                gutterBottom
                variant="headline"
                component="h2"
              >
                5 Ways A Coding Academy Teaches You How To Be A Programmer
              </Typography>
              <Typography component="p">
                Background My name is Nick Coultas and I currently reside in
                Reno, Nevada. There is a very small community here as far as
                Programmers/Developers go. I soon realized this when I
                started....
              </Typography>
            </CardContent>
            <CardActions>
              <a
                href={
                  'https://medium.com/@nncoultas/5-ways-a-coding-academy-teaches-you-how-to-be-a-programmer-41e13b4e33c8'
                }
                style={{ textDecoration: 'none' }}
              >
                <Button className={classes.readColor} size="small">
                  Read More
                </Button>
              </a>
            </CardActions>
          </Card>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Blog);
