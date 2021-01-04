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
import Checkbox from './checkbox';
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

  const [courseApplied, setCourseApplied] = React.useState(true);

  const [name, setName] = React.useState(true);
  const [fatherName, setFatherName] = React.useState(true);
  const [aadharNo, setAadharNo] = React.useState(true);

  const [doorNo, setDoorNo] = React.useState(true);
  const [street, setStreet] = React.useState(true);
  const [village, setVillage] = React.useState(true);
  const [mandal, setMandal] = React.useState(true);
  const [district, setDistrict] = React.useState(true);
  const [pincode, setPincode] = React.useState(true);
  const [email, setEmail] = React.useState(true);

  const [gender, setGender] = React.useState(true);
  const[medium, setMedium] = React.useState(true);
  const[secondLanguageOpted, setSecondLanguageOpted] = React.useState(true);
  // DOB
  const [selectedDate, setSelectedDate] = React.useState(
    new Date("1998-04-02T21:11:54")
);
  
  const[maritalStatus, setMaritalStatus] = React.useState(true);
  const[nationality, setNationality] = React.useState(true);
  const [religion, setReligion] = React.useState(true);
  const [caste, setCaste] = React.useState(true);
  const[residential, setResidential] = React.useState(true);
  const[phCategory, setPhCategory] = React.useState(true);
  const [saveResponse, setSaveResponse] = React.useState(true);

  // Qualifying Examination
  const [university, setUniversity] = React.useState(true);
  const [yearAndMonthPassed, setYearAndMonth] = React.useState(
    new Date("2021-01-01T21:11:54")
  );
  const [groupSubject, setGroupSubject] = React.useState(true);
  const [maxMarks, setMaxMarks] = React.useState(true);
  const [marksObtained, setMarksObtained] = React.useState(true);
  const [percentageOfMarks, setPercentageOfMarks] = React.useState(true);

  // Fee particulars
  const [amount, setAmount] = React.useState(true);
  const [challanId, setChallanId] = React.useState(true);
  const [challanDate, setChallanDate] = React.useState(
    new Date("2021-01-01T21:11:54")
  );
  const [bankName, setBankName] = React.useState(true);

  const [declarationChecked, setDeclarationChecked] = React.useState(false);

  const handleNameChange = event => setName(event.target.value);
  const handleGenderChange = event => setGender(event.target.value);
  const handleAadharNo = event => setAadharNo(event.target.value);
  const handleCourseApplied = event => setCourseApplied(event.target.value);
  
  const handleDateChange = date => setSelectedDate(date);
  const handleDoorNo = event => setDoorNo(event.target.value);
  const handleStreet = event => setStreet(event.target.value);
  const handleVillage = event => setVillage(event.target.value);
  const handleMandal = event => setMandal(event.target.value);
  const handleDistrict = event => setDistrict(event.target.value);
  const handlePincode = event => setPincode(event.target.value);
  const handleFatherName = event => setFatherName(event.target.value);
  const handleReligion = event => setReligion(event.target.value);
  const handleCaste = event => setCaste(event.target.value);
  const handleEmail = event => setEmail(event.target.value);
  const handleSecondLanguage = event => setSecondLanguageOpted(event.target.value);
  const handleMedium = event => setMedium(event.target.value);
  const handleMaritalStatus = event => setMaritalStatus(event.target.value);
  const handleNationality = event => setNationality(event.target.value);
  const handleResidential = event => setResidential(event.target.value);
  const handlePhCategory = event => setPhCategory(event.target.value);

  const handleUniversity = event => setUniversity(event.target.value);
  const handleYearAndMonth = event => setYearAndMonth(event.target.value);
  const handleGroupSubject = event => setGroupSubject(event.target.value);
  const handleMaxMarks = event => setMaxMarks(event.target.value);
  const handleMarksObtained = event => setMarksObtained(event.target.value);
  const handlePercentageOfMarks = event => setPercentageOfMarks(event.target.value);


  const handleAmount = event => setAmount(event.target.value);
  const handleChallanId = event => setChallanId(event.target.value);
  const handleChallanDate = event => setChallanDate(event.target.value);
  const handleBankName = event => setBankName(event.target.value);
  

  function handleDeclarationChecked() {
    setDeclarationChecked(!declarationChecked);
  }

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
    variables.preventDefault();
    console.log("Declaration checked" + declarationChecked)
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
          Admission Application Form
        </Typography>
        <form className={classes.form} noValidate>

        <select defaultValue={""} 
            onChange={handleCourseApplied} 
        >
          <option value="Couse1">Course1</option>
          <option value="Course2">Course2</option>
          <option value="Course3">Course3</option>
        </select>
        
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="name"
            label="Name of the Applicant (as per lower degree )"
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
            id="fatherName"
            label="Father's Name"
            name="fatherName"
            autoComplete="fatherName"
            onChange={handleFatherName}
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="aadharNo"
            label="AADHAR No."
            name="aadharNo"
            autoComplete=""
            onChange={handleAadharNo}
            autoFocus
          />
          <p>Address for Communication:</p>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="doorNo"
            label="Door No."
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
            label="Street"
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
            label="Village/Post"
            name="village"
            autoComplete="village"
            onChange={handleVillage}
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="mandal"
            label="Mandal/Town"
            name="mandal"
            autoComplete="mandal"
            onChange={handleMandal}
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="district"
            label="District"
            name="district"
            autoComplete="mandal"
            onChange={handleDistrict}
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="pincode"
            label="Pincode"
            name="pincode"
            autoComplete="pincode"
            onChange={handlePincode}
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            onChange={handleEmail}
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

          <p>Medium</p>
          <select defaultValue={""} 
              onChange={handleMedium} 
          >
            <option value="English">English</option>
            <option value="Telugu">Telugu</option>
          </select>       
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="secondLanguage"
            label="(a) Second Language Opted under Part-I B:"
            name="secondLanguage"
            autoComplete="secondLanguage"
            onChange={handleSecondLanguage}
            autoFocus
          />
          <p>(B.Sc- English Medium only)</p>
          <p>(Only for B.A/B.Com/B.Sc)</p>
          <br></br>
          
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
          <br></br>
          <p>Marital Status</p>
          <select defaultValue={""} 
              onChange={handleMaritalStatus} 
          >
            <option value="Single">Single</option>
            <option value="Married">Married</option>
          </select>  
          <br></br>
          <p>Nationality</p>
          <select defaultValue={""} 
              onChange={handleNationality} 
          >
            <option value="Indian">Indian</option>
            <option value="Other">Other (Specify Country Below)</option>
          </select>
          <br></br>
          <p>Religion</p>
          <select defaultValue={""} 
              onChange={handleReligion} 
          >
            <option value="Hindu">Hindu</option>
            <option value="Muslim">Muslim</option>
            <option value="Christian">Christian</option>
            <option value="Sikh">Sikh</option>
            <option value="Others">Others</option>
          </select>
          <br></br>
          <p>Caste</p>
          <select defaultValue={""} 
              onChange={handleCaste} 
          >
            <option value="OC">OC</option>
            <option value="BC">BC</option>
            <option value="SC">SC</option>
            <option value="ST">ST</option>
            <option value="Others">Others</option>
          </select>

          <br></br>
          <p>Residential Status</p>
          <select defaultValue={""} 
              onChange={handleResidential} 
          >
            <option value="Urban">Urban</option>
            <option value="Rural">Rural</option>
            <option value="Tribal">Tribal</option>
          </select>

          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="phCategory"
            label="Physically Handicapped Category"
            name="phCategory"
            autoComplete="phCategory"
            onChange={handlePhCategory}
            autoFocus
          />

          <p>University/Board</p>
          <select defaultValue={""} 
              onChange={handleUniversity} 
          >
            <option value="SVUTirupati">Sri Venkateswara University</option>
            <option value="JNTUHyderabad">JNTU (Hyderabad)</option>
            <option value="JNTUAnantapur">JNTU (Anantapur)</option>
            <option value="Others">Others (Please specify below)</option>
          </select>

          <Grid item xs={12}>
                        <p>Year and Month Passing</p>
                        <TextField
                            id="date"
                            lablel="Year and Month Passing"
                            name="yearAndMonthPassing"
                            type="date"
                            defaultValue="1998-04-02"
                            className={classes.textField}
                            InputLabelProps={{
                                shrink: true
                            }}
                            onChange={handleYearAndMonth}
                        />
          </Grid>

          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="groupSubject"
            label="Group or Subject"
            name="groupSubject"
            autoComplete="groupSubject"
            onChange={handleGroupSubject}
            autoFocus
          />

          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="maxMarks"
            label="Maximum Marks"
            name="maxMarks"
            autoComplete="maxMarks"
            onChange={handleMaxMarks}
            autoFocus
          />

          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="marksObtained"
            label="Marks Obtained"
            name="marksObtained"
            autoComplete="marksObtained"
            onChange={handleMarksObtained}
            autoFocus
          />

          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="percentageOfMarks"
            label="Percentage of Marks"
            name="percentageOfMarks"
            autoComplete="percentageOfMarks"
            onChange={handlePercentageOfMarks}
            autoFocus
          />

          <p>Fee Particulars</p>

          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="amount"
            label="Fee Amount"
            name="amount"
            autoComplete="amount"
            onChange={handleAmount}
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="challanId"
            label="Paid Challan Id"
            name="challanId"
            autoComplete="challanId"
            onChange={handleChallanId}
            autoFocus
          />
          <Grid item xs={12}>
                        <p>Challan Payment Date</p>
                        <TextField
                            id="date"
                            lablel="Challan Payment Date"
                            name="challanPaymentDate"
                            type="date"
                            defaultValue="1998-04-02"
                            className={classes.textField}
                            InputLabelProps={{
                                shrink: true
                            }}
                            onChange={handleChallanDate}
                        />
          </Grid>

          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="bankName"
            label="Bank Name"
            name="bankName"
            autoComplete="bankName"
            onChange={handleBankName}
            autoFocus
          />

          {/* <Checkbox
            name="declaration"
            label="I hereby declare that the particulars given above are correct. In case if they are found to be incorrect
            at a later date, I submit myself for any action including removal from the rolls and such other disciplinary
            action under the ACT, the Statues and Ordinances rule of the University, I also agree to abide by the
            conditions, rules and regulations stipulated by the Directorate of distance Education and the Laws of the
            university applicable from time to time."
            
            checked={declarationChecked}
            onChange={handleDeclarationChecked}
          /> */}

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

