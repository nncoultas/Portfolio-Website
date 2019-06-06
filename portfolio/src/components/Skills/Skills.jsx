import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';
import { withStyles } from '@material-ui/core/styles';

import JavascriptIcon from './javascript-logo.png';
import HtmlIcon from './HTML-logo.png';
import CIcon from './C-Logo.png';
import PythonIcon from './Python-logo.png';

const styles = () => ({
  topPageStyle: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '2%',
    backgroundColor: '#f5f8fa',
    borderBottom: '1px solid rgba(0,0,0,.125)',
    borderTop: '1px solid rgba(0,0,0,.125)'
  },
  cardTitleStyle: {},
  CardContainerStyle: {
    display: 'flex',
    flexGrow: '1',
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  avatarStyle: {
    width: '7%',
    height: '0%'
  }
});

class Skills extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Typography>
          <Typography
            variant="display3"
            color="secondary"
            className={classes.topPageStyle}
          >
            Skills
          </Typography>
          <Typography>
            <Card>
              <CardContent>
                <Typography
                  className={classes.cardTitleStyle}
                  variant="headline"
                  color="Primary"
                >
                  Languages
                </Typography>
                <div className={classes.CardContainerStyle}>
                  <Avatar
                    src={JavascriptIcon}
                    className={classes.avatarStyle}
                  />
                  <Avatar src={HtmlIcon} className={classes.avatarStyle} />
                  <Avatar src={CIcon} className={classes.avatarStyle} />
                  <Avatar src={PythonIcon} className={classes.avatarStyle} />
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <Typography variant="headline" color="Primary">
                  Front-End
                </Typography>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <Typography variant="headline" color="Primary">
                  Back-End
                </Typography>
              </CardContent>
            </Card>
          </Typography>
        </Typography>
      </div>
    );
  }
}

export default withStyles(styles)(Skills);
