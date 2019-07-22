import React from 'react'
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import LocalActivityOutlinedIcon from '@material-ui/icons/LocalActivity';

import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';

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

const handleClick = () => {
  console.log('click')
}

function ButtonAppBar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
   const open = Boolean(anchorEl);

   // function handleChange(event) {
   //   setAuth(event.target.checked);
   // }

   function handleMenu(event) {
     setAnchorEl(event.currentTarget);
   }

   function handleClose() {
     setAnchorEl(null);
   }

    return(
        <div className={classes.root}>
        <AppBar position="static">
            <Toolbar>
              <LocalActivityOutlinedIcon/>
                <Typography variant="h4" color="textSecondary">
                Tixtra
                </Typography>
                <LocalActivityOutlinedIcon/>
                <IconButton edge="end" className={classes.menuButton} color="inherit" aria-label="Menu" aria-haspopup="true" onClick={handleMenu}>
                  <MenuIcon/>
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={open}
                  onClose={handleClose}
                >
                  <MenuItem onClick={handleClose}>Profile</MenuItem>
                  <MenuItem onClick={handleClose}>My account</MenuItem>
                </Menu>
            </Toolbar>
        </AppBar>
        </div>
    )
}
export default ButtonAppBar;
