import React, { Component } from 'react';
import VerifyModal from "./components/Modal";
import { Button } from "reactstrap";

class OtpDialogBox extends Component {
    constructor(props) {
        super(props);

        this.state = {
            modalOpen: false,
            otp: ""
        };
    }

    openModal = () => {
        this.setState({
            modalOpen: true            
        });
    };

    closeModal = val => {
        this.setState({
            modalOpen: false,
            otp: val
        })
    }

    render() {
        const { modalOpen, otp } = this.state;
        return(
            <div
                className="m5-5"
                style= {{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center"
                }}>
                <Button color="primary" style={{width: 200}} onClick={this.openModal}>
                    Open Modal
                </Button>
                {modalOpen ? (
                    <VerifyModal
                        show={modalOpen}
                        close={val => this.closeModal(val)}
                        headerMessage="Enter the 4-digit OTP sent to your mobile number"
                    />
                ): null}
                {otp.length ? <p> You submitted: {otp}</p>: null}
            </div>
        );
    }
}

export default OtpDialogBox;