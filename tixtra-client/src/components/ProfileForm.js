import React from 'react';
import { connect } from 'react-redux';
import { updateUser } from '../actions';

import { makeStyles } from '@material-ui/core/styles';
// import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
// import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const ProfileForm = (props) => {
  const classes = useStyles();

  const [values, setValues] = React.useState({
    age: props.currentUser.age,
    location: props.currentUser.location,
    gender: props.currentUser.gender,
    interest: props.currentUser.interest,
    avatar: props.currentUser.avatar,
    bio: props.currentUser.bio
  })

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value})
    console.log(values)
  };

  const handleSubmit = (event, values) => {
    console.log(values)
    event.preventDefault();
    console.log(props)
    fetch(`http://localhost:3000/api/v1/users/${props.currentUser.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Accepts": "application/json"
      },
      body: JSON.stringify(values)
    })
    .then(res => res.json())
    .then(response => {
      console.log(response)
      if (response.errors) {
        alert(response.errors)
      } else {
				props.updateUser(response.user)
				props.history.push(`/users/${props.currentUser.id}`)
      }
    })
}
    return (
      <div>
        <form className={classes.form} noValidate onSubmit={(event) => handleSubmit(event, values)}>
        <TextField
        className={classes.margin}
        id="input-with-icon-textfield"
        label="Age"
        name="age"
        value={values.age}
        onChange={handleChange('age')}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          ),
        }}
      />
      <TextField
      className={classes.margin}
      id="input-with-icon-textfield"
      label="Location"
      name="location"
      value={values.location}
      onChange={handleChange('location')}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <AccountCircle />
          </InputAdornment>
        ),
      }}
    />
      <TextField
      className={classes.margin}
      id="input-with-icon-textfield"
      label="Gender"
      name="gender"
      value={values.gender}
      onChange={handleChange('gender')}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <AccountCircle />
          </InputAdornment>
        ),
      }}
    />
      <TextField
      className={classes.margin}
      id="input-with-icon-textfield"
      label="Interest"
      name="interest"
      value={values.interest}
      onChange={handleChange('interest')}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <AccountCircle />
          </InputAdornment>
        ),
      }}
    />
    <TextField
    className={classes.margin}
    id="input-with-icon-textfield"
    label="Profile picture"
    name="avatar"
    value={values.avatar}
    onChange={handleChange('avatar')}
    InputProps={{
      startAdornment: (
        <InputAdornment position="start">
          <AccountCircle />
        </InputAdornment>
      ),
    }}
  />
    <TextField
    className={classes.margin}
    id="input-with-icon-textfield"
    label="Bio"
    name="bio"
    value={values.bio}
    onChange={handleChange('bio')}
    InputProps={{
      startAdornment: (
        <InputAdornment position="start">
          <AccountCircle />
        </InputAdornment>
      ),
    }}
  />
    <Button
      type="submit"
      fullWidth
      variant="contained"
      color="primary"
      className={classes.submit}
    >
      Save Changes
    </Button>
  </form>
      </div>
    )
  }

const mapStateToProps = state => ({
  currentUser: state.currentUser
})

export default connect(mapStateToProps, { updateUser })(ProfileForm);
