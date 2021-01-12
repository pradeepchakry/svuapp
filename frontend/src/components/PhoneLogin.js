import React, { useState } from "react";
import Popup from 'reactjs-popup';
import VerifyModal from "./VerifyModal";


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
import ReactModalLogin from 'react-modal-login';
import HomeComponent from './HomeComponent'


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

const routeChange = () => { 
  // let path = `/home`; 
  history.push("/home");
}

class PhoneLogin extends React.Component {

  isValidNumber = false;

  constructor(props) {
    super(props);
    // this.state = { phone: "", seen: false };
    // this.state = {
    //   input: {}, 
    //   errors: {
    //     phone: ""
    //   },
    //   phone: "",
    //   seen: false,
    //   otpEntered: "",
    //   otpSentSessionId: "",
    //   studentId: 0,
    //   studentExists: false,
    //   username: "",
    //   password: "",
    //   mobilevalidate: false,
    //   otp: "",
    //   loadDialog: false,
    //   phoneTrimmed: ""
    //  };
    this.state = {
      fields: {
        phone: ""
      },
      errors: {},
      showModal: false,
      loading: false,
      error: null,
      modalOpen: false,
      otp: "",
      otpVerified: false,
      otpSentSessionId: ""
    };
    // this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
    this.form = new ReactFormInputValidation(this);
    this.form.useRules({
        phone: "required|numeric|digits_between:10,12",
    });
    this.form.onformsubmit = (event) => {
      console.log("phone entered --> " + this.state.fields.phone)
      this.openModal();
    }
  }

  // openModal() {
  //   this.setState({
  //     showModal: true,
  //   });
  //   this.handleSendOTP();
  // }

  closeModal() {
    this.setState({
      showModal: false,
      error: null
    });
  }
  
  onLoginSuccess(method, response) {
    console.log('logged successfully with ' + method);
  }

  onLoginFail(method, response) {
    console.log('logging failed with ' + method);
    this.setState({
      error: response
    })
  }

  startLoading() {
    this.setState({
      loading: true
    })
  }

  finishLoading() {
    this.setState({
      loading: false
    })
  }

  onTabsChange() {
    this.setState({
      error: null
    });
  }


  async handleSendOTP() {
    console.log("sending otp to " + this.state.fields.phone);
    let endPoint = "https://2factor.in/API/V1/4db73c1e-4cfa-11eb-8153-0200cd936042/SMS/" + this.state.fields.phone + "/AUTOGEN";
    await fetch(endPoint)
        .then(res => res.json())
        .then((data) => {
          this.setState({ otpSentSessionId: data.Details })
        })
        .catch(console.log)
    console.log("otp sent sessionID >> " + this.state.otpSentSessionId);
    
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


  openModal = () => {
    this.setState({
        modalOpen: true            
    });
    this.handleSendOTP();
};

closeModal = val => {
    this.setState({
        modalOpen: false,
        otp: val
    })
}
  // handleSubmit = () => {
  //   console.log("Validate phone with OTP");
  // }
  

  // handlePhone = (phone) => {
  //   this.setState({ fields: { fields, phone: phone} });
  // }

  // handleChange(event) {
  //   let input = this.state.input;
  //   input[event.target.name] = event.target.value;
  //   this.setState({     
  //     input
  //   });
  // }

  // modifyPhone = () => {
  //   console.log("modifying Phone " + this.state.phone);
  //   let phoneEntered = this.state.phone;
  //   let phoneArr = phoneEntered.split("+91");
  
  //   let phoneTrimmed = phoneArr[1];
  //   console.log("phone trimemd to " + phoneTrimmed);
  //   this.setState({ phoneTrimmed: phoneTrimmed});
  //   console.log("phone in state to " + this.state.phoneTrimmed);
  // }

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

  handleOTPInput = (otp) => {
    this.setState({ otp:  otp})
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

  // mobileValidate(text) {
  //   console.log("In mobileValidate " + text)
  //   const reg = /^[0]?[789]\d{9}$/;
  //   if (reg.test(text) === false) {
  //     this.setState({
  //       mobilevalidate: false
  //     });
  //   } else {
  //     console.log("valid mobile number, setting true");
  //     this.isValidNumber = true;
  //   }
  //   //this.setState()
  // }

  // handleStudentSubmit = (e) => {
  //   this.toggle();
  //   console.log("valid mobile number " + this.isValidNumber);
  //   if(!this.isValidNumber) {
  //     alert("Enter a vaild mobile number");
  //   } else {
  //     return (<OtpInput
  //       onChange={this.handleOTPInput}
  //       numInputs={6}
  //       separator={<span>-</span>}
  //     />)
  //   }
  
  // }

  // renderOtpInput = () => {
  //   return (<OtpInput
  //       onChange={this.handleOTPInput}
  //       numInputs={6}
  //       separator={<span>-</span>}
  //     />)
  // }
  
  render() {
  const { classes } = this.props;
  const {modalOpen, otpVerified} = this.state;
  return (<React.Fragment>

    <Container className={useStyles.paper} component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar> 
         <Typography component="h1" variant="h5">
          Student Sign in
        </Typography>

        <form onSubmit={this.form.handleSubmit}>
        <div className="form-group">
          <p>
        <label>
                Phone
                <input
                  type="tel"
                  name="phone"
                  onBlur={this.form.handleBlurEvent}
                  onChange={this.form.handleChangeEvent}
                  value={this.state.fields.phone}
                />
              </label>
              <label className="error">
                {this.state.errors.phone ? this.state.errors.phone : ""}
              </label>
            </p>
        </div>
        <div className="form-group">
          <button type="submit"> Sign In </button>
          {modalOpen ? (
                    <VerifyModal
                        show={modalOpen}
                        close={val => this.closeModal(val)}
                        headerMessage="Enter the 4-digit OTP sent to your mobile number"
                        otpSentSessionId={this.state.otpSentSessionId}
                    />
                ): null}
                {otpVerified ? <HomeComponent student="true" /> : null}
          </div>
        </form>

        <ReactModalLogin
          visible={this.state.showModal}
          onCloseModal={this.closeModal.bind(this)}
          loading={this.state.loading}
          error={this.state.error}
          tabs={{
            onChange: this.onTabsChange.bind(this)
          }}
          loginError={{
            label: "Couldn't sign in, please try again."
          }}
          registerError={{
            label: "Couldn't sign up, please try again."
          }}
          startLoading={this.startLoading.bind(this)}
          finishLoading={this.finishLoading.bind(this)}
        />
  </div>
  <Box mt={8}>
    <Copyright />
  </Box>
</Container>
</React.Fragment>
);
}

}

PhoneLogin.propTypes = {
  classes: PropTypes.object.isRequired,
}

// export default Login;

export default withStyles(useStyles, { withTheme: true })(PhoneLogin);
