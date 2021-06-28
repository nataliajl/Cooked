import { makeStyles, Slider, Switch, withStyles } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import { colors, inputElements} from './../../cookedStyles.js';

export const useStyles = makeStyles((theme) => ({
  root: {
    '& div': {
      marginTop: '1rem'
    }
    
  },

  list: {
    width: '54rem',
    marginLeft: '-1rem',
    marginTop: '-3rem'
  },

  nested: {
    paddingLeft: theme.spacing(4),
  },

  row: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyItems: 'center',
  },

  button: {
    '& div': {
      marginTop: '2rem',

      '& button': {
        width: '20rem',
        height: '6rem',
      }
    }
  },

  font: {
    fontFamily: inputElements.font.fontFamily,
    fontWeight: inputElements.inputFont.fontWeight,
    fontSize: inputElements.inputFont.fontSize,

    '& subtitle' : {
      fontSize: inputElements.font.fontSize,
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
    fontSize: inputElements.font.fontSize,
    color: colors.palette.basic.b3,
  },

  margin: {
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
      border: '2px solid #ffff',
      marginTop: -8,
      marginLeft: -6,
      '&:focus, &:hover, &$active': {
        boxShadow: 'inherit',
      },
    },

    active: {},
    valueLabel: {
      left: 'calc(-70% + 0.2rem)',
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
