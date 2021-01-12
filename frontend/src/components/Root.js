import React, { useState } from "react";
import { Link } from 'react-router-dom';
import Login from './Login';


   class Root extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
    
        return(
            <div>
                <p>Please choose a repository from the list below.</p>
                <ul>
                    <li><Link to="/login">Login as a Study Center User</Link></li>
                    <li><Link to="/phonelogin">Login as a Student</Link></li>
                </ul>
            </div>
        );

        }
    }

   export default Root;