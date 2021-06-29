import React, {useContext} from "react";
import axios from 'axios';
import { firebase } from "../../config/firebase";

import logo from "../../components/Navbar/Logo.png";
import "fontsource-roboto";
import { Grid } from "@material-ui/core";
import GoogleLogo from './googleLogo.png';
import { useStyles, GoogleButton } from "./LoginScreenStyles";
import {AuthContext} from '../../context/AuthContext';
import { useHistory } from "react-router-dom";



async function loginGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    const result = await firebase.auth().signInWithPopup(provider);
    return {name: result.user.displayName, email: result.user.email};
  }



const LoginScreen = () => {
	const classes = useStyles();
	const {setUser} = useContext(AuthContext);
	const history = useHistory();

	async function handleClick() {
		const user = await loginGoogle();
		const userData = await axios.get('http://localhost:3333/users/login', {
			params: {
			  email: user.email,
			  name: user.name
			}
		});
		console.log(userData)
		setUser(userData);
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
						onClick={handleClick}
					>
						Sign in with Google
					</GoogleButton>
				</Grid>
			</Grid>
		</div>
	);
};

export default LoginScreen;
