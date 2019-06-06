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
        <Typography className={classes.border} />
        <Typography className="bottomPage">
          <Typography
            variant="display3"
            color="secondary"
            className={classes.expStyle}
          >
            Skills
          </Typography>
          <Typography className={classes.skillsTitle}>
            <Typography variant="headline" color="Primary">
              Languages
            </Typography>
            <Typography
              variant="headline"
              color="Primary"
              className={classes.frontEndTitle}
            >
              Front-End
            </Typography>
            <Typography
              variant="headline"
              color="Primary"
              className={classes.backEndTitle}
            >
              Back-End
            </Typography>
          </Typography>
          <Typography className={classes.skillsStyled}>
            <Typography
              className={`${classes.skillsStyled} ${classes.languagesSkills}`}
            >
              <Chip
                label="Javascript"
                color="primary"
                className={classes.chipList}
              />
              <Chip label="C" color="primary" className={classes.chipList} />
              <Chip
                label="Python"
                color="primary"
                className={classes.chipList}
              />
            </Typography>
            <Typography
              className={`${classes.skillsStyled} ${classes.frontEndSkills}`}
            >
              <Chip
                label="React"
                color="primary"
                className={classes.chipList}
              />
              <Chip
                label="React-Router"
                color="primary"
                className={classes.chipList}
              />
              <Chip
                label="Redux"
                color="primary"
                className={classes.chipList}
              />
              <Chip
                label="Bootstrap"
                color="primary"
                className={classes.chipList}
              />
              <Chip
                label="Material-UI"
                color="primary"
                className={classes.chipList}
              />
              <Chip
                label="HTML/CSS"
                color="primary"
                className={classes.chipList}
              />
              <Chip label="LESS" color="primary" className={classes.chipList} />
              <Chip
                label="HTTP/AJAX"
                color="primary"
                className={classes.chipList}
              />
              <Chip
                label="Axios"
                color="primary"
                className={classes.chipList}
              />
            </Typography>
            <Typography
              className={`${classes.skillsStyled} ${classes.backEndSkills}`}
            >
              <Chip
                label="MongoDB"
                color="primary"
                className={classes.chipList}
              />
              <Chip
                label="PostgreSQL"
                color="primary"
                className={classes.chipList}
              />
              <Chip
                label="Sequelize"
                color="primary"
                className={classes.chipList}
              />
              <Chip
                label="Node.js"
                color="primary"
                className={classes.chipList}
              />
              <Chip
                label="Express.js"
                color="primary"
                className={classes.chipList}
              />
              <Chip
                label="Django"
                color="primary"
                className={classes.chipList}
              />
              <Chip label="JWT" color="primary" className={classes.chipList} />
              <Chip
                label="Bcrypt"
                color="primary"
                className={classes.chipList}
              />
            </Typography>
          </Typography>
        </Typography>
      </div>
    );
  }
}

export default withStyles(styles)(Skills);
