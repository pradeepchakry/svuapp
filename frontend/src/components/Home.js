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
  const [courseName, setCourseName] = React.useState(true);
  const [degree, setDegree] = React.useState(true);
  const [selectedDate, setSelectedDate] = React.useState(
    new Date("1998-04-02T21:11:54")
);
  const [doorNo, setDoorNo] = React.useState(true);
  const [street, setStreet] = React.useState(true);
  const [village, setVillage] = React.useState(true);
  const [pincode, setPincode] = React.useState(true);
  const [email, setEmail] = React.useState(true);
  const [fatherName, setFatherName] = React.useState(true);
  const [religion, setReligion] = React.useState(true);
  const [caste, setCaste] = React.useState(true);
  
  const [saveResponse, setSaveResponse] = React.useState(true);


  const[message, setMessage] = React.useState("Nothing saved in the session");

  const handleNameChange = event => setName(event.target.value);
  const handleGenderChange = event => setGender(event.target.value);
  const handleCourseName = event => setCourseName(event.target.value);
  const handleDegree = event => setDegree(event.target.value);
  const handleDateChange = date => setSelectedDate(date);
  const handleDoorNo = event => setDoorNo(event.target.value);
  const handleStreet = event => setStreet(event.target.value);
  const handleVillage = event => setVillage(event.target.value);
  const handlePincode = event => setPincode(event.target.value);
  const handleFatherName = event => setFatherName(event.target.value);
  const handleReligion = event => setReligion(event.target.value);
  const handleCaste = event => setCaste(event.target.value);

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
        console.log("SUCCESS")
        // console.log("Status: OK in Home -> Response: " + JSON.stringify(response.json()));
        // let responseText = document.createElement(response.json());
        // document.body.appendChild(responseText);
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
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="courseName"
            label="courseName"
            name="CourseName"
            autoComplete="courseName"
            onChange={handleCourseName}
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="degree"
            required
            fullWidth
            id="degree"
            label="degree"
            name="Degree"
            autoComplete="degree"
            onChange={handleDegree}
            autoFocus
          />
          <Grid item xs={12}>
                        <p>Date of birth</p>
                        <TextField
                            id="date"
                            lablel="Date of birth"
                            name="Date of Birth"
                            type="date"
                            defaultValue="1998-04-02"
                            className={classes.textField}
                            InputLabelProps={{
                                shrink: true
                            }}
                            onChange={handleDateChange}
                        />
                    </Grid>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="doorNo"
            label="doorNo"
            name="Door No."
            autoComplete="doorNo"
            onChange={handleDoorNo}
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="street"
            label="street"
            name="Street"
            autoComplete="street"
            onChange={handleStreet}
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="village"
            label="village"
            name="City/Town/Village"
            autoComplete="village"
            onChange={handleVillage}
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="pincode"
            label="pincode"
            name="Pincode"
            autoComplete="pincode"
            onChange={handlePincode}
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="fatherName"
            label="fatherName"
            name="Father's Name"
            autoComplete="fatherName"
            onChange={handleFatherName}
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="religiion"
            label="religiion"
            name="Religiion"
            autoComplete="religion"
            onChange={handleReligion}
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="caste"
            label="caste"
            name="Caste"
            autoComplete="caste"
            onChange={handleCaste}
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
      <div className="responseData">
        {setSaveResponse}
      
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}

