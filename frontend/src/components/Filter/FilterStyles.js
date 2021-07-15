import {Slider, Switch, withStyles } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import { colors} from './../../cookedStyles.js';

export const StyledSlider = withStyles({
    root: {
      color: colors.palette.primary.main,
      height: 1,
      marginTop:'6%',
      marginLeft: '3%',
      marginBottom: '5%',
      maxWidth: '90%'
    },

    thumb: {
      height: 22,
      width: 22,
      backgroundColor: colors.palette.background.main,
      border: '2px solid #ffff',
      marginTop: -8,
      marginLeft: -6,
      '&:focus, &:hover, &$active': {
        boxShadow: 'inherit',
      },
    },

    active: {},
    valueLabel: {
      left: 'calc(-40%)',
    },

    track: {
      height: 8,
      borderRadius: 8,
    },

    rail: {
      height: 8,
      borderRadius: 8,
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
    background: 'linear-gradient(to right, '+colors.palette.basic.b5+', '+colors.palette.basic.b6+')',
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
  root: {
    marginTop: '2%',
    marginLeft: '3.5%'
  }, 
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
