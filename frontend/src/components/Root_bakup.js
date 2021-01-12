// import React, { useState } from "react";
// import { Link } from 'react-router-dom';
// import Login from './Login';

// const LoginContext = React.createContext({student: false});
//    class Root extends React.Component {
    
//     toggle = () => {
//         LoginContext.student = true;
//     }

//     constructor(props) {
//         super(props);
//         this.state = {
//             isStudent: false
//         }
//     }

//     render() {
//         return(
//             <div>
//                 <p>Please choose a repository from the list below.</p>
//                 <ul>
//                     <li><Link to="/login">Login as a Study Center User</Link></li>
//                     <li><Link onClick={()=>this.state.isStudent=true} to="/phonelogin">Login as a Student</Link></li>
//                 </ul>
//             </div>
//         );

//         }
//     }

//    export default Root;