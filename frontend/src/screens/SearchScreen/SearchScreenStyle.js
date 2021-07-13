import { makeStyles } from "@material-ui/core/styles";
import { colors, inputElements} from './../../cookedStyles.js';

export const useStyles = makeStyles((theme) => ({
    text:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '5rem',
        fontFamily: inputElements.font.fontFamily,
        color: colors.palette.primary.dark,
    },
}));