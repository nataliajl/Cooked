import { withStyles, Button, makeStyles} from '@material-ui/core';
import ChevronRightRoundedIcon from '@material-ui/icons/ChevronRightRounded';
import { colors} from './../../cookedStyles.js';

export const StyledRightIcon = withStyles({
    root: {
        color: colors.palette.basic.b3
    },
  })(ChevronRightRoundedIcon);

export const AccountButton = withStyles({
    root: {
        background: colors.palette.basic.b7,
        borderRadius: 6,
        color: colors.palette.primary.darker,
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
        background: `linear-gradient(223.65deg, ${colors.palette.primary.darker} 12.5%, ${colors.palette.primary.lighter} 111.77%)`,
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

export const useStyles = makeStyles((theme) => ({
    img: {
        marginTop: '1rem'
    }
}));