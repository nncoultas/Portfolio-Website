import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import LambdaIcon from './1_iTABE417EkZDwRv9Uj91Qg.png';
import BestBuyIcon from './Best-Buy-Logo.gif';
import SafetyKleenIcon from './Safety-Kleen-Logo.png';

const styles = theme => ({
  topPageStyle: {
    color: 'white',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '1%',
    backgroundColor: '#76c1d4',
    borderBottom: '1px solid rgba(0,0,0,.125)'
  },
  bottomPageStyle: {
    display: 'flex',
    marginTop: '2%',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '30%',
    flexDirection: 'column',
    [theme.breakpoints.down('sm')]: {
      width: '97%'
    }
  },
  companyStyle: {
    display: 'flex',
    justifyContent: 'space-between',
    flexGrow: 1,
    paddingTop: '4%',
    paddingBottom: '4%',
    borderBottom: '1px solid rgba(0,0,0,.125)'
  },
  cardStyle: {
    marginBottom: '10%'
  },
  cardContentStyle: {
    paddingTop: '5%'
  },
  cardFooterStyle: {
    paddingTop: '6%',
    fontSize: '87%'
  },
  workLogoStyle: {
    overflow: 'inherit'
  }
});
class Experience extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Typography>
          <Typography className={classes.topPageStyle} variant="display3">
            Experience
          </Typography>
          <Typography className={classes.bottomPageStyle}>
            <Card className={classes.cardStyle}>
              <CardContent>
                <Typography
                  className={classes.companyStyle}
                  variant="h1"
                  component="h2"
                  color="primary"
                >
                  <Avatar className={classes.workLogoStyle} src={LambdaIcon} />
                  Lambda School
                  <Typography>Software Engineer</Typography>
                </Typography>
                <Typography
                  className={classes.cardContentStyle}
                  color="primary"
                >
                  <ul>
                    <li>
                      6+ months Full-Time CS Fundamental/software development
                      program
                    </li>
                    <li>
                      Gained experience working with clients and understanding
                      client demands by <br /> collaborating on full lifecycle
                      projects.{' '}
                    </li>
                    <li>
                      {' '}
                      Completed all curriculum coursework including; <br />{' '}
                      React, react native, redux, node, express, mongoDB, mocha,
                      chai, python, django. <br />
                    </li>
                    <li>
                      {' '}
                      Hands on experience with client and server testing, paired
                      programming, and CS fundamentals.
                    </li>
                  </ul>
                </Typography>
                <Typography
                  className={classes.cardFooterStyle}
                  variant="subtitle1"
                  color="textSecondary"
                >
                  February 2018 - August 2018
                </Typography>
              </CardContent>
            </Card>
            <Card className={classes.cardStyle}>
              <CardContent>
                <Typography
                  className={classes.companyStyle}
                  variant="h1"
                  component="h2"
                  color="primary"
                >
                  <Avatar
                    className={classes.workLogoStyle}
                    src={SafetyKleenIcon}
                  />
                  Safety-Kleen
                  <Typography> Utility Rep </Typography>
                </Typography>
                <Typography
                  className={classes.cardContentStyle}
                  color="primary"
                >
                  <ul>
                    <li>
                      {' '}
                      I am the relief Sales Route Truck Driver/Oil Tanker Truck
                      Driver when the work load for current drivers is heavy.{' '}
                    </li>
                    <li>
                      {' '}
                      When taking over a sales route/oil route I am required to
                      route myself the most efficiently and driving a box
                      truck/oil tanker truck to clients shops/warehouses and
                      help sell oil, parts washer, pig mats, degreaser. I also
                      am required to service the parts washers, pick up
                      hazardous waste, and pick up used oil at each shop or
                      dealershhip and am always looking for an opportunity in
                      each shop to sell any product we have to help make a
                      clients life easier and better or to solve a customers
                      problem that I observe while walking through a
                      shop/warehouse.
                    </li>
                    <li>
                      {' '}
                      I also contribute to the admin/warehouse manager with
                      paperwork for shipping out waste to meet EPA (enviormental
                      protection agency) standards and putting paperwork
                      together for the route drivers so they have all the labels
                      and everything needed for their job at each shop.
                    </li>
                    <li>
                      I help the sales team with new prospects/proposals for
                      customers by doing cold calls to shops in the area to help
                      grow the business in any aspect possible
                    </li>
                  </ul>
                </Typography>
                <Typography
                  className={classes.cardFooterStyle}
                  variant="subtitle1"
                  color="textSecondary"
                >
                  March 2019 - Current
                </Typography>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <Typography
                  className={classes.companyStyle}
                  variant="h1"
                  component="h2"
                  color="primary"
                >
                  <Avatar className={classes.workLogoStyle} src={BestBuyIcon} />
                  Best Buy
                  <Typography> Sales Asscoiate</Typography>
                </Typography>
                <Typography
                  className={classes.cardContentStyle}
                  color="primary"
                >
                  <ul>
                    <li>
                      Home Theater/Computer sales associate with a team of 5+
                      people
                    </li>
                    <li>
                      Required to hit a quota of sales each month both personal
                      and section wide.
                    </li>
                  </ul>
                </Typography>
                <Typography
                  className={classes.cardFooterStyle}
                  variant="subtitle1"
                  color="textSecondary"
                >
                  November 2016 - March 2019
                </Typography>
              </CardContent>
            </Card>
          </Typography>
        </Typography>
      </div>
    );
  }
}

export default withStyles(styles)(Experience);
