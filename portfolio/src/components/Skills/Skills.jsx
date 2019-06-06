import React from 'react';
import Chip from '@material-ui/core/Chip';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = () => {};

class Skills extends React.Component {
  copyEmail = () => {
    let textField = document.createElement('textarea');
    textField.innerText = 'nncoultas@yahoo.com';
    document.body.appendChild(textField);
    textField.select();
    document.execCommand('copy');
    textField.remove();
    document.getElementById('email').title =
      'My email address has been copied to your clipboard!';
  };
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Typography className="bottomPage">
          <Typography variant="display3" color="secondary">
            Skills
          </Typography>
          <Typography>
            <Typography variant="headline" color="Primary">
              Languages
            </Typography>
            <Typography variant="headline" color="Primary">
              Front-End
            </Typography>
            <Typography variant="headline" color="Primary">
              Back-End
            </Typography>
          </Typography>
        </Typography>
      </div>
    );
  }
}

export default withStyles(styles)(Skills);
