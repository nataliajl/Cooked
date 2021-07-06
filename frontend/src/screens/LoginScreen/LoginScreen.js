import React, {useContext} from "react";
import axios from 'axios';
import { firebase } from "../../config/firebase";

import logo from "../../components/Navbar/Logo.png";
import "fontsource-roboto";
import { Grid } from "@material-ui/core";
import FacebookIcon from '@material-ui/icons/Facebook';
import GoogleLogo from './googleLogo.png';
import { useStyles, GoogleButton, FacebookButton } from "./LoginScreenStyles";
import {AuthContext} from '../../context/AuthContext';
import { useHistory } from "react-router-dom";



async function getGoogleUserData() {
    const provider = new firebase.auth.GoogleAuthProvider();
    const result = await firebase.auth().signInWithPopup(provider);
    return result.user;
}

function googleAdapter(googleData) {
    return {name: googleData.displayName, email: googleData.email};
}

async function getFacebookUserData() {
    const provider = new firebase.auth.FacebookAuthProvider();
    const result = await firebase.auth().signInWithPopup(provider);
	return result.user;
    // return {name: result.user.providerData[0].displayName, email: result.user.providerData[0].email};
}

function facebookAdapter(facebookData) {
    return {name: facebookData.providerData[0].displayName, email: facebookData.providerData[0].email};
}

async function getUserData(source){
	let rawUser = {};
	switch (source){
		case "google": 
			rawUser = await getGoogleUserData();
			return googleAdapter(rawUser);
		case "facebook": 
			rawUser = await getFacebookUserData();
			return facebookAdapter(rawUser);
		default: 
			return {user: "", email: ""};
	}
}



const LoginScreen = () => {
	const classes = useStyles();
	const {setUser} = useContext(AuthContext);
	const history = useHistory();

	async function handleClick(source) {
		const user = await getUserData(source);
		const userData = await axios.get('http://localhost:3333/users/login', {
			params: {
			  email: user.email,
			  name: user.name
			}
		});
		setUser(userData.data);
		history.push('/');
	}

	return (
		<div className={classes.root}>
			<Grid container  xs={12} direction="column" className={classes.centered} >
				<Grid container xs={12} alignItems="center" justify="center">
					<img src={logo} alt="Cooked - Making the leftovers a festivity" className={classes.logo}/>
				</Grid>
				<Grid container xs={12} alignItems="center" justify="center" direction="column" >
					<p className={classes.text}>Welcome! </p>
					<p className={classes.text}>Click one of the buttons below to log in</p>
				</Grid>
				<Grid container xs={12} alignItems="center" justify="center">
					<GoogleButton
						startIcon={<img src={GoogleLogo} className={classes.googleImage}/>}
						onClick={() => handleClick("google")}
					>
						Sign in with Google
					</GoogleButton>
					<FacebookButton
						startIcon={<FacebookIcon className={classes.facebookImage}/>}
						onClick={() => handleClick("facebook")}
					>
						Sign in with Facebook
					</FacebookButton>
				</Grid>
			</Grid>
		</div>
	);
};

export default LoginScreen;
