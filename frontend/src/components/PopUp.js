import React, { Component } from "react";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

export default class PopUp extends Component {
  handleClick = () => {
   this.props.toggle();
  };
  render() {
  return (
  //  <div className="modal">
  //    <div className="modal_content">
  //    <span className="close" onClick={this.handleClick}>&times;    </span>
  //    <p>{this.props.phoneToPopUp}</p>
  //   </div>
  //  </div>

<Popup trigger={<button className="button"> Open Modal </button>} modal>
    <span> Modal content </span>
  </Popup>
  );
 }
}