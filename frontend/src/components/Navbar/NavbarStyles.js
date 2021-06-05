import { withStyles, Button } from '@material-ui/core';
import ChevronRightRoundedIcon from '@material-ui/icons/ChevronRightRounded';


export const StyledRightIcon = withStyles({
    root: {
        color: "#999999"
    },
  })(ChevronRightRoundedIcon);

export const AccountButton = withStyles({
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

export const SignInButton = withStyles({
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