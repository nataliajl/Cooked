import { makeStyles } from '@material-ui/core';
import { colors} from '../../../cookedStyles.js';

const inputPadding = '0.5rem';

export const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    maxWidth:'32rem',
    maxHeight: '12rem',
    padding: '1rem',
  },

  tag: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent:'flex-start',
    listStyle: 'none',
    padding: theme.spacing(0.5),
    margin: 0,
    
    
    [theme.breakpoints.down(700)]: { //@media
      justifyContent:'center',
    },
  },

  chip: {
    margin: theme.spacing(0.5),
  },

  input: {
    borderRadius: '2rem',
    width: '25rem',
    padding: inputPadding,
    paddingLeft: '1.5rem',
    backgroundColor: colors.palette.basic.b5,
  },

  inputContainer: {
    display: 'flex',
    justifyContent: 'space-between',
  },

  button: {
    padding: inputPadding,
  },

}));
