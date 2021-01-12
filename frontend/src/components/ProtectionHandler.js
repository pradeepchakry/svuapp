import {React} from "react";
import {Link} from 'react-router-dom';

export default class ProtectedHandler extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
    return (
        <div>
            <Link to="/logout">Logout</Link>
        </div>
    )

    }
} 