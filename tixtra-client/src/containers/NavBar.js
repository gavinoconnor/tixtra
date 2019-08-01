import React from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../actions';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
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

const NavBar = (props) => {

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
        <AppBar position="static" style={{backgroundColor: "#212121"}}>
            <Toolbar>
              <LocalActivityOutlinedIcon/>
              <Typography variant="h5" color="textSecondary">
                  <Link to="/"> <Button size="large" style={{color:"white", fontSize: "30px", fontWeight: "bold"}}> Tixtra </Button> </Link>
              </Typography>
                <LocalActivityOutlinedIcon/>&nbsp;&nbsp;
                <div className="nav-options" style={{display: 'flex', flexDirection: 'row', justify: 'center'}}>
                <Typography variant="h5" color="textSecondary">
                  <Link to="/users"> <Button style={{color:"white"}}> Users </Button> </Link>
                </Typography>&nbsp;&nbsp;
                <Typography variant="h5" color="textSecondary">
                  <Link to="/events"> <Button style={{color:"white"}}> Events </Button> </Link>
                </Typography>&nbsp;&nbsp;
                <Typography variant="h5" color="textSecondary">
                  <Link to="/venues"> <Button style={{color:"white"}}> Venues </Button> </Link>
                </Typography>&nbsp;&nbsp;
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
                    {props.currentUser
                    ? <Link to={`/users/${props.currentUser.id}`}>
                        Profile
                      </Link>
                    : <Link to="/">
                        Log In
                      </Link>}
                  </MenuItem>
                  <MenuItem
                    onClick={props.logout}>
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

const mapStateToProps = state => ({
  currentUser: state.currentUser,
  viewedUser: state.viewedUser,
  events: state.events,
  users: state.users,
  venues: state.venues,
})

export default connect(mapStateToProps, { logout })(NavBar);
