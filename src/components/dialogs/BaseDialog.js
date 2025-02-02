import React, { Component } from 'react';
import withStyles from '@mui/styles/withStyles';
import Dialog from '@mui/core/Dialog';
import DialogContent from '@mui/core/DialogContent';
import DialogContentText from '@mui/core/DialogContentText';
import DialogTitle from '@mui/core/DialogTitle';

const styles = theme => ({
  container: {
    maxWidth: 600,
    flexGrow: 1,
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  bottomMargin: {
    marginBottom: theme.spacing(2)
  }
});

class BaseDialog extends Component {
  render() {
    const { classes, open, onClose } = this.props;
    return (
      <Dialog
        open={open}
        onClose={onClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        scroll='body'
      >
        <DialogTitle id="alert-dialog-title"></DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <div className={classes.container}>
              {this.props.children}
            </div>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    )
  }
}

export default withStyles(styles)(BaseDialog);