import React from 'react';
import Typography from '@mui/core/Typography';
import withStyles from '@mui/styles/withStyles';

const styles = theme => ({
  loadingMessage: {
    position: 'absolute',
    top: '40%',
    left: '40%'
  }
});

function Loading(props) {
  const { classes, loading } = props;
  return (
    <div style={loading ? { display: 'block' } : { display: 'none' }} className={classes.loadingMessage}>
      <span role='img' aria-label='emoji' style={{ fontSize: 58, textAlign: 'center', display: 'inline-block', width: '100%' }}>👋</span>
      <Typography variant="h6">
        Waiting for input
      </Typography>
    </div>
  );
}

export default withStyles(styles)(Loading);