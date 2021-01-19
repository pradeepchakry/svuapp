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
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import "./styles.css";





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
          <div style={{ padding: "20px" }}>
            { dataExists ? <div>
              <h1>Welcome {userName}</h1>
                <h3>Student Records</h3>
                  {/* <ReactBootStrap.Table striped bordered hover>
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
                      {studentData.map(renderStudents)}
                    </tbody>
                  </ReactBootStrap.Table> */}
                  <BootstrapTable keyField="name" data={studentData} columns={columns} />
                </div>
                : <h1>No Student records for this Study Center</h1>}
                </div>
          <>
          <button onClick={handleShow}>New Application</button>
    
          <Modal show={show} onHide={handleClose} 
            aria-labelledby="contained-modal-title-vcenter"
            >
            <Modal.Header closeButton>
            </Modal.Header>
            <Modal.Body style={{'max-height': '50vh', 'overflow-y': 'auto'}}>
              <ApplicationForm />
            </Modal.Body>
            </Modal>
        </>
        </div>
      )
  }

}


export default StudyCntrDashboard;