import React from 'react'
import { Link } from 'react-router-dom';
// import { Router } from 'react-router';

import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import InputBase from '@material-ui/core/InputBase';
import LocalActivityOutlinedIcon from '@material-ui/icons/LocalActivity';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import SearchIcon from '@material-ui/icons/Search';
// import Link from '@material-ui/core/Link';

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
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 120,
      '&:focus': {
        width: 200,
      },
    },
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
                <Typography variant="h5" color="textPrimary">&nbsp;&nbsp;
                  <Link to="/events"> Tixtra </Link>
                </Typography>&nbsp;&nbsp;
                <LocalActivityOutlinedIcon/>
                <div className={classes.search}>
                  <div className={classes.searchIcon}>
                    <SearchIcon />
                  </div>
                  <InputBase
                    placeholder="Search…"
                    classes={{
                      root: classes.inputRoot,
                      input: classes.inputInput,
                    }}
                    inputProps={{ 'aria-label': 'Search' }}
                  />
                </div>
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
                  <MenuItem
                    onClick={handleClose}>
                    Profile
                  </MenuItem>
                  <MenuItem
                    onClick={handleClose}>
                    <Link to="/">
                      Log Out
                    </Link>
                  </MenuItem>
                </Menu>
            </Toolbar>
        </AppBar>
        </div>
    )
}
export default ButtonAppBar;
