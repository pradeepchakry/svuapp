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
import PropTypes from 'prop-types';
import PasswordMask from 'react-password-mask';
import OtpInput from 'react-otp-input';
import ReactFormInputValidation from "react-form-input-validation";
import { useAppContext } from "../libs/contextLib";
import {BrowserRouter, Route} from 'react-router-dom';
import HomeComponent from './HomeComponent';


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
      <Link color="inherit" to="https://material-ui.com/">
        SVUDDE
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const routeChange = (userId) => { 
  // let path = `/home`;
  console.log("userId in routechange " + userId);
  window.user = true;
  window.userId = userId;
  history.push("/home");
}

class Login extends React.Component {

  
  isValidNumber = false;

  constructor(props) {
    super(props);
    // this.state = { phone: "", seen: false };
    
    this.state = {
      input: {}, 
      errors: {},
      phone: "",
      seen: false,
      otpEntered: "",
      otpSentSessionId: "",
      studentId: 0,
      studentExists: false,
      username: "",
      password: "",
      mobilevalidate: false,
      otp: "",
      loadDialog: false,
      phoneTrimmed: "",
      isUser: true
     };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.form = new ReactFormInputValidation(this);
    this.form.useRules({
        phone: "required|numeric|digits_between:10,12",
    });
    this.onformsubmit = (fields) => {
      // Do you ajax calls here.
    }

    

  }

  

  toggle = () => {
    //this.modifyPhone();
    let phoneEntered = this.state.phone;
    let phoneArr = phoneEntered.split("+91");
  
    let phoneTrimmed = phoneArr[1];
    console.log("phone after modifying -> " + phoneTrimmed)
    this.mobileValidate(phoneTrimmed)
  }

  updateState = () => {
    
    // let phone = Object.assign({}, this.state.phone);
    // phone = phoneTrimmed;
    // this.setState({phone});
    // console.log("phone updated to " + this.state.phone)
  }

   

  

  handlePhone = (phone) => {
    this.setState({phone: phone});
  }

  handleChange(event) {
    let input = this.state.input;
    input[event.target.name] = event.target.value;
    this.setState({     
      input
    });
  }

  modifyPhone = () => {
    console.log("modifying Phone " + this.state.phone);
    let phoneEntered = this.state.phone;
    let phoneArr = phoneEntered.split("+91");
  
    let phoneTrimmed = phoneArr[1];
    console.log("phone trimemd to " + phoneTrimmed);
    this.setState({ phoneTrimmed: phoneTrimmed});
    console.log("phone in state to " + this.state.phoneTrimmed);
  }

  // handleOTPEntered = (otpEntered) => {
  //   console.log("otp entered by student " + (this.state.otpEntered))
  //   this.setState({otpEntered: otpEntered})
  // }

  loginUser(input) {
    //fetch user authentication and redirect based on result
    console.log("Authentication success " + input);
    
    routeChange();
  }

  handleSubmit = (event) => {
    event.preventDefault();

    if(this.validate()){
        console.log(this.state);
        let input = {};
        

        // fetch to Authenticate and redirect
        routeChange(this.state.input.username);

        input["username"] = "";
        input["password"] = "";
        input["confirm_password"] = "";
        this.setState({input:input});
    }

  }

  validate() {
    let input = this.state.input;
    let errors = {};
    let isValid = true;
    if (!input["username"]) {
        isValid = false;
        errors["username"] = "Please enter your username.";
    }
    
    if (typeof input["username"] !== "undefined") {
        const re = /^\S*$/;
        if(input["username"].length < 6 || !re.test(input["username"])) {
          isValid = false;
          errors["username"] = "Please enter valid username.";
        }
    }
    
    if (!input["password"]) {
      isValid = false;
      errors["password"] = "Please enter your password.";
    }

    this.setState({
      errors: errors
    });
    return isValid;
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

  mobileValidate(text) {
    console.log("In mobileValidate " + text)
    const reg = /^[0]?[789]\d{9}$/;
    if (reg.test(text) === false) {
      this.setState({
        mobilevalidate: false
      });
    } else {
      console.log("valid mobile number, setting true");
      this.isValidNumber = true;
    }
    //this.setState()
  }

  handleStudentSubmit = (e) => {
    this.toggle();
    console.log("valid mobile number " + this.isValidNumber);
    if(!this.isValidNumber) {
      alert("Enter a vaild mobile number");
    } else {
      return (<OtpInput
        onChange={this.handleOTPInput}
        numInputs={6}
        separator={<span>-</span>}
      />)
    }
  
  }

  renderOtpInput = () => {
    return (<OtpInput
        onChange={this.handleOTPInput}
        numInputs={6}
        separator={<span>-</span>}
      />)
  }
  
  render() {
  const { classes } = this.props;

  return (  
    <Container className={useStyles.paper} component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Study Center Sign in
        </Typography>

        {this.props.isStudent && <h1>Study Center Login</h1>}

        <form onSubmit={this.handleSubmit}>
          <div class="form-group">
            <label for="username">Username </label>
            <input 
              type="text" 
              name="username" 
              value={this.state.input.username}
              onChange={this.handleChange}
              class="form-control" 
              placeholder="Enter username" 
              id="username" />
          <div className="text-danger">{this.state.errors.username}</div>
        </div>
        <div class="form-group">
            <label for="password">Password </label>
            <input 
              type="password" 
              name="password" 
              value={this.state.input.password}
              onChange={this.handleChange}
              class="form-control" 
              placeholder="Enter password" 
              id="password" />
          <div className="text-danger">{this.state.errors.username}</div>
        </div>
        <div className="text-danger">{this.state.errors.password}</div>
        <input type="submit" value="Submit" class="btn btn-success" />
      </form>   
  </div>
  <Box mt={8}>
    <Copyright />
  </Box>
</Container>
);
}

}

Login.propTypes = {
  classes: PropTypes.object.isRequired,
}

// export default Login;

export default withStyles(useStyles, { withTheme: true })(Login)
  

