import React, { Component } from "react";
import {Modal, ModalBody, ModalFooter, ModalHeader, Button} from "reactstrap";
import history from './history';
// import "./modal.scss";

const routeChange = () => { 
    // let path = `/home`; 
    history.push("/home");
  }

class VerifyModal extends Component {
    constructor(props) {
        super(props);

        this.state = {
            otp: [],
            otpVerified: false
        };
        this.textInput1 = React.createRef();
        this.textInput2 = React.createRef();
        this.textInput3 = React.createRef();
        this.textInput4 = React.createRef();
        this.textInput5 = React.createRef();
        this.textInput6 = React.createRef();

    }

    componentDidMount() {
        if (this.props.show === true) {
            setTimeout( () => {
                this.textInput1.current.focus();
            });
        }
    }

    handleKeyPress = async (e, field) => {
        let next = field.current.nextSibling;

        if(next && next.tagName === "INPUT") {
            field.current.nextSibling.focus();
        }
        
        this.setState(prevState => ({
            otp: [...prevState.otp, field.current.value]
        }));
    };

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
        var length = otpReceived.length;  // find an array length
        var str = "";
        for(var i=0; i< length; i++){
            str += otpReceived[i];  // concat Array value to a string variable
            // if(i < (length-1) ){
            //     str += ',';  // add separator
            // }
        }
        console.log("str array --> " + str);
        
        let validMobile = false;
        let endPoint = "https://2factor.in/API/V1/4db73c1e-4cfa-11eb-8153-0200cd936042/SMS/VERIFY/" + this.props.otpSentSessionId + "/" + str;
        await fetch(endPoint)
            .then(res => {
              console.log("otp verification >> " + res.staus);
              if(!res.ok) {
                    console.log(`HTTP error! status: ${res.status}`);
                } else {
                    console.log("Status: OK");
                    validMobile = true;
                }           
            })
            .catch(console.log);
        return validMobile;
      }

      submitForm = e => {
        let otpVerified = false;
        console.log(" session id received is " + this.props.otpSentSessionId);
        let otpEntered = this.state.otp;
        console.log("otp entered" + otpEntered)
        this.verifyOTP(otpEntered).then( valid => {
            if(!valid) {
                console.log("verified --> " + valid)
                console.log("OTP verification failed, Ask user to resend or use a different mobile number!");
                alert("In valid OTP, try again!")
                this.props.close(otpVerified);
            }
            else {
                console.log("OTP verification success ");
                otpVerified = true;
                console.log("return value to Previous page" + otpVerified)
                routeChange();
        
        
            //this.checkExistingStudent(input);
        }
          
        });
        
      // }
      }

    preventSubmit = e => {
        if(e.which === 13) {
            e.preventDefault();
        }
    }

    render() {
        return(
            <React.Fragment>
                <Modal isOpen={this.props.show} className="modal-sm modal-otp">
                    <ModalHeader>
                        <span>{this.props.headerMessage}</span>
                    </ModalHeader>
                    <ModalBody>
                        <form onKeyPress={this.preventSubmit}>
                            <input
                                className="otp_verify_box"
                                name="textInput1"
                                type="text"
                                maxLength="1"
                                ref={this.textInput1}
                                onKeyUp={e => this.handleKeyPress(e, this.textInput1)}
                            />
                            <input
                                className="otp_verify_box"
                                name="textInput12"
                                type="text"
                                maxLength="1"
                                ref={this.textInput2}
                                onKeyUp={e => this.handleKeyPress(e, this.textInput2)}
                            />
                            <input
                                className="otp_verify_box"
                                name="textInput3"
                                type="text"
                                maxLength="1"
                                ref={this.textInput3}
                                onKeyUp={e => this.handleKeyPress(e, this.textInput3)}
                            />
                            <input
                                className="otp_verify_box"
                                name="textInput4"
                                type="text"
                                maxLength="1"
                                ref={this.textInput4}
                                onKeyUp={e => this.handleKeyPress(e, this.textInput4)}
                            />
                            <input
                                className="otp_verify_box"
                                name="textInput5"
                                type="text"
                                maxLength="1"
                                ref={this.textInput5}
                                onKeyUp={e => this.handleKeyPress(e, this.textInput5)}
                            />
                            <input
                                className="otp_verify_box"
                                name="textInput6"
                                type="text"
                                maxLength="1"
                                ref={this.textInput6}
                                onKeyUp={e => this.handleKeyPress(e, this.textInput6)}
                            />
                        </form>

                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={this.submitForm}>Submit</Button>
                    </ModalFooter>
                </Modal>
            </React.Fragment>
        )
    }
}

export default VerifyModal;