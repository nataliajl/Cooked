import { makeStyles } from '@material-ui/core';
import { colors, inputElements} from '../../../cookedStyles.js';


export const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignContent: 'center',
    padding: '1rem',
    
    '& div': {
      display: 'flex',
      flexDirection: 'row',
    }
    
  },

  container: {
    alignItems: 'center',
    
    '& $input': {
      borderRadius: '5rem',
      width: '42rem',
      height: '3rem',
      paddingLeft: '2rem',
      backgroundColor: colors.palette.basic.b5,
      fontFamily: inputElements.font.fontFamily,
      fontWeight: inputElements.inputFont.fontWeight,
      fontSize: inputElements.inputFont.fontSize,
    },

    '& $button': {
      marginLeft: theme.spacing(2),
    },
    
    [theme.breakpoints.down(700)]: { //@media
      '& $input': {
        width: '27rem',
      },
    },
  },

  img: {
    fontSize: '3.7rem',
    color:  colors.palette.secondary.dark,
    '&:hover': {
      color: colors.palette.secondary.light,
      transition: 'color 0.4s',
    },
  },

  tag: {
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
    listStyle: 'none',
    padding: theme.spacing(0.5),
    maxWidth: '42rem',
    marginLeft: '1rem',

    [theme.breakpoints.down(700)]: { //@media
      maxWidth: '27rem',
    },
  },

  chip: {
    margin: theme.spacing(0.5),
    fontFamily: inputElements.font.fontFamily,
    fontWeight: inputElements.inputFont.fontWeight,
    fontSize: inputElements.inputFont.fontSize,
    backgroundColor: 'transparent',
    border: `0.1rem solid ${colors.palette.secondary.dark}`,
    color:colors.palette.secondary.dark,
    
  },

  deleteIcon: {
    color: colors.palette.secondary.dark,
    '&:hover': {
      color: colors.palette.secondary.light,
      transition: 'color 0.4s',
    },
    
  }

}));
