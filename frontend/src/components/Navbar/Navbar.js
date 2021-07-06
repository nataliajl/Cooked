import React, {useContext} from 'react';

import 'fontsource-roboto';
import Appbar from '@material-ui/core/AppBar'

import { useHistory } from "react-router-dom";

import {AuthContext} from '../../context/AuthContext';
import ClickableComponent from '../../components/ClickableComponent/ClickableComponent'

import './Navbar.css';
import logo from './Logo.png'
import { AccountButton, SignInButton, StyledRightIcon, useStyles } from './NavbarStyles';


export default function Navbar() {
    const classes = useStyles();
    const {isUserLoggedIn, logout, user} = useContext(AuthContext);
    const history = useHistory();
    console.log(user)

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
                        <img className={classes.img} src={logo}/>
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
                        !isUserLoggedIn() ? (
                            <>
                                <SignInButton onClick={() => history.push('/login')}>
                                    Sign in
                                </SignInButton>
                            </>
                        ) : (
                            <>
                                <p>Olá {user.name}</p>
                                <AccountButton onClick={logout}>
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
