import { makeStyles, Slider, Switch, withStyles } from '@material-ui/core';

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

  align: {
    display: 'flex',
    alignContent: 'center',
    margin: theme.spacing(1),
  },

  subtitle: {
    color: '#616161',
    fontSize: 14,
  }

}));

export const StyledSlider = withStyles({
    root: {
      color: '#FB4E4B',
      height: 8,
    },
    thumb: {
      height: 24,
      width: 24,
      backgroundColor: '#fff',
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
    color: '#F0F0F0',
  },
  thumb: {
    width: 26,
    height: 26,
    backgroundColor: '#fff',
  },
  track: {
    background: 'linear-gradient(to right, #d1d1d1, #F0F0F0)',
    opacity: '1 !important',
    borderRadius: 20,
    position: 'relative',
    '&:before, &:after': {
      display: 'inline-block',
      position: 'absolute',
      top: '50%',
      width: '50%',
      transform: 'translateY(-50%)',
      color: '#fff',
      textAlign: 'center',
    },
    // '&:before': {
    //   content: '"on"',
    //   left: 4,
    //   opacity: 0,
    // },
    // '&:after': {
    //   content: '"off"',
    //   right: 4,
    // },
  },
  checked: {
    '&$switchBase': {
      color: '#DE2D33',
      transform: 'translateX(32px)',
      '&:hover': {
        backgroundColor: '##DE2D33',

      },
    },
    '& $thumb': {
      backgroundColor: '#fff',
    },
    '& + $track': {
      background: 'linear-gradient(to right, #FC7A78, #DE2D33)',
      '&:before': {
        opacity: 1,
      },
      '&:after': {
        opacity: 0,
      }
    },
  },
}))(Switch);

