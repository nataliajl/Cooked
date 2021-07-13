import { makeStyles } from "@material-ui/core/styles";
import { colors, inputElements} from './../../cookedStyles.js';

export const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
    },

    content: {
      display: 'flex',
      flexDirection: 'row',
      justifyItems: 'center',
      marginTop: '5rem',
      marginLeft: '12rem',
    },

    visual: {
      marginTop: '15rem',
      marginLeft: '72rem',
      position: 'absolute',


      '& $img': {
        width: '90rem',
        height: '50rem',
      }
    },

    text: {
      display: 'flex',
      flexDirection: 'column',
      marginBottom: '-2rem',
      fontFamily: inputElements.font.fontFamily,

      '& name': {
        color: colors.palette.primary.main,
        fontWeight: '600'
      },
      

      '& slogan': {
        color: colors.palette.primary.dark,
      },
    },
      
    
}));