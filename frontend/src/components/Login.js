import React, { useState } from "react";
import Popup from 'reactjs-popup';


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
import { Redirect } from "react-router-dom";
import history from './history';
import 'react-phone-number-input/style.css'
import PhoneInput2 from 'react-phone-number-input';
import { withStyles } from "@material-ui/core/styles";
import PhoneInput from 'react-phone-number-input/input';
// import Prompt from './Prompt';

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

const Copyright = () => {
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

const routeChange = () => { 
  // let path = `/home`; 
  history.push("/home");
}

class Login extends React.Component {
  constructor(props) {
    super(props);
    // this.state = { phone: "", seen: false };
  }

  async handleSendOTP() {
    this.modifyPhone();
    // console.log("sending otp to " + this.state.phone);
    // let endPoint = "https://2factor.in/API/V1/f3e5e9af-4bfb-11eb-8153-0200cd936042/SMS/" + this.state.phone + "/AUTOGEN";
    // await fetch(endPoint)
    //     .then(res => res.json())
    //     .then((data) => {
    //       this.setState({ otpSentSessionId: data.Details })
    //     })
    //     .catch(console.log)
    // console.log("otp sent sessionID >> " + this.state.otpSentSessionId);
    
  }

   checkExistingStudent(input) {
    console.log("In checkExistingStudent...")
    let result = null;
    let endPoint = "http://159.203.148.240:8080/api/v1/Student/" + input;
     fetch(endPoint)
        .then(res => {
          if(!res.ok) {
            console.log("No Student found with the number " + input 
                + " redirecting to new application!");
            routeChange();
          } else {
            console.log("Found an existing record with the number " + input
                + " enrolled, fethcing record!");

            fetch("http://159.203.148.240:8080/api/v1/Student/" + this.state.phone)
                .then(resp => resp.json())
                .then((data) => {
                  console.log("Existing student details --> " + JSON.stringify(data));
                  this.setState({studentId: data.student_id});
                })
          }
        }
        ).catch(console.log);
  }

   async verifyOTP(otpReceived) {
    console.log(otpReceived);
    let validMobile = false;
    let endPoint = "https://2factor.in/API/V1/f3e5e9af-4bfb-11eb-8153-0200cd936042/SMS/VERIFY/" + this.state.otpSentSessionId + "/" + otpReceived;
    await fetch(endPoint)
        .then(res => {
          console.log("otp verification >> " + res.staus);
          if(!res.ok) {
                throw new Error(`HTTP error! status: ${res.status}`);
            } else {
                console.log("Status: OK");
                validMobile = true;
            }           
        })
        .catch(console.log);
    return validMobile;
  }

  state = {
    phone: "",
    seen: false,
    otpEntered: "",
    otpSentSessionId: "",
    studentId: 0,
    studentExists: false
   };

  handlePhone = (phone) => {
    this.setState({phone: phone});  
  }

  modifyPhone = () => {
    console.log("modifying Phone " + this.state.phone);
    let phoneEntered = this.state.phone;
    let phoneArr = phoneEntered.split("+91");
    console.log("phone trimemd to " + phoneArr[1]);
    let phoneTrimmed = phoneArr[1];
    this.setState({phone: phoneTrimmed});
  }

  // handleOTPEntered = (otpEntered) => {
  //   console.log("otp entered by student " + (this.state.otpEntered))
  //   this.setState({otpEntered: otpEntered})
  // }

  

  handleOTPSubmit = () => {
    let studentExists = false;
    let input = this.state.otpEntered;
    // if(!this.verifyOTP(input)) {
    //   console.log("OTP verification failed, Ask user to resend or use a different mobile number!");
    // } else {
      console.log("verifying if the mobile number is already registered! " + this.state.phone);
      this.checkExistingStudent(this.state.phone);
  // }
  }

  

  // handleUserId = (event) => {    
  //   this.setState({userId: event.target.value});  
  // }

  // handlePassword = (event) => {    
  //   this.setState({password: event.target.value});  
  // }

  getPhone = () => {
    return this.state.phone
  }
  
  render() {
  const { classes } = this.props;
  return (

    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        
        {/* <form className={classes.form} noValidate> */}

        <PhoneInput
          defaultCountry="IN"
          value={this.state.phone}
          placeholder="Enter phone number"
          onChange={this.handlePhone} />
          
        <div className="btn">
        <Popup
          trigger={<button className="button" onFocus={() => {this.handleSendOTP()}} > Sign In </button>} modal nested >
            {

              

close => (
  <div className="modal">
    <button className="close" onClick={close}>
      &times;
    </button>
    <div className="header"> Enter the OTP sent to your Mobile Number </div>
    <div className="content">
      {' '}
      <TextField
            variant="outlined"
            margin="normal"
            required
            id="otpEntered"
            label="One Time Password"
            name="otpEntered"
            autoComplete=""
            defaultValue={this.state.otpEntered}
            onChange={event => {
              const { value } = event.target;
              this.setState({ otpEntered: value });
            }}
            autoFocus
          />
    </div>
    <div className="actions">
      <button
        className="button"
        onClick={() => {
          console.log('clicked submit');
          this.handleOTPSubmit();
        }}
      >
        Submit
      </button>
      <button
        className="button"
        onClick={() => {
          console.log('modal closed ');
          close();
        }}
      >
        Change Mobile Number
      </button>
    </div>
  </div>
)
            }
          </Popup>
          </div>
        </div>
       <Box mt={8}>
         <Copyright />
       </Box>
     </Container>
  );
 }
}

// export default Login;

export default withStyles(useStyles, { withTheme: true })(Login);
