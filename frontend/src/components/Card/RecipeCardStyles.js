import { makeStyles } from '@material-ui/core/styles';
import { colors, inputElements} from './../../cookedStyles.js';

export const useStyles = makeStyles((theme) => ({
    root: {
      width: '50rem',
      '&:hover': {
        color: colors.palette.basic.b3,
        backgroundColor: colors.palette.secondary.lighter,
      }
    },

    content: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginTop:'5rem',
    },

    card: {
      marginBottom: '1rem'
    }
    // media: {
    //   height: 0,
    //   paddingTop: '56.25%', // 16:9
    // },

    
  }));