import { makeStyles, Slider, Switch, withStyles } from '@material-ui/core';
import { colors} from './../../cookedStyles.js';

export const useStyles = makeStyles((theme) => ({
  root: {
    flex: {
      flexGrow: 1,
      display: 'flex',
    },
    margin: {
      margin: theme.spacing(1),
    },
    extendedIcon: {
      marginRight: theme.spacing(1),
    },
    list: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
    nested: {
      paddingLeft: theme.spacing(4),
    },
  },

  add_icon: {
    fontSize: 35,
  },

  align: {
    display: 'flex',
    alignContent: 'center',
    margin: theme.spacing(1),
  },

  subtitle: {
    color: colors.palette.basic.b3,
    fontSize: 14,
  }

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

