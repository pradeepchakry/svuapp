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


// The gray background
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

// const styles = makeStyles((theme) => ({
//   container: {
//       display: 'flex',
//       flexWrap: 'wrap',
//   },
//   textField: {
//       width: 300,
//       margin: 100,
//   },
//   //style for font size
//   resize:{
//     fontSize:50
//   },
//   })


function StudyCntrDashboard() {
  const [auth, setAuth] = React.useState(false);
  const Auth = React.useContext(AuthApi);
  const [studentData, setStudentData] = React.useState([]);
  const [value, setValue] = React.useState(0);
  const [open, setOpen] = React.useState(false);
  const [formData, setFormData] = React.useState({});
  const [show, setShow] = React.useState(false);
  const [modal, setModal] = React.useState(false);
  const [dataExists, setDataExists] = React.useState(false);
  const [fetchFinished, setFetchFinished] = React.useState(false);
  const [showModal, setShowModal] = React.useState(false);
  const [modalShowToggle, setModalShowToggle] = React.useState(false);

  
  const classes = useStyles();
  const dateClasses = useDateStyles();


  const [course, setCourse] = React.useState('course');
  const [studyCenterOptedCode, setStudyCenterOptedCode] = React.useState('studyCenterOptedCode');
  const [name, setName] = React.useState('studyCenterOptedCode');
  const [fatherName, setFatherName] = React.useState('name');
  const [aadharNo, setAadharNo] = React.useState('aadharNo');
  const [doorNo, setDoorNo] = React.useState('doorNo');
  const [street, setStreet] = React.useState('street');
  const [village, setVillage] = React.useState('village');
  const [mandal, setMandal] = React.useState('mandal');
  const [district, setDistrict] = React.useState('district');
  const [pincode, setPincode] = React.useState('pincode');
  const [email, setEmail] = React.useState('email');

  const [gender, setGender] = React.useState('gender');
  const [medium, setMedium] = React.useState('medium');
  const [secondLanguageOpted, setSecondLanguageOpted] = React.useState('secondLanguageOpted');
  const [dob, setDob] = React.useState(Date("1978-04-02T21:11:54"));
  const [maritalStatus, setMaritalStatus] = React.useState('maritalStatus');
  const [nationality, setNationality] = React.useState('Indian');
  
  const [religion, setReligion] = React.useState('religion');
  const [caste, setCaste] = React.useState('caste');
  const [residential, setResidential] = React.useState('residential');
  const [phCategory, SelectPhCategory] = React.useState('phCategory');
  const [qualifyingExamination, setQualifyingExamination] = React.useState('qualifyingExamination');
  const [university, setUniversity] = React.useState('university');
  const [yearAndMonthPasssing, setYearAndMonthPassing] = React.useState(Date("1978-04-02T21:11:54"));
  const [groupSubject, setGroupSubject] = React.useState('groupSubject');
  const [maxMarks, setMaxMarks] = React.useState('maxMarks');
  const [marksObtained, setMarksObtained] = React.useState('marksObtained');
  const [percentageOfMarks, setPercentageOfMarks] = React.useState('feeAmount');
  const [feeAmount, setFeeAmount] = React.useState('feeAmount');
  const [challanId, setChallanId] = React.useState('challanId');
  const [challanDate, setChallanDate] = React.useState(Date("2021-01-01T21:11:54"));
  const [bankName, setBankName] = React.useState('bankName');
  const [declarationChecked, setDeclarationChecked] = React.useState('declarationChecked');
  const [paymentStatus, setPaymentStatus] = React.useState('paymentStatus');

  const handleFieldChange = (event) => {
    console.log("selected course -> " + event.target.value);
    setGender(event.target.value);
  };

  const handleCourseChange = (course) => {
    console.log("Course selected" + course.value);
    setCourse(course.value);
  }

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

  const readCookie = () => {
    const user = Cookies.get("user");
    console.log("user in readCookie --> " + user);
    console.log("nodalUser in readCookie --> " + Cookies.get("nodalUser"));
    console.log("studyCntrUser in readCookie --> " + Cookies.get("studyCntrUser"));
    if(user) {
      setAuth(true);
    }
  }
  
//   React.useEffect(() => {
//     console.log("Hi! from StudyCntrDashboard useEffect()")
//     readCookie();
//   }, [])

const ModalPopUpHandler=()=>{
  setModalShowToggle(!modalShowToggle);
}

  useEffect(() => {
    console.log("Hi! from StudyCntrDashboard useEffect()")
    readCookie();
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
        
  }
  const ModalWithGrid = () => {
    // return (<Modal show={show} animation={false}>Form</Modal>)

    return (<Modal show={show} animation={false} onHide={handleClose} 
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
      <Modal.Body className="show-grid">
      <Container>
      <Form>
        <Row>
        
        <Col xs={12} md={6}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            // fullWidth
            InputLabelProps={{style: {fontSize: 13}}}
            InputProps={{style: {fontSize: 13}}}
            id="studyCenterId"
            label="Study Center opted with Code No."
            name="studyCenterId"
            defaultValue="001"
            onChange={handleFieldChange}
            autoFocus
          />
          </Col>
          </Row>
          <Row>
        <Col xs={10} md={3}>
        <p>Course Applied</p>
        <Select options={courses} 
          maxWidth={50}
          maxMenuHeight={150}
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
            InputLabelProps={{style: {fontSize: 13}}}
            InputProps={{style: {fontSize: 13}}}
            label="Name of the Applicant"
            name="name"
            autoComplete="name"
            onChange={handleFieldChange}
            autoFocus
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
            autoComplete="fatherName"
            onChange={handleFieldChange}
            
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
            label="AADHAR No."
            name="aadharNo"
            autoComplete=""
            onChange={handleFieldChange}
            
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
            autoComplete="doorNo"
            onChange={handleFieldChange}
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
            autoComplete="street"
            onChange={handleFieldChange}
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
            autoComplete="village"
            onChange={handleFieldChange}  
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
            autoComplete="mandal"
            onChange={handleFieldChange}
            
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
            autoComplete="mandal"
            onChange={handleFieldChange}
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
            autoComplete="pincode"
            onChange={handleFieldChange}
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
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            onChange={handleFieldChange}
          />
        </Col>  
    </Row>
    <Row>
    
    {/* <Col xs={10} md={4} > */}
      <Col xs={10} md={3}>
        <p>Gender</p>
        <Select options={genders} 
          maxWidth={50}
          onChange={handleCourseChange}
          className="Select-menu-outer"
        />
      </Col>
      <Col xs={10} md={3}>
        <p>Medium</p>
        <Select options={mediums} 
          maxWidth={50}
          onChange={handleCourseChange}
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
            autoComplete="Secondary Language"
            onChange={handleFieldChange}
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
          onChange={handleCourseChange}
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
            autoComplete=""
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
            autoComplete=""
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
          onChange={handleCourseChange}
          className="Select-menu-outer"
        />
      </Col>
        
      <Col xs={10} md={3}>
        <p>Caste</p>
        <Select options={castes} 
          maxWidth={50}
          onChange={handleCourseChange}
          className="Select-menu-outer"
        />
      </Col>
      <Col xs={10} md={3}>
        <p>Residential Status</p>
        <Select options={residentialStatuses} 
          maxWidth={50}
          onChange={handleCourseChange}
          className="Select-menu-outer"
        />
      </Col>
      <Col xs={10} md={2}>
        <p>PH Category?</p>
        <Select options={phCategories} 
          maxWidth={50}
          onChange={handleCourseChange}
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
            autoComplete="Qualifying Examination"
            onChange={handleFieldChange}
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
            autoComplete="University"
            onChange={handleFieldChange}
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
            id="maxMarks"
            label="Max Marks"
            name="maxMarks"
            autoComplete="Max Marks"
            onChange={handleFieldChange}
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
            autoComplete="marksObtained"
            onChange={handleFieldChange}
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
            autoComplete="Percentage"
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
            autoComplete="fee amount"
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
            id="paymentStatus"
            label="Payment Status"
            name="paymentStatus"
            autoComplete="Pending"
            disabled
          />
        </Col>
        
    </Row>

    <Form.Row>
    {/* <Form.Group as={Col} controlId="formGridState">
      <Form.Label>State</Form.Label>
      <Form.Control as="select" defaultValue="Choose...">
        <option>Choose...</option>
        <option>...</option>
      </Form.Control>
    </Form.Group> */}

    {/* <Form.Group as={Col} controlId="formGridZip">
      <Form.Label>Zip</Form.Label>
      <Form.Control />
    </Form.Group> */}
      
      <Form.Group as={Col} id="formGridCheckbox">
        <Form.Check id="paymentStatus"
            name="paymentStatus" 
            type="checkbox" 
            label="Declaration"
            onChange={handleFieldChange} />
        <p>I hereby declare that the particulars given above are correct. In case if they are found to be incorrect
            at a later date, I submit myself for any action including removal from the rolls and such other disciplinary
            action under the ACT, the Statues and Ordinances rule of the University, I also agree to abide by the
            conditions, rules and regulations stipulated by the Directorate of distance Education and the Laws of the
            university applicable from time to time.</p>
      </Form.Group>
      
    </Form.Row>
  
  <Button variant="primary" type="submit">
    Submit
  </Button>
  
</Form>
</Container>
  </Modal.Body>
            <Modal.Footer>
              <Button onClick={handleClose}>Close</Button>
            </Modal.Footer>
          </Modal>
      
  )
}

  const renderStudents = (student, index) => {
      return(
          <tr key={index}>
              <td>{student.student_id}</td>
              <td>{student.name}</td>
              <td>{student.gender}</td>
              <td>{student.aadhar_no}</td>
              <td>{student.mobileNo}</td>
              <td>{student.registrationNo}</td>
              <td>{student.courseName}</td>
          </tr>
      )
  }
  

  const onCloseModal = () => setOpen(false);

  const handleClose = () => {
    setShow(false);
  }
  const handleShow = () => {
    console.log("Rendering Form modal")
    setShow(true);
  }

  const handleChange = formData => {
    setFormData(formData);
    console.log("Form Data --> " + formData)
  }
  
  const handleFormSubmit = () => {
    console.log("Form Data --> " + formData)
  }

  const toggle = () => {
    setModal(!modal);
  }
  let userData = [];
  let userName = "";
  let userFetched = false;

  const handleOnClick = () => {
    Auth.setAuth(false);
    Cookies.remove("user");
    Cookies.remove("studyCntrUser");
    Cookies.remove("username");
    // window.nodalLoggedIn = false;
    // window.studyCntrLoggedIn = false;
    // window.homePage = true;
  } 
   
//   var promise = new Promise( async (resolve, reject) => {
//     let userID = Cookies.get("username");
//     let len = userID.length;
//     let lastChar = userID.charAt(len - 1);
//     console.log("lastChar -> " + lastChar);
//     console.log("userID while fetching studing data--> " + lastChar)
//     let endPoint = "http://localhost:8080/api/v1/Students/" + lastChar;
//     let result = false;
//     let response = await fetch(endPoint).then(resp => resp.json());
//     result = await response.then(data => {
//       setDataExists(true);
        
//       console.log("data fetched --> " + data);
      
//     }).catch(error => console.log("Error detected: " + error));
//     if (dataExists) {
//        resolve("Promise resolved successfully");
//     }
//     else {
//        reject(Error("Promise rejected"));
//     }
//  });


//     promise.then( result => {
//       console.log("Promise resolved, setting student data!");
//       setStudentData(result);
//       setFetchFinished(true);
//       userFetched = true;
//     }, function(error) {
//       console.log(error);
//     });

    const showModalHandler = (event) =>{
      setShowModal(true);
    }

    const hideModalHandler = (event) =>{
      setShowModal(false);
    }


    if( !dataExists ) {
        return(
            <div>loading...</div>
        )
    } else {
        let tableSize = 0;
        var key, count = 0;
        for( key in studentData) {
            if(studentData.hasOwnProperty(key)) {
                count++;
            }
        }
    
        console.log(count)
        tableSize = count; 

      console.log("student data --> " + studentData);
      
      return(
        <div>
          <div style={{float: 'right'}}>
            <button onClick={handleOnClick}>Logout</button>
          </div>
          <div>
            { dataExists ? <div>
              <h1>Welcome {userName}</h1>
                <h3>Student Records</h3>
                  {/* <Table className="mt-4" striped bordered hover>
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
                      {/* {studentData.map(renderStudents)}
                       */}
                       {/* {studentData.map((student, index) =>
                        <tr key={index} >
                        <td>{studentData.student_id}</td>
                        <td>{studentData.gender}</td>
                        <td>{studentData.aadhar_no}</td>
                        <td>{studentData.mobileNo}</td>
                        <td>{studentData.registrationNo}</td>
                        <td>{studentData.courseName}</td>
                        </tr>)}
                    </tbody> */}
                  {/* // </Table> */} 
                  <BootstrapTable keyField="name" data={studentData} columns={columns} />
                </div>
                : <h1>No Student records for this Study Center</h1>}
                </div>
          <>
          <button onClick={() =>{setShow(true)}}>New Application</button>
          {/* <ModalComponent show={modalShowToggle}></ModalComponent> */}
          {/* <FormModal showModal={showModal} hideModalHandler={hideModalHandler}></FormModal> */}
          <ModalWithGrid show={show} onHide={() => {setShow(false)}}/>
          
    </>
        </div>
      )
  }

  

}


export default StudyCntrDashboard;