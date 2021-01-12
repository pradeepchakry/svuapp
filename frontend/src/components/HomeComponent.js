import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import GroupIcon from "@material-ui/icons/Group";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Checkbox from 'react-simple-checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { useHistory } from "react-router-dom";
import DatePicker from 'react-datepicker';
import { withStyles } from "@material-ui/core/styles";
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './Home';
import User from './User'
// import Sonnet from 'react-bootstrap/Sonnet'
import { AppBar, Tabs, Tab } from '@material-ui/core';
// import TabPanel from '@material-ui/lab/TabPanel';
import BetterUser from './BetterUser'



const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const Copyright = () => {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" to="https://material-ui.com/">
        SVUDDE
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const routeChange = () => { 
  // let path = `/home`; 
  //eslint-disable-next-line no-restricted-globals
  history.push("/home");
}

const TabPanel = (props) => {
    const {children, value, index} = props;
    return (<div>
        {
            value===index && (
                <h1>{children}</h1>
            )
        }
            
        </div>
    )
}

export default function HomeComponent() {

    const[users, setUsers] = React.useState([]);

    const [value, setValue] = React.useState(0);

    function userHistoryExists(userId) {
        // api call to get user history
        return true;
    }

    function fetchUserHistory(userId) {
        // Dummy data for now call API to fetch
        let data = [{studentId: "101",
            name: "Sunny Leone",
            email: "sunny@ph.com",
            status: "Payment pending"
        }]
        return data;
    }

    const handleTabs = (e, val) => {
        console.warn("tab value is " + val)
        setValue(val);
    }

        console.log(window.user);

        let userId = "";

        let userFetched = false;

        let userData = [];

        let tableSize = 0;

        if(window.user) {
            userId = window.userId;
            console.log("fetching user history for " + userId);

            if(userHistoryExists(userId)) {
                console.log(fetchUserHistory(userId));
                userFetched = true;
                userData = fetchUserHistory(userId);

                var key, count = 0;
                for( key in userData) {
                    if(userData.hasOwnProperty(key)) {
                        count++;
                    }
                }

                console.log(count)
                tableSize = count;
            }
        }

        return(
                <div>
                {window.student && <Home />}
                {userFetched ? <div>
                    <h1>Welcome {userId}</h1>
                    <AppBar position="static" >
                        <Tabs value={value} onChange={handleTabs}>
                            <Tab label="Saved Applications" />
                            <Tab label="New Application " />
                        </Tabs>
                        
                    </AppBar>
                    <TabPanel value={value} index={0}>
                        <User data={userData} />
                    </TabPanel>
                    <TabPanel value={value} index={1}><Home /></TabPanel>
            </div>
            : <Home />}
            </div>
            
        )
    
}