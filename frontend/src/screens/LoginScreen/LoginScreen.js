import React from "react";

import logo from "../../components/Navbar/Logo.png";
import "fontsource-roboto";
import { Grid } from "@material-ui/core";
import GoogleLogo from './googleLogo.png';
import { useStyles, GoogleButton } from "./LoginScreenStyles";


const LoginScreen = () => {
	const classes = useStyles();
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
					>
						Sign in with Google
					</GoogleButton>
				</Grid>
			</Grid>
		</div>
	);
};

export default LoginScreen;
