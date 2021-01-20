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
            className="custom-modal"
            dialogClassName="custom-modal"
            bsClass="my-modal"
            centered
            >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                Using Grid in Modal
              </Modal.Title>
            </Modal.Header>
            <Modal.Body className="show-grid">
            <Container fluid="md">
            <Form>
  <Form.Row>
    <Col xs={10} md={2} >
    <Form.Group controlId="Form.SelectCourse">
      <Form.Label>Course Applied </Form.Label>
      <Form.Control as="select" custom>
        <option>BA</option>
        <option>MA</option>
        <option>MTech</option>
        <option>BSC</option>
        <option>MSC</option>
      </Form.Control>
    </Form.Group>
    </Col>

    <Col xs={10} md={2}>
    <Form.Group as={Col} controlId="formGridStdyCntrID">
      <Form.Label>Study Center Id</Form.Label>
      <Form.Control />
    </Form.Group>
    </Col>

    <Col xs={10} md={2}>
    <Form.Group as={Col} controlId="formGridName">
      <Form.Label>Name</Form.Label>
      <Form.Control />
    </Form.Group>
    </Col>
    <Col xs={10} md={2}>
    <Form.Group as={Col} controlId="formGridFatherName">
      <Form.Label>Father's Name</Form.Label>
      <Form.Control />
    </Form.Group>
    </Col>
    <Col xs={10} md={2}>
    <Form.Group as={Col} controlId="formGridAAdharNo">
      <Form.Label>Aadhar No.</Form.Label>
      <Form.Control />
    </Form.Group>
    </Col>
    </Form.Row>
    <p>Address For Communication</p>
    <Form.Row>
    

    {/* <Col xs={12} md={3} >
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control size="sm" type="email" placeholder="Enter email" />
    </Form.Group>
    </Col> */}
    
    
    <Col xs={10} md={2}>
    <Form.Group as={Col} controlId="formGridDoorNo">
      <Form.Label>Door No.</Form.Label>
      <Form.Control />
    </Form.Group>
    </Col>

    <Col xs={10} md={2}>
    <Form.Group as={Col} controlId="formGridStreet">
      <Form.Label>Street</Form.Label>
      <Form.Control />
    </Form.Group>
    </Col>

    <Col xs={10} md={2}>
    <Form.Group as={Col} controlId="formGridPost">
      <Form.Label>Village/Post</Form.Label>
      <Form.Control />
    </Form.Group>
    </Col>

    <Col xs={10} md={2}>
    <Form.Group as={Col} controlId="formGridMandal">
      <Form.Label>Mandal/Town</Form.Label>
      <Form.Control />
    </Form.Group>
    </Col>

    <Col xs={10} md={2}>
    <Form.Group as={Col} controlId="formGridDistrict">
      <Form.Label>District</Form.Label>
      <Form.Control />
    </Form.Group>
    </Col>

    <Col xs={10} md={2}>
    <Form.Group as={Col} controlId="formGridPincode">
      <Form.Label>PinCode</Form.Label>
      <Form.Control />
    </Form.Group>
    </Col>
  </Form.Row>
  

  {/* <Form.Group controlId="formGridAddress1">
    <Form.Label>Address</Form.Label>
    <Form.Control size="sm" placeholder="1234 Main St" />
  </Form.Group>

  <Form.Group controlId="formGridAddress2">
    <Form.Label>Address 2</Form.Label>
    <Form.Control size="sm" placeholder="Apartment, studio, or floor" />
  </Form.Group>

  <Form.Row>
    <Form.Group as={Col} controlId="formGridCity">
      <Form.Label>City</Form.Label>
      <Form.Control />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>State</Form.Label>
      <Form.Control as="select" defaultValue="Choose...">
        <option>Choose...</option>
        <option>...</option>
      </Form.Control>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridZip">
      <Form.Label>Zip</Form.Label>
      <Form.Control />
    </Form.Group>
  </Form.Row>

  <Form.Group id="formGridCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group> */}
  <Form.Row>
  <Button variant="primary" type="submit">
    Submit
  </Button>
  </Form.Row>
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