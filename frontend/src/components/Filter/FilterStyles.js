import { makeStyles, Slider, Switch, withStyles } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import { colors, inputElements} from './../../cookedStyles.js';

export const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignContent: 'center',
    padding: '1rem',
  },

  list: {
    width: '100%',
    maxWidth: 360,
  },

  nested: {
    paddingLeft: theme.spacing(4),
  },

  row: {
      
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',


  },

  font: {
    fontFamily: inputElements.font.fontFamily,
    fontWeight: inputElements.inputFont.fontWeight,
    fontSize: inputElements.inputFont.fontSize,

    '& $subtitle': {
      color: colors.palette.basic.b7,
      fontSize: inputElements.font.fontSize,
    }
  },


  


}));

export const StyledSlider = withStyles({
    root: {
      color: colors.palette.primary.main,
      height: 8,
    },

    thumb: {
      height: 24,
      width: 24,
      backgroundColor: colors.palette.background.main,
      border: '2px solid currentColor',
      marginTop: -8,
      marginLeft: -12,
      '&:focus, &:hover, &$active': {
        boxShadow: 'inherit',
      },
    },

    active: {},
    valueLabel: {
      left: 'calc(-50% + 4px)',
    },

    track: {
      height: 8,
      borderRadius: 4,
    },

    rail: {
      height: 8,
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
