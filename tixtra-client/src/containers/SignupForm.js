import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createUser } from '../actions';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));



const SignupForm = (props) => {
  const classes = useStyles();

  const [values, setValues] = React.useState({
    username: "",
    email: "",
    password: ""
  })

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value})
    console.log(values)
  };

  const handleSubmit = (event, values) => {
    event.preventDefault();
      fetch("http://localhost:3000/api/v1/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accepts": "application/json"
        },
        body: JSON.stringify(values)
      })
      .then(res => res.json())
      .then(response => {
        if (response.errors) {
  				alert(response.errors)
  			} else {
    				console.log("sign up", response)
    				localStorage.setItem("token", response.token)
    				props.createUser(response.user)
    				props.history.push(`/users/${response.user.id}`)
          }
      })
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate onSubmit={(event) => handleSubmit(event, values)}>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <TextField
                autoComplete="fname"
                name="username"
                value={values.username}
                variant="outlined"
                required
                fullWidth
                id="username"
                label="Name"
                autoFocus
                onChange={handleChange('username')}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                value={values.email}
                autoComplete="email"
                onChange={handleChange('email')}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                value={values.password}
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={handleChange('password')}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link to="/login" variant="body2">
                Already have an account? Log in!
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
      </Box>
    </Container>
  );
}

const mapStateToProps = state => ({
  username: state.username,
  password: state.password,
  currentUser: state.currentUser
})

export default connect(mapStateToProps, { createUser })(SignupForm);
