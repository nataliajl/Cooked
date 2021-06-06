import React, {useContext} from 'react';


import {withStyles} from '@material-ui/core/styles'
import 'fontsource-roboto';
import Appbar from '@material-ui/core/AppBar'

import { useHistory } from "react-router-dom";
import ChevronRightRoundedIcon from '@material-ui/icons/ChevronRightRounded';
import { Button } from '@material-ui/core';

import logo from './Logo.png'
import './Navbar.css';
import {AuthContext} from '../../context/AuthContext';
import ClickableComponent from '../../components/ClickableComponent/ClickableComponent'

import useStyles from './NavbarStyles';

const StyledRightIcon = withStyles({
    root: {
        color: "#999999"
    },
  })(ChevronRightRoundedIcon);

const AccountButton = withStyles({
    root: {
        background: '#ffffff',
        borderRadius: 6,
        color: '#E43636',
        height: 40,
    },
    label: {
        textTransform: 'capitalize',
        fontFamily: "Roboto",
        fontSize: 16
    },
})(Button);

const SignInButton = withStyles({
    root: {
        background: 'linear-gradient(223.65deg, #E43636 12.5%, #F87E7E 111.77%)',
        borderRadius: 6,
        color: 'white',
        height: 32,
        width: 110.18
    },
    label: {
        textTransform: 'capitalize',
        fontFamily: "Roboto",
        fontSize: 16
    },
})(Button);




export default function Navbar() {
    const classes = useStyles();
    const {user} = useContext(AuthContext);
    const history = useHistory();

    const ListItem = ({text, link}) => {
        return (
                <ClickableComponent className="navbar-item-div" onClick={() => history.push(link)} >
                    <p className="navbar-item">{text}</p>
                    <StyledRightIcon/>
                </ClickableComponent>


        );
    }

    return (
        <Appbar color="#ffffff" position="sticky" elevation={0}>
            <div className="appbar">
                <div className="leftappbar">
                    <ClickableComponent onClick={() => history.push('/')}>
                        <img src={logo}/>
                    </ClickableComponent>
                    <ListItem 
                        text="Keep a Recipe"
                        link='/keeparecipe'
                    />
                    <ListItem 
                        text="Favorites"
                        link='/recipe'
                    />
                    <ListItem 
                        text="Threads"
                        link='/keeparecipe'
                    />  
                </div>
                <div className="rightappbar">
                    {
                        user === null ? (
                            <>
                                <AccountButton>
                                    Create account
                                </AccountButton>
                                <SignInButton>
                                    Sign in
                                </SignInButton>
                            </>
                        ) : (
                            <>
                                <p>Olá</p>
                                <AccountButton>
                                    Log Out
                                </AccountButton>
                            </>
                        )
                    }
                </div>
            </div>
        </Appbar>
    );
}

