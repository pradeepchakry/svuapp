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

  const columns = [{
    dataField: 'student_id',
    text: 'Student ID'
  }, {
    dataField: 'name',
    text: 'Student Name'
  }, {
    dataField: 'gender',
    text: 'Gender'
  },
  {
    dataField: 'aadhar_no',
    text: 'Aadhar No.'
  },
  {
    dataField: 'mobileNo',
    text: 'Mobile No.'
  },
  {
    dataField: 'registrationNo',
    text: 'Registration No'
  },
  {
    dataField: 'courseName',
    text: 'Course Name'
  }];

  const courses = [
    {
      value: 'course1',
      label: 'Course 1',
    },
    {
      value: 'course2',
      label: 'Course 2',
    },
    {
      value: 'course3',
      label: 'Course 3',
    },
    {
      value: 'course4',
      label: 'Course 4',
    },
  ];
  
  const coursesFromDB = [];
  
  const genders = [
    {
      value: 'male',
      label: 'Male',
    },
    {
      value: 'female',
      label: 'Female',
    }
  ];
  
  const mediums = [
    {
      value: 'english',
      label: 'English',
    },
    {
      value: 'telugu',
      label: 'Telugu',
    }
  ];
  
  const maritalStatuses = [
    {
      value: 'unmarried',
      label: 'Unmarried',
    },
    {
      value: 'married',
      label: 'Married',
    }
  ];
  
  
  
  const religions = [
    {
      value: 'hindu',
      label: 'Hindu',
    },
    {
      value: 'muslim',
      label: 'Muslim',
    },
    {
      value: 'christian',
      label: 'Christian',
    },
    {
      value: 'sikh',
      label: 'Sikh',
    },
    {
      value: 'others',
      label: 'Others'
    }
  ];
  
  const castes = [
    {
      value: 'oc',
      label: 'OC',
    },
    {
      value: 'bc',
      label: 'BC',
    },
    {
      value: 'sc',
      label: 'SC',
    },
    {
      value: 'st',
      label: 'ST',
    },
    {
      value: 'others',
      label: 'Others'
    }
  ];
  
  const residentialStatuses = [
    {
      value: 'urban',
      label: 'Urban',
    },
    {
      value: 'rural',
      label: 'Rural',
    },
    {
      value: 'tribal',
      label: 'Tribal',
    }
  ];
  
  const phCategories = [
    {
      value: 'no',
      label: 'No',
    },
    {
      value: 'yes',
      label: 'Yes',
    }
  ];

  const feeFromDB = [];

  var formData = {};

