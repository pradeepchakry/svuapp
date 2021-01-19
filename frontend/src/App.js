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
import StudyCntrDashboard from './StudyCntrDashboard';

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



function App() {
  const [auth, setAuth] = React.useState(false);

  const readCookie = () => {
    const user = Cookies.get("user");
    console.log("user in readCookie --> " + user);
    console.log("nodalUser in readCookie --> " + Cookies.get("nodalUser"));
    console.log("studyCntrUser in readCookie --> " + Cookies.get("studyCntrUser"));
    if(user) {
      setAuth(true);
    }
  }
  
  React.useEffect(() => {
    console.log("Hi! from userEffect()")
    readCookie();
  }, [])


  return (
    <div className="App">
      <AuthApi.Provider value={{auth,setAuth}}>
      <Router>
        <Routes />
      </Router>
      </AuthApi.Provider>
    </div>
  );
}




const NodalLogin = () => {

  const [phone, setPhone] = React.useState("");
  const [errors, setErrors] = React.useState({});
  const [showModal, setShowModal] = React.useState(false);
  const [modalOpen, setModalOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [displayOtpForm, setDisplayOtpForm] = React.useState(false);
  const [show, setShow] = React.useState(false);
  const [otpSentSessionId, setOtpSentSessionId] = React.useState("");
  const [studentId, setStudentId] = React.useState("");

  async function handleSendOTP() {
    console.log("sending otp to " + phone);
    let endPoint = "https://2factor.in/API/V1/4db73c1e-4cfa-11eb-8153-0200cd936042/SMS/"
        + phone + "/AUTOGEN";
    await fetch(endPoint)
        .then(res => res.json())
        .then((data) => {
          setOtpSentSessionId(data.Details);
        })
        .catch(console.log)
    console.log("otp sent sessionID >> " + otpSentSessionId);
    
  }
  
   function checkExistingStudent(input) {
    console.log("In checkExistingStudent...")
    let result = false;
    let endPoint = "http://localhost:8080/api/v1/Student/" + input;
     fetch(endPoint)
        .then(res => {
          if(!res.ok) {
            result = false;
            Cookies.set("user", "loginTrue");
            Cookies.set("nodalUser", "loginTrue");
            Auth.setAuth(true);
            console.log("No Student found with the number " + input 
                + " redirecting to new application!");
          } else {
            result = true;
            console.log("Found an existing record with the number " + input
                + " enrolled, fethcing record!");
  
            fetch("http://localhost:8080/api/v1/Student/" + phone)
                .then(resp => resp.json())
                .then((data) => {
                  console.log("Existing student details --> " + JSON.stringify(data));
                  setStudentId(data.student_id);
                  Cookies.set("studentFound", "true");
                  Cookies.set("studentId", data.student_id);
                  Cookies.set("user", "loginTrue");
                  Cookies.set("nodalUser", "loginTrue");
                  Auth.setAuth(true);
                })
          }
        }
        ).catch(console.log);
        return result;
  }
  
   async function verifyOTP(otpReceived) {
    console.log(otpReceived);
    let validMobile = false;
    let endPoint = "https://2factor.in/API/V1/4db73c1e-4cfa-11eb-8153-0200cd936042/SMS/VERIFY/"
        + otpSentSessionId + "/" + otpReceived;
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

  const handleClose = () => setShow(false);
  const handleShow = () => {
    console.log("In handleOnClick...");
    console.log("sending otp");
    //handleSendOTP();
    console.log("Otp sent successfully");
    setShow(true);
  }

  

  const Auth = React.useContext(AuthApi);
  const [otp, setOtp] = React.useState("");

  const handleChange = otp => {
    setOtp(otp);
    console.log("Otp entered is " + otp)
  }
  
  const handleOTPSubmit = () => {
      console.log("verify otp" + otp);
      
      // verifyOTP(otp).then(bool => {
      //   console.log("otp valid " + bool)
      //   Cookies.set("user", "loginTrue");
      //   Cookies.set("nodalUser", "loginTrue");
      //   Auth.setAuth(true);
      //   window.nodalLoggedIn = true;
      //   window.studyCntrLoggedIn = false;
      //   window.homePage = false;
      // });

      Cookies.set("user", "loginTrue");
      console.log(Cookies.get("user"));
      if(Cookies.get("user") == "loginTrue") {
        checkExistingStudent(phone);
      }
  }

  const handlePhone = (e) => {
    setPhone(e.target.value)
  }

  return (
    <div>
      <label>
        Phone
        <input
        type="tel"
        name="phone"
        onChange={handlePhone}
      />
      </label>
      <div className="form-group">
      <>
      <button variant="primary" onClick={handleShow}>
        Login
      </button>

      <Modal size="sm" show={show} onHide={handleClose} 
          aria-labelledby="example-modal-sizes-title-sm">
        <Modal.Header closeButton>
          <Modal.Title>Verify OTP</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <OtpInput
            value={otp}
            onChange={handleChange}
            numInputs={6}
            separator={<span>-</span>}
          />
        </Modal.Body>
        <Modal.Footer>
          <button variant="secondary" onClick={handleClose}>
            Change Number
          </button>
          <button variant="primary" onClick={handleOTPSubmit}>
            Submit
          </button>
        </Modal.Footer>
      </Modal>
    </>
      </div>
      
    </div>

    
  )
}

const StudyCntrLogin = () => {
  const Auth = React.useContext(AuthApi);
  const [input, setInput] = React.useState({});
  const [errors, setErrors] = React.useState({});

  async function authenticateUser(input) {
    let userID = input["username"];
    let password = input["password"];
    let inputNew = {"userID": userID, "password": password};

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userID: userID, password: password })
    };

    console.log("Authenticating User " + inputNew["userID"] 
        + " with password " + inputNew["password"]);
    let result = "";
    let endPoint = "http://localhost:8080/api/v1/studyCentres/validateUser";
    const response = await fetch(endPoint, requestOptions)
      .then(response => response.text())
      .then(data => {
        console.log(data);
        result = data;
      })    
      .catch(error => console.log("Error detected: " + error));
    console.log("got response --> " + result);
    return result;
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if(validate()){
      authenticateUser(input).then(result => {
        console.log("got result in validate block --> " + result);
        if(result === "true") {
          Cookies.set("username", input["username"]);
          Cookies.set("user", "loginTrue");
          Cookies.set("studyCntrUser", "loginTrue");
          Auth.setAuth(true);
        } else {
          alert("Username or Password is incorrect.");
          resetForm();
        }
      });
    } else {
      resetForm();
    }

  }

  const handleChange = (event) => {
    let userInput = input;
    userInput[event.target.name] = event.target.value;
    setInput(userInput)
  }

  const resetForm = () => {
    Array.from(document.querySelectorAll("input")).forEach(
      input => (input.value = "")
    );
    setInput({});
  };

  const validate  = () => {
    let userInput = input;
    let userErrors = {};
    let isValid = true;

    if (!userInput["username"]) {
        isValid = false;
        userErrors["username"] = "Please enter your username.";
        resetForm();
    }
    
    if (typeof userInput["username"] !== "undefined") {
        const re = /^\S*$/;
        if(userInput["username"].length < 6 || !re.test(userInput["username"])) {
          isValid = false;
          userErrors["username"] = "Please enter valid username.";
          resetForm();
        }
        
    }
    
    if (!userInput["password"]) {
      isValid = false;
      userErrors["password"] = "Please enter your password.";
    }

    if (userInput["username"]){
      if(!userInput["password"]) {
        isValid = false;
        userErrors["password"] = "Please enter your password.";
      }
      setInput(userInput);
  }

    setErrors(userErrors);
    return isValid;
  }
  return (
    <div className="backdrop" style={{backdropStyle}}>
      <form onSubmit={handleSubmit}>
          <div class="form-group">
            <label for="username">Username </label>
            <input 
              type="text" 
              name="username" 
              value={input.username}
              onChange={handleChange}
              class="form-control" 
              placeholder="Enter username" 
              id="username" />
          <div className="text-danger">{errors.username}</div>
        </div>
        <div class="form-group">
            <label for="password">Password </label>
            <input 
              type="password" 
              name="password" 
              value={input.password}
              onChange={handleChange}
              class="form-control" 
              placeholder="Enter password" 
              id="password" />
          <div className="text-danger">{errors.username}</div>
        </div>
        <div className="text-danger">{errors.password}</div>
        <input type="submit" value="Submit" class="btn btn-success" />
      </form>
    </div>
  )
}

