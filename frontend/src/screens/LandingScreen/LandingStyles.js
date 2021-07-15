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
  },

  text: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: '-2%',
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

  leftContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    flexBasis: 'calc(100% / 2)',
    padding: 'calc(2%)' ,
    marginLeft: '5%'
  },

  rightContainer: {
    display: 'flex',
    flexDirection: 'column',
    flexBasis: 'calc(100% / 2)',
    justifyContent: 'center',
    alignItems:'center',
    
    position: 'absolute',
    left: '45%',
    top:'25%',
    right:'5%',

    '& $img': {
      width: 'calc(95%)',
      height: 'calc(60%)'
    }
  },
 
  // filter
  row: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0.5%'
  },

  button: {
    '& div': {
      display:'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding:'5%',

      '& button': {
        width: '30%',
        height: '3.5rem',
      }
    }
  },

  font: {
    '& subtitle' : {
      color: colors.palette.basic.b3,
    },

    '& button': {
      fontWeight: '600',
      backgroundColor: colors.palette.secondary.dark,
      color: colors.palette.basic.b7,

      '&:hover': {
        color: colors.palette.basic.b3,
        backgroundColor: colors.palette.secondary.light,
      },
    },
    
  },

  subtitle : {
    color: colors.palette.basic.b3,
  },

  margin: {
    marginLeft: '3%',
    marginRight: '3%',
  },

  list: {
    marginTop: '-3%',
    marginLeft: '-2.7%'
  },

  // tag
  main: {
    display: 'flex',
    flexDirection: 'column',
    '& div': {
      display: 'flex',
      flexDirection: 'row',
    }
  },

  container: { 

    marginTop:'5%',
    marginLeft: '-5%',

    '& $input': {
      width: '30rem',
      borderRadius: '3rem',
      padding:'3%',
      background: 'linear-gradient(to right, '+colors.palette.basic.b5+', '+colors.palette.basic.b6+')',
    },
    
    '& $button': {
      padding:'1%',
    },
  },

  plusB: {
    fontSize: '150%',
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
    padding: '0.5%',
    maxWidth: '16rem',

    [theme.breakpoints.down(700)]: { //@media
      maxWidth: '7rem',
    },
  },

  chip: {
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