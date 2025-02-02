import React, { Component } from 'react';
import withStyles from '@mui/styles/withStyles';
import KeyboardArrowLeft from '@mui/icons/KeyboardArrowLeft';
import Typography from '@mui/core/Typography';
import { Link, withRouter } from 'react-router-dom';

const styles = theme => ({
  link: {
    textDecoration: 'none',
    color: 'inherit'
  },
  text: {
    display: 'inline-block',
    verticalAlign: 'text-bottom'
  }
});

class Back extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Typography variant="h6" gutterBottom>
          <Link className={classes.link} to={{ pathname: "/dashboard" }}>
            <KeyboardArrowLeft />
            <span className={classes.text}>Back to Dashboard</span>
          </Link>
        </Typography>
      </div>
    )
  }
}

export default withRouter(withStyles(styles)(Back));