const NodalDashboard = () => {
  const Auth = React.useContext(AuthApi);
  const [show, setShow] = React.useState(true);
  const handleClose = () => {
    setShow(false);
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


// const StudyCntrDashboard = async () => {
//   const Auth = React.useContext(AuthApi);
//   const [studentData, setStudentData] = React.useState([]);
//   const [value, setValue] = React.useState(0);
//   const [open, setOpen] = React.useState(false);
//   const [formData, setFormData] = React.useState({});
//   const [show, setShow] = React.useState(false);
//   const [modal, setModal] = React.useState(false);
//   const [dataExists, setDataExists] = React.useState(false);
//   const [fetchFinished, setFetchFinished] = React.useState(false);

//   // useEffect(() => {
//   //   loadData();
//   //   //getData()
//   // }, [])

//   // const loadData = async () => {
//   //   let userID = Cookies.get("username");
//   //   let len = userID.length;
//   //   let lastChar = userID.charAt(len - 1);
//   //   console.log("lastChar -> " + lastChar);
//   //   console.log("userID while fetching studing data--> " + lastChar)
//   //   let endPoint = "http://localhost:8080/api/v1/Students/" + lastChar;
//   //   let result = false;
//   //   await fetch(endPoint).then(resp => resp.json())
//   //       .then(receivedData => {
//   //         console.log("received data --> " + receivedData)
//   //         setStudentData(receivedData)
//   //         setDataExists(true)
//   //       });
//   // }
  

//   const onCloseModal = () => setOpen(false);

//   const handleClose = () => {
//     setShow(false);
//   }
//   const handleShow = () => {
//     console.log("Rendering Form modal")
//     setShow(true);
//   }

//   const handleChange = formData => {
//     setFormData(formData);
//     console.log("Form Data --> " + formData)
//   }
  
//   const handleFormSubmit = () => {
//     console.log("Form Data --> " + formData)
//   }

//   const toggle = () => {
//     setModal(!modal);
//   }
//   let userData = [];
//   let userName = "";
//   let userFetched = false;

//   const handleOnClick = () => {
//     Auth.setAuth(false);
//     Cookies.remove("user");
//     Cookies.remove("studyCntrUser");
//     Cookies.remove("username");
//     // window.nodalLoggedIn = false;
//     // window.studyCntrLoggedIn = false;
//     // window.homePage = true;
//   } 
   
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

//       console.log("student data --> " + studentData);
//       return(
//         <div>
//           <div style={{float: 'right'}}>
//             <button onClick={handleOnClick}>Logout</button>
//           </div>
//           <div>
//             { dataExists ? <div>
//               <h1>Welcome {userName}</h1>
//                 <h3>Student Records</h3>
//                 {/* <StudentRecords data={studentData} /> */}
//                 {studentData.map(record => (
//                   <div key={record.id}> </div>
//                 ))}
//                 </div>
//                 : <h1>No Student records for this Study Center</h1>}
//                 </div>
//           <>
//           <button onClick={handleShow}>New Application</button>
    
//           <Modal show={show} onHide={handleClose} 
//             dialogClassName="modal-full"
//             >
//             <Modal.Header closeButton style={{float: 'left'}}>
//             </Modal.Header>
//             <Modal.Body style={{'max-height': '50vh', 'overflow-y': 'auto'}}>
//               <ApplicationForm />
//             </Modal.Body>
//             </Modal>
//         </>
//         </div>
//       )
  // if(isFetching) {
  //   return <div> Loading.. </div>
  // } else {
  

  // fetchExistingRecords().then(data => {
    // let tableSize = 0;
    // console.log("result after fetch function --> " + dataExists);
    // console.log("Student data exists! Rendering records --> " + JSON.stringify(studentData));
    // userFetched = true;

    // var key, count = 0;
    // for( key in studentData) {
    //     if(studentData.hasOwnProperty(key)) {
    //         count++;
    //     }
    // }

    //   console.log(count)
    //   tableSize = count;  
// }
// }

const HomeComponent= () => {
      return(
          <div>
            <p>SVUDDE Online Application</p>
          </div>  
      )
}

const Routes = () => {
  const Auth = React.useContext(AuthApi);
  const [value, setValue] = React.useState(0);

  const handleTabs = (e, val) => {
    console.warn("tab value is " + val)
    setValue(val);

    
  }
  var displayHome = true;
  var nodalUserVal = Cookies.get("nodalUser");
  var displayNodal = false;
  if(nodalUserVal) {
    console.log("Set Display Nodal User True");
    displayNodal = true;
    displayHome = false;
  }

  var studyCntrUserVal = Cookies.get("studyCntrUser");
  var displayStudyCntr = false;
  if(studyCntrUserVal) {
    console.log("Set Display Study Center User True");
    displayStudyCntr = true;
    displayHome = false;
  }

  console.log("users --> " + " Nodal value -> " + nodalUserVal + " Study Center value -> " + studyCntrUserVal)

  return(
    <div>
    <AppBar position="static" >
      {displayNodal && <Tabs value={value} onChange={handleTabs} >
        <Tab label="Home"  component={Link} to="/"/>
        <Tab label="Dashboard" component={Link} to="/nodalDashboard" />
      </Tabs>}

      {displayStudyCntr && <Tabs value={value} onChange={handleTabs} >
        <Tab label="Home"  component={Link} to="/"/>
        <Tab label="Dashboard" component={Link} to="/studyCntrDashboard" />
      </Tabs>}

      {displayHome && 
        <Tabs value={value} onChange={handleTabs} >
        <Tab label="Home"  component={Link} to="/"/>
        <Tab label="Study Center" component={Link} to="/studyCntrLogin"/>
        <Tab label="Nodal" component={Link} to="/nodalLogin"/>
      </Tabs>}

    </AppBar>
    <switch>
      <Route path="/" component={HomeComponent} auth={Auth.auth}/>
      <ProtectedStudyCntrLogin path="/studyCntrLogin" component={StudyCntrLogin} auth={Auth.auth} />
      <ProtectedNodalLogin path="/nodalLogin" component={NodalLogin} auth={Auth.auth} />
      <ProtectedNodalRoute path="/nodalDashboard" auth={Auth.auth} component={NodalDashboard} />
      <ProtectedStudyCntrRoute path="/studyCntrDashboard" auth={Auth.auth} component={StudyCntrDashboard} />
    </switch>
    </div>
  )
}

const ProtectedStudyCntrRoute = ({auth, component: Component, ...rest}) => {
  return(
    <Route
    {...rest}
    render = {() => auth? (
      <Component />
      
    ): (
      <Redirect to="/studyCntrLogin" />
    )
    }
    />
  )
}

const ProtectedNodalRoute = ({auth, component: Component, ...rest}) => {
  return(
    <Route
    {...rest}
    render = {() => auth? (
      <Component />
      
    ): (
      <Redirect to="/nodalLogin" />
    )
    }
    />
  )
}

const ProtectedNodalLogin = ({auth, component: Component, ...rest}) => {
  return(
    <Route
    {...rest}
    render = {() => !auth? (
      <Component />
    ): (
      <Redirect to="/nodalDashboard" />
    )
    }
    />
  )
}

const ProtectedStudyCntrLogin = ({auth, component: Component, ...rest}) => {
  return(
    <Route
    {...rest}
    render = {() => !auth? (
      <Component />
    ): (
      <Redirect to="/studyCntrDashboard" />
    )
    }
    />
  )
}


export default App;
