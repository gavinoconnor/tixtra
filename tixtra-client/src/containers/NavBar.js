import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import LocalActivityOutlinedIcon from '@material-ui/icons/LocalActivity';

import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: 'auto',
  },
  title: {
    flexGrow: 1,
  },
}));

function ButtonAppBar() {
  const classes = useStyles();
    return(
        <div className={classes.root}>
        <AppBar position="static">
            <Toolbar>
              <LocalActivityOutlinedIcon/>
                <Typography variant="h4" color="textSecondary">
                Tixtra
                </Typography>
                <LocalActivityOutlinedIcon/>
                <IconButton edge="end" className={classes.menuButton} color="inherit" aria-label="Menu">
                  <MenuIcon />
                </IconButton>
            </Toolbar>
        </AppBar>
        </div>
    )
}
export default ButtonAppBar;
