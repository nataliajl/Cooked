import { makeStyles, Slider, Switch, withStyles } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import { colors, inputElements} from './../../cookedStyles.js';

export const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignContent: 'center',
    padding: '4rem',
  },

  list: {
    maxWidth: '52rem',
    marginLeft: '-1rem',
  },

  nested: {
    paddingLeft: theme.spacing(4),
  },

  row: {
      
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginLeft: '1rem',

  },

  row1: {
      
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: '2rem',
    marginLeft: '1rem',
  },

  row2: {
      
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '2rem',
  },

  row3: {
      
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',

  },

  button: {
    width: '15rem',
    height: '4rem',
    fontFamily: inputElements.font.fontFamily,
    fontWeight: inputElements.inputFont.fontWeight,
    fontSize: inputElements.inputFont.fontSize * 90,
    backgroundColor: colors.palette.secondary.dark,
    color: colors.palette.basic.b7,

    '&:hover': {
      backgroundColor: colors.palette.secondary.light,
      color: colors.palette.basic.b3,
    },
  },

  font: {
    fontFamily: inputElements.font.fontFamily,
    fontWeight: inputElements.inputFont.fontWeight,
    fontSize: inputElements.inputFont.fontSize,
  },

  subtitle: {
    fontFamily: inputElements.font.fontFamily,
    fontWeight: inputElements.inputFont.fontWeight,
    fontSize: inputElements.inputFont.fontSize * 70,
    color: colors.palette.basic.b3,
  },

  subSpace: {
    fontFamily: inputElements.font.fontFamily,
    fontWeight: inputElements.inputFont.fontWeight,
    fontSize: inputElements.inputFont.fontSize * 80,
    color: colors.palette.basic.b3,
    marginLeft: '1rem',
    marginRight: '1rem',
  },

}));

export const StyledSlider = withStyles({
    root: {
      color: colors.palette.primary.main,
      height: 8,
      marginTop: '1rem',
      marginLeft: '2rem',
    },

    thumb: {
      height: 18,
      width: 18,
      backgroundColor: colors.palette.background.main,
      border: '2px solid currentColor',
      marginTop: -8,
      marginLeft: -6,
      '&:focus, &:hover, &$active': {
        boxShadow: 'inherit',
      },
    },

    active: {},
    valueLabel: {
      left: 'calc(-70% + 2px)',
    },

    track: {
      height: 4,
      borderRadius: 4,
    },

    rail: {
      height: 4,
      borderRadius: 4,
    },
})(Slider);

export const OnlyIngredients = withStyles((theme) => ({
root: {
      width: 80,
      height: 48,
      padding: 8,
      margin: theme.spacing(1),
    },

  switchBase: {
    padding: 11,
    color: colors.palette.basic.b5,
  },

  thumb: {
    width: 26,
    height: 26,
    backgroundColor: colors.palette.basic.b7,
  },

  track: {
    background: 'linear-gradient(to right, '+colors.palette.basic.b4+', '+colors.palette.basic.b5+')',
    opacity: '1 !important',
    borderRadius: 20,
    position: 'relative',
    '&:before, &:after': {
      display: 'inline-block',
      position: 'absolute',
      top: '50%',
      width: '50%',
      transform: 'translateY(-50%)',
      color: colors.palette.basic.b7,
      textAlign: 'center',
    },
  },

  checked: {
    '&$switchBase': {
      color: colors.palette.primary.dark,
      transform: 'translateX(32px)',
      '&:hover': {
        backgroundColor: colors.palette.primary.dark,

      },
    },
    '& $thumb': {
      backgroundColor: colors.palette.basic.b7,
    },
    '& + $track': {
      background: 'linear-gradient(to right, '+colors.palette.primary.lighter+', '+colors.palette.primary.dark+')',
      '&:before': {
        opacity: 1,
      },
      '&:after': {
        opacity: 0,
      }
    },
  },
}))(Switch);

export const StyledRating = withStyles({
  iconEmpty: {
    color: colors.palette.secondary.light,
  },

  iconFilled: {
    color: colors.palette.primary.main,
  },
  iconHover: {
    color: colors.palette.primary.dark,
  },
})(Rating);
