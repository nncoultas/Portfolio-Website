import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';
import { withStyles } from '@material-ui/core/styles';

import backgroundImage from './background-image.jpg';
import JavascriptIcon from './javascript-logo.png';
import HtmlIcon from './HTML-logo.png';
import CIcon from './C-Logo.png';
import PythonIcon from './Python-logo.png';
import CSS3Icon from './css3-logo.png';
import ReactIcon from './React-logo.png';
import BootstrapIcon from './bootstrap-logo.jpg';
import LessIcon from './less-logo.png';
import PostgreSQLIcon from './postgreSQL-logo.png';
import MongoDBIcon from './MongoDB-logo.jpg';
import NodeJSIcon from './nodejs-logo.jpg';
import DjangoIcon from './django-logo.png';

const styles = theme => ({
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
    marginBottom: '2%',
    backgroundColor: '#76c1d4',
    borderBottom: '1px solid rgba(0,0,0,.125)'
  },
  cardStyle: {
    marginBottom: '5%'
  },
  cardTitleStyle: {
    color: '#3d7c47',
    marginBottom: '1%'
  },
  border: {
    borderBottom: '1px solid rgba(0,0,0,.125)',
    marginBottom: '2%'
  },
  cardLogoStyle: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '100%',
    width: '12%',
    paddingRight: '9%',
    [theme.breakpoints.down('sm')]: {
      width: '40%'
    }
  },
  avatarStyle: {
    width: '33%',
    height: '32%'
  },
  cardContainerStyle: {
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'row',
      flexWrap: 'wrap'
    }
  }
});

class Skills extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.backgroundImageStyle}>
        <Typography>
          <Typography variant="display3" className={classes.topPageStyle}>
            Skills
          </Typography>
          <Typography>
            <Card className={classes.cardStyle}>
              <CardContent>
                <Typography
                  className={classes.cardTitleStyle}
                  variant="headline"
                >
                  Languages
                </Typography>
                <Typography className={classes.border} />
                <div className={classes.cardContainerStyle}>
                  <Typography className={classes.cardLogoStyle}>
                    <Avatar
                      className={classes.avatarStyle}
                      src={JavascriptIcon}
                    />
                    <p>Javascript</p>
                  </Typography>
                  <Typography className={classes.cardLogoStyle}>
                    <Avatar className={classes.avatarStyle} src={CIcon} />
                    <p>C</p>
                  </Typography>
                  <Typography className={classes.cardLogoStyle}>
                    <Avatar className={classes.avatarStyle} src={PythonIcon} />
                    <p>Python</p>
                  </Typography>
                </div>
              </CardContent>
            </Card>
            <Card className={classes.cardStyle}>
              <CardContent>
                <Typography
                  className={classes.cardTitleStyle}
                  variant="headline"
                >
                  Front-End
                </Typography>
                <Typography className={classes.border} />
                <div className={classes.cardContainerStyle}>
                  <Typography className={classes.cardLogoStyle}>
                    <Avatar className={classes.avatarStyle} src={HtmlIcon} />
                    <p>HTML</p>
                  </Typography>
                  <Typography className={classes.cardLogoStyle}>
                    <Avatar className={classes.avatarStyle} src={CSS3Icon} />
                    CSS3
                  </Typography>
                  <Typography className={classes.cardLogoStyle}>
                    <Avatar className={classes.avatarStyle} src={ReactIcon} />
                    React
                  </Typography>
                  <Typography className={classes.cardLogoStyle}>
                    <Avatar
                      className={classes.avatarStyle}
                      src={BootstrapIcon}
                    />
                    Bootstrap
                  </Typography>
                  <Typography className={classes.cardLogoStyle}>
                    <Avatar className={classes.avatarStyle} src={LessIcon} />
                    Less
                  </Typography>
                </div>
              </CardContent>
            </Card>
            <Card className={classes.cardStyle}>
              <CardContent>
                <Typography
                  className={classes.cardTitleStyle}
                  variant="headline"
                >
                  Back-End
                </Typography>
                <Typography className={classes.border} />
                <div className={classes.cardContainerStyle}>
                  <Typography className={classes.cardLogoStyle}>
                    <Avatar
                      className={classes.avatarStyle}
                      src={PostgreSQLIcon}
                    />
                    PostgreSQL
                  </Typography>
                  <Typography className={classes.cardLogoStyle}>
                    <Avatar className={classes.avatarStyle} src={MongoDBIcon} />
                    MogoDB
                  </Typography>
                  <Typography className={classes.cardLogoStyle}>
                    <Avatar className={classes.avatarStyle} src={NodeJSIcon} />
                    Node
                  </Typography>
                  <Typography className={classes.cardLogoStyle}>
                    <Avatar className={classes.avatarStyle} src={DjangoIcon} />
                    Django
                  </Typography>
                </div>
              </CardContent>
            </Card>
          </Typography>
        </Typography>
      </div>
    );
  }
}

export default withStyles(styles)(Skills);
