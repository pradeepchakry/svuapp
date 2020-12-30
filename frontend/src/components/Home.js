import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import GroupIcon from "@material-ui/icons/Group";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { useHistory } from "react-router-dom";


function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://material-ui.com/">
          SVUDDE
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }
  
  const useStyles = makeStyles((theme) => ({
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
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));

export default function Home() {

  const history = useHistory();

  
  const classes = useStyles();
  const [firstLoad, setLoad] = React.useState(true);
  const [name, setName] = React.useState(true);
  const [gender, setGender] = React.useState(true);
  const [enrolNo, setEnrolNo] = React.useState(true);


  const[message, setMessage] = React.useState("Nothing saved in the session");

  const handleNameChange = event => setName(event.target.value);
  const handleGenderChange = event => setGender(event.target.value);
  const handleEnrolNo = event => setEnrolNo(event.target.value);

//   const routeChange = () =>{ 
//     let path = `/view`; 
//     history.push(path);
//   }

  async function saveApplication(toInput) {
    const response = await fetch("/svudde/saveForm", {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json"
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *client
      body: JSON.stringify(toInput) // body data type must match "Content-Type" header
    }).then(response => {
      if(!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      } else {
        console.log("Status: OK in Home");
        let responseText = document.createElement(response);
        console.log("Response " + JSON.stringify(response))
        document.body.appendChild(responseText);
      }
    })
    .catch(e => {
      console.log('There has been a problem with the fetch operation: ' + e.message)
    })
  }

  const handleFormSubmit = variables => {
    const toInput = {name, gender, "enrolmentNo": "bacasdfas"};
    saveApplication(toInput);
    setName("");
    setGender("");
  };

  if (firstLoad) {
    // sampleFunc();
    setLoad(false);
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Fill the Online Application Form
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="name"
            label="Name"
            name="name"
            autoComplete="name"
            onChange={handleNameChange}
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="gender"
            label="Gender"
            name="gender"
            autoComplete="gender"
            onChange={handleGenderChange}
            autoFocus
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleFormSubmit}
          >
            Save
          </Button>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}

