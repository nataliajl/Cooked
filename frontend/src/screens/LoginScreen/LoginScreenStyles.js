import { makeStyles, withStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import {inputElements} from '../../cookedStyles.js';

export const useStyles = makeStyles((theme) => ({
    root: {
        flex: 1,
        height: "100vh",
        alignContent: "center",
        justifyContent: "center"
    },
    logo: {
        height: "10vh"
    },
    centered: {
        position: "fixed",
        top: "50%",
        left: "50%",
        /* bring your own prefixes */
        transform: "translate(-50%, -50%)",
    },
    text: {
        fontSize: 17,
        fontWeight: "600"
    },
    googleImage: {
        height: "3vh"
    }
}));

export const GoogleButton = withStyles({
    root: {
    color: "#ffffff",
    textTransform: 'none',
    lineHeight: 1.5,
    backgroundColor: "#4285f4",
    borderColor: '#4285f4',
    fontWeight: "bold",
    fontSize: 13,
    '&:hover': {
        backgroundColor: '#0069d9',
        boxShadow: 'none',
    },
    '&:active': {
        boxShadow: 'none',
        backgroundColor: '#0062cc',
    },
    '&:focus': {
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
    },
})(Button);