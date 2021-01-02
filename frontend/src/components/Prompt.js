import React from 'react';
import ReactDom from 'react-dom';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

/** The prompt content component */
export default class Prompt extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <Popup trigger={<button> Trigger</button>} position="right center">
        <div>Phone number {this.props}</div>
      </Popup>;
    }
}
