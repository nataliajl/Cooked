import { makeStyles, withStyles, InputBase } from '@material-ui/core';
import { colors} from '../../../cookedStyles.js';

export const useStyles = makeStyles((theme) => ({
  tag: {
    display: 'flex',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
    listStyle: 'none',
    padding: theme.spacing(0.5),
    margin: 0,
  },
  chip: {
    margin: theme.spacing(0.5),
  },
}));

export const StyledInputBase = withStyles({
  root: {
    display: 'flex',
    border: '0rem',
    borderRadius: '2rem',
    backgroundColor: colors.palette.basic.b5,
    height: '3rem',
    paddingLeft: '2rem',
  },

})(InputBase);