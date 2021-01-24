import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link
} from 'react-router-dom';
import { AppBar, Tabs, Tab } from '@material-ui/core';
import AuthApi from "./AuthApi";
import Cookies, { set } from 'js-cookie';
import OtpInput from 'react-otp-input';
import {Button, Modal} from 'react-bootstrap'
import RespModal from 'react-responsive-modal';
import { useState, useEffect } from 'react';
import TextField from "@material-ui/core/TextField";

import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import Grid from "@material-ui/core/Grid";


import BetterUser from './BetterUser'
import ApplicationForm from './ApplicationForm';
import StudentRecords from './StudenRecords';
import usePromise from "react-promise";

import './custom-modal.css';
import { getDefaultLocale } from 'react-datepicker';
import * as ReactBootStrap from 'react-bootstrap';

import ReactDOM from "react-dom";
import BootstrapTable from "react-bootstrap-table-next";
import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/css/bootstrap-theme.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import "./styles.css";
import {Col, Row} from 'react-bootstrap';
import Container from "@material-ui/core/Container";
import classes from './styles.css';
import FormModal from './FormModal';   
import ModalComponent from './ModalComponent'
import {Table, Form} from 'react-bootstrap';
import Select from "react-select";
import './reactselect.css'
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
    container: {
      display: 'flex',
      flexWrap: 'wrap',
  },
  textField: {
      width: 300,
      margin: 100,
  },
  //style for font size
  resize:{
    fontSize:50
  }
  }));

const backdropStyle = {
    position: 'fixed',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.3)',
    padding: 50
  };
  
  const selectStyles = {
    control: (base) => ({
      ...base,
      minHeight: 32,
      minWidth: 32
    }),
    dropdownIndicator: (base) => ({
      ...base,
      paddingTop: 0,
      paddingBottom: 0,
    }),
    clearIndicator: (base) => ({
      ...base,
      paddingTop: 0,
      paddingBottom: 0,
    }),
  };
  
  const useDateStyles = makeStyles((theme) => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200,
    },
  }));

function NodalDashboard() {
  const [auth, setAuth] = React.useState(false);
  const Auth = React.useContext(AuthApi);
  const [studentData, setStudentData] = React.useState([]);
  const [courseData, setCourseData] = React.useState([]);
  const [courseFetched, setCourseFetched] = React.useState(false);
  const [value, setValue] = React.useState(0);
  const [open, setOpen] = React.useState(false);
  
  const [show, setShow] = React.useState(false);
  const [modal, setModal] = React.useState(false);
  const [dataExists, setDataExists] = React.useState(false);
  const [loaded, setLoaded] = React.useState(false);
  const [fetchFinished, setFetchFinished] = React.useState(false);
  const [showModal, setShowModal] = React.useState(false);
  const [modalShowToggle, setModalShowToggle] = React.useState(false);

  
  const classes = useStyles();
  const dateClasses = useDateStyles();


  const [course, setCourse] = React.useState({value: 'course1', label: 'Course'});
  const [studyCenterOptedCode, setStudyCenterOptedCode] = React.useState();
  const [name, setName] = React.useState("");
  const [fatherName, setFatherName] = React.useState("");
  const [aadharNo, setAadharNo] = React.useState('');
  const [doorNo, setDoorNo] = React.useState('');
  const [street, setStreet] = React.useState('');
  const [village, setVillage] = React.useState('');
  const [mandal, setMandal] = React.useState('');
  const [district, setDistrict] = React.useState('');
  const [pincode, setPincode] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [courseID, setCourseID] = React.useState('');

  const [gender, setGender] = React.useState('');
  const [medium, setMedium] = React.useState('');
  const [secondLanguageOpted, setSecondLanguageOpted] = React.useState('');
  const [dob, setDob] = React.useState(Date("1978-04-02T21:11:54"));
  const [maritalStatus, setMaritalStatus] = React.useState('');
  const [nationality, setNationality] = React.useState('Indian');
  
  const [religion, setReligion] = React.useState('');
  const [caste, setCaste] = React.useState('');
  const [residential, setResidential] = React.useState('');
  const [phCategory, setPhCategory] = React.useState('');
  const [qualifyingExamination, setQualifyingExamination] = React.useState('');
  const [university, setUniversity] = React.useState('');
  const [yearAndMonthPasssing, setYearAndMonthPassing] = React.useState(Date("1978-04-02T21:11:54"));
  const [groupSubjects, setGroupSubjects] = React.useState('');
  const [maxMarks, setMaxMarks] = React.useState('');
  const [marksObtained, setMarksObtained] = React.useState('');
  const [percentageOfMarks, setPercentageOfMarks] = React.useState('');
  const [feeAmount, setFeeAmount] = React.useState('');
  const [challanId, setChallanId] = React.useState('challanId');
  const [challanDate, setChallanDate] = React.useState(Date("2021-01-01T21:11:54"));
  const [bankName, setBankName] = React.useState('bankName');
  const [declarationChecked, setDeclarationChecked] = React.useState('');
  const [paymentStatus, setPaymentStatus] = React.useState('paymentStatus');
//   const [values, setValues] = React.useState(initialFomValues);
  const [districtState, setDistrictState] = React.useState("");
  const [eligibilityMarks, setEligibilityMarks] = React.useState("");
  const [image, setImage] = React.useState("");
  const [signature, setSignature] = React.useState("");
  const [phone, setPhone] = React.useState("");

  const[saveSuccess, setSaveSuccess] = React.useState(false);

  useEffect(() => {
    console.log("Hi! from StudyCntrDashboard useEffect()")
    // readCookie();
    loadData();
    //getData()
  }, [])

  const loadData = () => {
    let userID = Cookies.get("username");
    Cookies.set("username", userID);
    let len = userID.length;
    let lastChar = userID.charAt(len - 1);
    console.log("lastChar -> " + lastChar);
    console.log("userID while fetching studing data--> " + lastChar)
    let endPoint = "http://localhost:8080/api/v1/Students/" + lastChar;
    let result = false;
    fetch(endPoint).then(resp => resp.json())
        .then(receivedData => {
          console.log("received data --> " + JSON.stringify(receivedData));
          setStudentData(receivedData.map(studentData => ({
            name: studentData.name,
            id: studentData.student_id,
            gender: studentData.gender,
            aadhar_no: studentData.aadhar_no,
            mobileNo: studentData.mobileNo,
            registrationNo: studentData.registrationNo,
            courseName: studentData.courseName,
          })));
          setDataExists(true);
        });
    
    setLoaded(true);
        
  }

  const handleClose = () => {
    setShow(false);
    loadData();
  }
    const handleShow = () => {
      console.log("Rendering Form modal")
      setShow(true);
    }
    const handleOnClick = () => {
      Auth.setAuth(false);
      Cookies.remove("user");
      Cookies.remove("nodalUser");
      Cookies.remove("studentFound");
      Cookies.remove("studentId");
      window.studyCntrLoggedIn = false;
      window.nodalLoggedIn = false;
      window.homePage = true;
    }
  
    
    var found = false;
    if(Cookies.get("studentFound") === "true") {
      console.log("Student found!" );
      found = true;
    }
  
    return(
      <div style={{}}>
        <div style={{float: 'right'}}>
          <button onClick={handleOnClick}>Logout</button>
        </div>
        {found? <div style={{clear: 'both'}}>
            <h1>{Cookies.get("studentId")}</h1></div>:
          <ApplicationForm />}
  
        
      </div>
    )
  }

export default NodalDashboard;