function NodalDashboard() {
  const [auth, setAuth] = React.useState(false);
  const Auth = React.useContext(AuthApi);
  const [studentData, setStudentData] = React.useState({});
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
  const [motherName, setMotherName] = React.useState("");
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
    console.log("Hi! from NodalDashboard useEffect()")
    // readCookie();
    loadData();
    //getData()
  }, [])

  const loadData = () => {
    let studentID = Cookies.get("studentId");
    if(studentID !== undefined) {
    console.log("fetching studing data for --> " + studentID)
    let endPoint = "http://159.203.148.240:8080/api/v1/" + studentID;
    let result = false;
    fetch(endPoint).then(resp => resp.json())
        .then(receivedData => {
          console.log("received data --> " + JSON.stringify(receivedData));
          setStudentData(receivedData);
        });
    } else {
        console.log("studentID is undefined");
    }
    setLoaded(true);
  }

  const handleClose = () => {
    setShow(false);
    loadData();
  }
    const handleShow = () => {
      console.log("Rendering Form modal")
      // Fetch courses
    let endPoint = "http://159.203.148.240:8080/api/v1/courses";
    let result = false;
    fetch(endPoint).then(resp => resp.json())
        .then(receivedData => {
          // console.log("received Course structures --> " + JSON.stringify(receivedData));
          setCourseData(receivedData.map(coursesData => ({
            courseID: coursesData.courseID,
            courseSubject: coursesData.courseSubject,
            firstYearFee: coursesData.firstYearFee,
          })));
          // console.log(JSON.stringify(courseData));
          setCourseFetched(true);
        });
    console.log(courseFetched);
    if(courseFetched) {
      var data = '{ "courses": '+ JSON.stringify(courseData) + '}';
      console.log(data);
      var coursesArr = JSON.parse(data);
      // console.log("course data --> " + coursesArr.courses[0] + "course length --> " + coursesArr.courses.length);
      var list = coursesArr.courses.length;
      var courseJson = {};
      var feeJson = {}
      for (var i = 0; i < list; i++) {
        var counter = coursesArr.courses[i];
        var id=counter.courseID;
        var name = counter.courseSubject;
        var fee = counter.firstYearFee;
        //
        courseJson["value"] = id;
        courseJson["label"] = name;
       
        console.log(courseJson);
        coursesFromDB.push(courseJson)
        courseJson = {};

        //Fee details
        feeJson["value"] = id;
        feeJson["label"] = fee;
       
        console.log(feeJson);
        feeFromDB.push(feeJson)
        feeJson = {};
      }
      
        var a = JSON.stringify(feeFromDB);
        console.log("Fee data in a --> " + a);
        a = JSON.stringify(coursesFromDB);
        console.log("Courses data in a --> " + a);
    
    }
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
  
    

    const calculatePercentage = () => {
        var marksObtainedInt = Number(marksObtained);
        var maxMarksInt = Number(maxMarks);
        var percentile = ((marksObtainedInt / maxMarksInt) * 1000);
        
        percentile = ( percentile.toString());
        console.log("Marks obtained Integer --> " + marksObtainedInt)
        console.log("Max Marks Integer --> " + maxMarksInt)
        console.log("Percentage Marks --> " + percentile)
        setPercentageOfMarks(percentile);
      }
    
      const handleStudyCenterOptedCode = (event) => {
        // console.log(event.target.value)
        // let val = event.target.value;
        
        // event.preventDefault();
        console.log(event.target.value)
        // console.log(value);
        setStudyCenterOptedCode(event.target.value)
      }
    
      const handleCourseChange = (course) => {
        console.log("Course Id selected" + course.value);
        console.log("Course Name --> " + course.label);
        setCourseID(course.value);
        setCourse(course.label);
        var courseId = course.value;
        for(var i = 0; i < feeFromDB.length; i++) {
          var obj = feeFromDB[i];
          if(obj.value === courseId) {
            console.log("Fee for Course " + courseId  + " is " + obj.label);
            setFeeAmount(obj.label);
          }
      }
        // setFeeAmount()
      }
    
      const handleNameChange = (event) => {
        console.log(event.target.value)
        setName(event.target.value)
      }
    
      const handleFatherName = (event) => {
        console.log(event.target.value)
        setFatherName(event.target.value)
      }

      const handleMotherName = (event) => {
        console.log(event.target.value)
        setMotherName(event.target.value)
      }
    
      const handleAadharNo = (event) => {
        console.log(event.target.value)
        setAadharNo(event.target.value)
      }
    
      const handleDoorNo = (event) => {
        console.log(event.target.value)
        setDoorNo(event.target.value)
      }
    
      const handleStreet = (event) => {
        console.log(event.target.value)
        setStreet(event.target.value)
      }
    
      const handleVillage = (event) => {
        console.log(event.target.value)
        setVillage(event.target.value)
      }
    
      const handleMandal = (event) => {
        console.log(event.target.value)
        setMandal(event.target.value)
      }
    
      const handleDistrict = (event) => {
        console.log(event.target.value)
        setDistrict(event.target.value)
      }
    
      const handleDistrictState = (event) => {
        console.log(event.target.value)
        setDistrictState(event.target.value)
      }
    
      const handlePincode = (event) => {
        console.log(event.target.value)
        setPincode(event.target.value)
      }
    
      const handlePhone = (event) => {
        console.log(event.target.value)
        setPhone(event.target.value)
      }
    
      const handleEmail = (event) => {
        console.log(event.target.value)
        setEmail(event.target.value)
      }
    
      const handleGenderChange = (gender) => {
        console.log("Gender selected" + gender.value);
        setGender(gender.value)
      }
    
      const handleMedium = (medium) => {
        console.log(medium.value)
        setMedium(medium.value)
      }
    
      const handleSecondLanguageOpted = (event) => {
        console.log(event.target.value)
        setSecondLanguageOpted(event.target.value)
      }
      
    
      const handleDOB = (event) => {
        console.log(event.target.value)
        setDob(event.target.value)
      }
    
      const handleMaritalStatus = (maritalStatus) => {
        console.log("maritalStatus selected" + maritalStatus.value);
        setMaritalStatus(maritalStatus.value);
      }
    
      const handleNationality = (event) => {
        setNationality(nationality);
      }
    
      const handleReligion = (religion) => {
        console.log("Religion selected" + religion.value);
        setReligion(religion.value);
      }
    
      const handleCaste = (caste) => {
        console.log("caste selected" + caste.value);
        setCaste(caste.value);
      }
    
      const handleResidentialStatus = (residential) => {
        console.log("Residential selected" + residential.value);
        setResidential(residential.value);
      }
    
      const handlePhCategory = (phCategory) => {
        console.log("phCategory selected" + phCategory.value);
        setPhCategory(phCategory.value);
      }
    
      const handleQualifyingExam = (event) => {
        console.log(event.target.value)
        setQualifyingExamination(event.target.value)
      }
    
      const handleUniversity = (event) => {
        console.log(event.target.value)
        setUniversity(event.target.value)
      }
    
      const handleYearAndMonth= (event) => {
        console.log(event.target.value)
        setYearAndMonthPassing(event.target.value)
      }
    
      const handleGroupSubjects = (event) => {
        console.log(event.target.value)
        setGroupSubjects(event.target.value)
      }
    
      const handleMaxMarks = (event) => {
        console.log(event.target.value)
        setMaxMarks(event.target.value)
      }
    
      const handleMarksObtained = (event) => {
        setMarksObtained(event.target.value)
        calculatePercentage(event.target.value);
      }
    
      const handlePercentageOfMarks = (percentageOfMarks) => {
        setPercentageOfMarks(percentageOfMarks)
      }
    
      const handleEligibilityMarks = (event) => {
        console.log(event.target.value)
        setEligibilityMarks(event.target.value)
      }
    
      const handleFeeAmount = (feeAmount) => {
        setFeeAmount(feeAmount)
      }
    
      const handleDeclarationChecked = (event) => {
        console.log(event.target.value)
        setDeclarationChecked(event.target.value)
      }
    
      const handleImage = (event) => {
        console.log(event.target.value)
        setImage(event.target.value)
      }
    
      const handleSignature = (event) => {
        console.log(event.target.value)
        setSignature(event.target.value)
      }

      const handleFormSubmit = async (event) => {
        event.preventDefault();
        console.log("course id --> " + courseData.courseID)
        var formDataJson = {};
        formDataJson["appSerialNo"] = "120"; //- missing in form
        formDataJson["applicationNo"] = "120"; //- missing in form
        formDataJson["baGroupId"] = ""; //- missing in form
        formDataJson["monthYear"] = yearAndMonthPasssing;
        formDataJson["fees"] = feeAmount;
        formDataJson["caste"] = caste;
        formDataJson["courseId"] = courseID; //- missing - should go in json
        formDataJson["medium"] = medium; //- missing
        formDataJson["courseName"] = course;
        formDataJson["degree"] = ""; //- not required
        formDataJson["districtState"] = districtState;
        formDataJson["dob"] = dob;
        formDataJson["doorNo"] = doorNo;
        formDataJson["eligibilityMarks"] = eligibilityMarks;
        formDataJson["emailID"] = email;
        formDataJson["enrolmentNo"] = "abcxyz123"; //- missing - not in form
        formDataJson["fatherName"] = fatherName;
        formDataJson["gender"] = gender;
        formDataJson["groupSubjects"] = groupSubjects;
        formDataJson["hallTicketNo"] = "zyxabc120"; //- missing - not in form
        formDataJson["image"] = "";
        formDataJson["location"] = "";
        formDataJson["mandal"] = mandal;
        formDataJson["marksObtained"] = marksObtained;
        formDataJson["maritalStatus"] = maritalStatus;
        formDataJson["maxMarks"] = maxMarks;
        formDataJson["name"] = name;
        formDataJson["nationality"] = nationality;
        formDataJson["ousEducation"] = ""; //- missing - unknown
        formDataJson["percentageMarks"] = percentageOfMarks;
        formDataJson["phone"] = phone;
        formDataJson["pincode"] = pincode;
        formDataJson["printCount"] = "";
        formDataJson["qualifyingExam"] = qualifyingExamination;
        formDataJson["registrationNo"] = //- missing - need to generate
        formDataJson["religion"] = religion;
        formDataJson["residentialArea"] = residential;
        formDataJson["secondLanguage"] = secondLanguageOpted;
        formDataJson["signature"] = "";
        formDataJson["street"] = street;
        formDataJson["university"] = university;
        formDataJson["village"] = village;
        formDataJson["active"] = true; //- missing - should go in json
        formDataJson["approve"] = false; //- missing - should go in json
        // formDataJson["codeNo"] = studyCenterOptedCode; // - studycenter code 
        formDataJson["mobileNo"] = phone;
        formDataJson["aadhar_no"] = aadharNo;
        formDataJson["phCategory"] = phCategory;
      console.log("Form Data JSON --> " + JSON.stringify(formDataJson))
      formData = formDataJson;
      console.log("Form Data --> " + JSON.stringify(formData));
    
      //http://159.203.148.240:8080/api/v1/createStudentByStudyCenter/1
      const requestOptions = {
        method: 'POST',
        mode: "cors",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      };
      let result = "";
      let endPoint = "http://159.203.148.240:8080/api/v1/createStudentByStudyCenter/1";
      const response = await fetch(endPoint, requestOptions)
        .then(response => response.json())
        .then(data => {
          console.log(data);
          result = JSON.stringify(data);
          Cookies.set("studentFound", "true");
          Cookies.set("studentId", data.student_id);
          setSaveSuccess(true);
          console.log("Form successfully saved :), closing form window...!");
          console.log("student id --> " + data.student_id);
          alert("Payment Gateway");
          alert("Payment success..!");
          handleClose();
        })    
        .catch(error => console.log("Error detected: " + error));
        //console.log("got response --> " + result);
    
      }
  
    if( !loaded ) {
        loadData();
        return(
            <div>loading...</div>
        )
    } else {
      var found = false;
      console.log("Student found --> " + Cookies.get("studentFound") );
      if(Cookies.get("studentFound") === "true") {
        console.log("Student found!" );
        found = true;
      }
    return(
    //   <div style={{}}>
    //     <div style={{float: 'right'}}>
    //       <button onClick={handleOnClick}>Logout</button>
    //     </div>
    //     {found? <div style={{clear: 'both'}}>
    //         <h1>{Cookies.get("studentId")}</h1></div>:
    //       <ApplicationForm />}
  
        
    //   </div>

        <>
        <div>
        <div style={{float: 'right'}}>
            <button onClick={handleOnClick}>Logout</button>
        </div>
        <div>
            { found ? <div>
            <h1>Welcome {studentData.name}</h1>
                <h3>Application Details</h3>
          <Table className="mt-4" striped bordered hover>
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Gender</th>
                <th>AAdhar No.</th>
                <th>Mobile No.</th>
                <th>Registration No.</th>
                <th>Course Applied</th>
              </tr>
            </thead>
            <tbody>
                <tr>
                <td>{studentData.student_id}</td>
                <td>{studentData.gender}</td>
                <td>{studentData.aadhar_no}</td>
                <td>{studentData.mobileNo}</td>
                <td>{studentData.registrationNo}</td>
                <td>{studentData.course}</td>
                </tr>
            </tbody>
          </Table>
          {/* <BootstrapTable keyField="name" data={studentData} columns={columns} /> */}
        </div>
        : <div>
            <h1>Click below to apply online for Admission</h1>
            <button onClick={handleShow}>New Application</button>
          </div>
        }
        </div>

  {/* <ModalComponent show={modalShowToggle}></ModalComponent> */}
  {/* <FormModal showModal={showModal} hideModalHandler={hideModalHandler}></FormModal> */}
  {/* <ModalWithGrid show={show} onHide={() => {setShow(false)}}/> */}
  <Modal show={show} animation={false} onHide={handleClose} 
    size="lg"
    aria-labelledby="contained-modal-title-vcenter"
    className="my-modal-lg"
    dialogClassName="modal-full"
    bsClass="modal-full"
    centered
    >
<Modal.Header closeButton cssModule={{'modal-title': 'w-100 text-center'}}>
<Modal.Title id="contained-modal-title-vcenter">
Application Form
</Modal.Title>
</Modal.Header>
<Modal.Body>
<Container>
<ValidatorForm id="myForm" onSubmit={handleFormSubmit}
onError={errors => console.log(errors)}>
<Row>

{/* <Col xs={5} md={6}>
  <TextField
    variant="outlined"
    margin="normal"
    required
    fullWidth
    InputLabelProps={{style: {fontSize: 13}}}
    InputProps={{style: {fontSize: 13}}}
    id="studyCenterOptedCode"
    label="Study Center opted with Code No."
    name="studyCenterOptedCode"
    value={studyCenterOptedCode}
    defaultValue="001"
    onChange={(event, value) => handleStudyCenterOptedCode(event)}
    // autoFocus
  />
  
  </Col> */}
  </Row>
  <Row>
<Col xs={10} md={3}>
<p>Course Applied</p>
<Select options={coursesFromDB} 
  maxWidth={50}
  // value={course}
  onChange={handleCourseChange}
  className="Select-menu-outer"
/>
</Col >
</Row>
<Row>
<Col xs={10} md={3}>
<TextField
    variant="outlined"
    margin="normal"
    required
    fullWidth
    id="name"
    label="Name"
    name="name"
    InputLabelProps={{style: {fontSize: 13}}}
    InputProps={{style: {fontSize: 13}}}
    value={name}
    placeholder="First Name"
    onChange={(event, value) => handleNameChange(event)}
  />
</Col>

<Col xs={10} md={3}>
<TextField
    variant="outlined"
    margin="normal"
    required
    // fullWidth
    InputLabelProps={{style: {fontSize: 13}}}
    InputProps={{style: {fontSize: 13}}}
    id="fatherName"
    label="Father's Name"
    name="fatherName"
    onChange={(event, value) => handleFatherName(event)}
  />
</Col>

<Col xs={10} md={3}>
<TextField
    variant="outlined"
    margin="normal"
    required
    // fullWidth
    InputLabelProps={{style: {fontSize: 13}}}
    InputProps={{style: {fontSize: 13}}}
    id="motherName"
    label="Mother's Name"
    name="motherName"
    onChange={(event, value) => handleMotherName(event)}
  />
</Col>

<Col xs={10} md={3}>
<TextField
    variant="outlined"
    margin="normal"
    required
    // fullWidth
    InputLabelProps={{style: {fontSize: 13}}}
    InputProps={{style: {fontSize: 13}}}
    id="aadharNo"
    label="Aadhar No."
    name="aadharNo"
    onChange={(event, value) => handleAadharNo(event)}
  />
</Col>
</Row>
<Row>
<Col xs={10} md={3}>
<TextField
    variant="outlined"
    margin="normal"
    required
    // fullWidth
    InputLabelProps={{style: {fontSize: 13}}}
    InputProps={{style: {fontSize: 13}}}
    id="doorNo"
    label="Door No."
    name="Door No."
    onChange={(event, value) => handleDoorNo(event)}
  />
</Col>

<Col xs={10} md={3}>
<TextField
    variant="outlined"
    margin="normal"
    required
    fullWidth
    InputLabelProps={{style: {fontSize: 13}}}
    InputProps={{style: {fontSize: 13}}}
    id="street"
    label="Street"
    name="Street"
    onChange={(event, value) => handleStreet(event)}
  />
</Col>

<Col xs={10} md={3}>
<TextField
    variant="outlined"
    margin="normal"
    required
    // fullWidth
    InputLabelProps={{style: {fontSize: 13}}}
    InputProps={{style: {fontSize: 13}}}
    id="village"
    label="Village/Post"
    name="village"
    onChange={(event, value) => handleVillage(event)}  
  />
</Col>

<Col xs={10} md={3}>
<TextField
    variant="outlined"
    margin="normal"
    required
    // fullWidth
    InputLabelProps={{style: {fontSize: 13}}}
    InputProps={{style: {fontSize: 13}}}
    id="mandal"
    label="Mandal/Town"
    name="mandal"
    onChange={(event, value) => handleMandal(event)}
    
  />
</Col>

<Col xs={10} md={3}>
<TextField
    variant="outlined"
    margin="normal"
    required
    // fullWidth
    InputLabelProps={{style: {fontSize: 13}}}
    InputProps={{style: {fontSize: 13}}}
    id="district"
    label="District"
    name="district"
    onChange={(event, value) => handleDistrict(event)}
/>
</Col>

<Col xs={10} md={4} >
<TextField
    variant="outlined"
    margin="normal"
    required
    fullWidth
    InputLabelProps={{style: {fontSize: 13}}}
    InputProps={{style: {fontSize: 13}}}
    id="districtState"
    label="State"
    name="districtState"
    type="districtState"
    onChange={(event, value) => handleDistrictState(event)}
  />
</Col> 

<Col xs={10} md={3}>
<TextField
    variant="outlined"
    margin="normal"
    required
    // fullWidth
    InputLabelProps={{style: {fontSize: 13}}}
    InputProps={{style: {fontSize: 13}}}
    id="pincode"
    label="Pincode"
    name="pincode"
    onChange={(event, value) => handlePincode(event)}
/>
</Col>

<Col xs={10} md={4} >
<TextField
    variant="outlined"
    margin="normal"
    required
    fullWidth
    InputLabelProps={{style: {fontSize: 13}}}
    InputProps={{style: {fontSize: 13}}}
    id="phone"
    label="Mobile Number"
    name="phone"
    type="phone"
    onChange={(event, value) => handlePhone(event)}
  />
</Col> 

<Col xs={10} md={4} >
<TextValidator
    variant="outlined"
    margin="normal"
    // required
    fullWidth
    InputLabelProps={{style: {fontSize: 13}}}
    InputProps={{style: {fontSize: 13}}}
    // id="email"
    label="Email Address"
    name="email"
    // type="email"
    value={email}
    validators={['required', 'isEmail']}
    errorMessages={['this field is required', 'email is not valid']}
    onChange={(event, value) => handleEmail(event)}
  />
</Col>  
</Row>
<Row>
<Col xs={10} md={3}>
<p>Gender</p>
<Select options={genders} 
  maxWidth={50}
  onChange={handleGenderChange}
  className="Select-menu-outer"
/>
</Col>
<Col xs={10} md={3}>
<p>Medium</p>
<Select options={mediums} 
  maxWidth={50}
  onChange={handleMedium}
  className="Select-menu-outer"
/>
</Col>
<Col xs={10} md={4} >
<TextField
    variant="outlined"
    margin="normal"
    required
    fullWidth
    InputLabelProps={{style: {fontSize: 13}}}
    InputProps={{style: {fontSize: 13}}}
    id="secondaryLangauage"
    label="Secondary Language Opted"
    name="secondaryLangauage"
    onChange={(event, value) => handleSecondLanguageOpted(event)}
  />
</Col>

</Row>
<Row>
<Col xs={13} md={3} >
<TextField
    variant="outlined"
    margin="normal"
    required
    fullWidth
    // onChange={this.handleDOB}
    id="nationality"
    label="Nationality"
    name="nationality"
    autoComplete="INDIAN"
    disabled
    value={nationality}   
  />
</Col>
</Row> 
<Row>
<Col xs={13} md={2}>
<p>Marital Status</p>
<Select options={maritalStatuses} 
  maxWidth={50}
  onChange={handleMaritalStatus}
  className="Select-menu-outer"
/>
</Col>

<Col xs={10} md={2} >
<TextField
  id="date"
  label="Date of Birth"
  type="date"
  defaultValue="1960-01-01"
  InputLabelProps={{style: {fontSize: 13}}}
  className={dateClasses.textField}
  InputLabelProps={{
  shrink: true,
  }}
  onChange={(event, value) => handleDOB(event)}
/>
</Col>

</Row>

<Row>
<Col xs={13} md={3} >
<TextField
    variant="standard"
    margin="normal"
    required
    fullWidth
    // onChange={this.handleDOB}
    id=""
    label=""
    name=""
    disabled
    // value={}    
  />
</Col>
</Row>

<Row>
<Col xs={13} md={3} >
<TextField
    variant="standard"
    margin="normal"
    required
    fullWidth
    // onChange={this.handleDOB}
    id=""
    label=""
    name=""
    disabled
    hidden
    // value={}    
  />
</Col>
</Row>


<Row>

<Col xs={10} md={3}>
<p>Religion</p>
<Select options={religions} 
  maxWidth={50}
  onChange={handleReligion}
  className="Select-menu-outer"
/>
</Col>

<Col xs={10} md={3}>
<p>Caste</p>
<Select options={castes} 
  maxWidth={50}
  onChange={handleCaste}
  className="Select-menu-outer"
/>
</Col>
<Col xs={10} md={3}>
<p>Residential Status</p>
<Select options={residentialStatuses} 
  maxWidth={50}
  onChange={handleResidentialStatus}
  className="Select-menu-outer"
/>
</Col>
<Col xs={10} md={2}>
<p>PH Category?</p>
<Select options={phCategories} 
  maxWidth={50}
  onChange={handlePhCategory}
  className="Select-menu-outer"
/>
</Col>
</Row>

<Row>



<Col xs={10} md={4} >
<TextField
    variant="outlined"
    margin="normal"
    required
    fullWidth
    InputLabelProps={{style: {fontSize: 13}}}
    InputProps={{style: {fontSize: 13}}}
    id="qualifyingExam"
    label="Qualifying Examination"
    name="qualifyingExam"
    onChange={(event, value) => handleQualifyingExam(event)}
  />
</Col>
<Col xs={10} md={4} >
<TextField
    variant="outlined"
    margin="normal"
    required
    fullWidth
    InputLabelProps={{style: {fontSize: 13}}}
    InputProps={{style: {fontSize: 13}}}
    id="university"
    label="University"
    name="university"
    onChange={(event, value) => handleUniversity(event)}
  />
</Col>
</Row>
<Row>
<Col xs={10} md={2} >
<TextField
  id="date"
  label="Year and Month Passing"
  type="date"
  defaultValue="1960-01-01"
  InputLabelProps={{style: {fontSize: 13}}}
  className={dateClasses.textField}
  InputLabelProps={{
  shrink: true,
  }}
  onChange={(event, value) => handleYearAndMonth(event)}
/>
</Col>
</Row>
<Row>
<Col xs={10} md={4} >
<TextField
    variant="outlined"
    margin="normal"
    required
    fullWidth
    InputLabelProps={{style: {fontSize: 13}}}
    InputProps={{style: {fontSize: 13}}}
    label="Group Subjects"
    name="groupSubjects"
    placeholder="subject1, subject2,..."
    value={groupSubjects}
    onChange={(event, value) => handleGroupSubjects(event)}
  />
</Col>

<Col xs={10} md={4} >
<TextField
    variant="outlined"
    margin="normal"
    required
    fullWidth
    InputLabelProps={{style: {fontSize: 13}}}
    InputProps={{style: {fontSize: 13}}}
    // id="maxMarks"
    label="Max Marks"
    name="maxMarks"
    value={maxMarks}
    onChange={(event, value) => handleMaxMarks(event)}
  />
</Col>

<Col xs={10} md={4} >
<TextField
    variant="outlined"
    margin="normal"
    required
    fullWidth
    InputLabelProps={{style: {fontSize: 13}}}
    InputProps={{style: {fontSize: 13}}}
    id="marksObtained"
    label="Marks Obtained"
    name="marksObtained"
    value={marksObtained}
    onChange={(event) => handleMarksObtained(event)}
  />
</Col>

<Col xs={10} md={4} >
<TextField
    variant="outlined"
    margin="normal"
    required
    fullWidth
    InputLabelProps={{style: {fontSize: 13}}}
    InputProps={{style: {fontSize: 13}}}
    id="percentage"
    label="Percentage"
    name="percentage"
    value={percentageOfMarks}
    disabled
  />
</Col>

<Col xs={10} md={4} >
<TextField
    variant="outlined"
    margin="normal"
    required
    fullWidth
    InputLabelProps={{style: {fontSize: 13}}}
    InputProps={{style: {fontSize: 13}}}
    id="feeAmount"
    label="Fee Amount"
    name="feeAmount"
    value={feeAmount}
    disabled
    
  />
</Col>

</Row>

<Form.Row>
<Form.Group as={Col} id="formGridCheckbox">
<Form.Check id="declarataion"
    name="declaration" 
    type="checkbox" 
    label="Declaration"
    onChange={(event) => handleDeclarationChecked(event)} />
<p>I hereby declare that the particulars given above are correct. In case if they are found to be incorrect
    at a later date, I submit myself for any action including removal from the rolls and such other disciplinary
    action under the ACT, the Statues and Ordinances rule of the University, I also agree to abide by the
    conditions, rules and regulations stipulated by the Directorate of distance Education and the Laws of the
    university applicable from time to time.</p>
</Form.Group>

</Form.Row>



</ValidatorForm>
</Container>
</Modal.Body>
<Modal.Footer>
<Button form="myForm" key="submit" htmlType="submit" variant="primary" type="submit">
Submit
</Button>
<Button onClick={handleClose}>Close</Button>
</Modal.Footer>
</Modal>
  </div>  
</>
    )
  }
}

export default NodalDashboard;