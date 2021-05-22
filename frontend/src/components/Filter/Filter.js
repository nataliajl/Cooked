import React from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';

import Typography from "@material-ui/core/Typography";
import FormControlLabel from '@material-ui/core/FormControlLabel';

import Rating from '@material-ui/lab/Rating';
import Slider from "@material-ui/core/Slider";
import Switch from '@material-ui/core/Switch';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';

import List from '@material-ui/core/List';
import Collapse from '@material-ui/core/Collapse';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import ExpandMore from '@material-ui/icons/ExpandMore';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

import { withStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
    //   margin: theme.spacing(1),
    //   width: '25ch',
      flexGrow: 1,
    },
    margin: {
        margin: theme.spacing(1),
    },
    extendedIcon: {
        marginRight: theme.spacing(1),
    },
    rot: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
      },
      nested: {
        paddingLeft: theme.spacing(4),
      },


  },
}));

const ServeRage = withStyles({
    root: {
      color: "#FB4E4B",
      height: 8
    },
    thumb: {
      height: 24,
      width: 24,
      backgroundColor: "#fff",
      border: "2px solid currentColor",
      marginTop: -8,
      marginLeft: -12,
      "&:focus, &:hover, &$active": {
        boxShadow: "inherit"
      }
    },
    active: {},
    valueLabel: {
      left: "calc(-50% + 4px)"
    },
    track: {
      height: 8,
      borderRadius: 4
    },
    rail: {
      height: 8,
      borderRadius: 4
    }
  })(Slider);

  const OnlyIngredients = withStyles((theme) => ({
    root: {
      width: 42,
      height: 26,
      padding: 0,
      margin: theme.spacing(1),
    },
    switchBase: {
      padding: 1,
      '&$checked': {
        transform: 'translateX(16px)',
        color: theme.palette.common.white,
        '& + $track': {
          backgroundColor: '#FB4E4B',
          opacity: 1,
          border: 'none',
        },
      },
      '&$focusVisible $thumb': {
        color: '#52d869',
        border: '6px solid #fff',
      },
    },
    thumb: {
      width: 24,
      height: 24,
    },
    track: {
      borderRadius: 26 / 2,
      border: `1px solid ${theme.palette.grey[400]}`,
      backgroundColor: theme.palette.grey[50],
      opacity: 1,
      transition: theme.transitions.create(['background-color', 'border']),
    },
    checked: {},
    focusVisible: {},
  }))(({ classes, ...props }) => {
    return (
      <Switch
        focusVisibleClassName={classes.focusVisible}
        disableRipple
        classes={{
          root: classes.root,
          switchBase: classes.switchBase,
          thumb: classes.thumb,
          track: classes.track,
          checked: classes.checked,
        }}
        {...props}
      />
    );
  });

export default function Filter() {
    const classes = useStyles();
    const [checked, setChecked] = React.useState(false);

    const toggleChecked = () => {
      setChecked((prev) => !prev);
    };
    
    const [open, setOpen] = React.useState(true);
  
    const handleClick = () => {
      setOpen(!open);
    };
    
  return (
        <form className={classes.root} noValidate autoComplete="off">
            <div>
                <div class="keywords">
                    <TextField id="outlined-search" type="search" placeholder="Please enter your ingredients" variant="outlined" />

                    <IconButton className={classes.margin}>
                        <AddCircleIcon />
                    </IconButton>
                </div>
                    
                <div class="swith">
                    <FormControlLabel
                        control={<OnlyIngredients checked={checked} onChange={toggleChecked}  />}
                        label="Only inserted ingredients"
                        labelPlacement="start"
                    />
                </div>

                <div class="cuisine">
                    <List className={classes.rot}>
                        <ListItem button onClick={handleClick}>
                            <ListItemText primary="Cuisine" secondary="Choose by cooking style"/>
                            {open ? <ExpandMore /> : <NavigateNextIcon />}
                        </ListItem>
                        <Collapse in={open} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                            <ListItem button className={classes.nested}>
                                <ListItemIcon>
                                    <Checkbox
                                        edge="start"
                                        disableRipple
                                    />
                                </ListItemIcon>
                                <ListItemText primary="Item 1" />
                            </ListItem>
                            </List>
                        </Collapse>
                    </List>
                </div>

                <div class="serve">
                    <Typography id="discrete-slider-custom" gutterBottom>
                        Serving Rage
                    </Typography>
                    <Typography variant="body2">
                        How many people do you want to serve?
                    </Typography>
                    <ServeRage
                        defaultValue={1}
                        aria-labelledby="discrete-slider-custom"
                        step={1}
                        valueLabelDisplay="auto"
                        min={1}
                        max={100}
                        classes={{color: "#FB4E4B"}}
                    />
                </div>

                <div class="cooking">
                    <Typography gutterBottom>
                        Cooking Time
                    </Typography>
                    <Grid container spacing={2}>
                        <Grid item xs={3}>
                            <TextField id="outlined-search" type="search" placeholder="Min" variant="outlined" />
                        </Grid>
                        <Grid item xs={3}>
                            <Typography variant="body2">
                                to
                            </Typography>
                        </Grid>
                        <Grid item xs={3}>
                            <TextField id="outlined-search" type="search" placeholder="Max" variant="outlined" />
                        </Grid>
                        <Grid item xs={3}>
                            <Typography variant="body2">
                                minutes
                            </Typography>
                        </Grid>
                    </Grid>
                </div>

                <div>
                    <Box component="fieldset" mb={3} borderColor="transparent">
                        <Typography component="legend">Rate</Typography>
                        <Rating
                        name="customized-empty"
                        defaultValue={1}
                        precision={0.5}
                        emptyIcon={<StarBorderIcon fontSize="inherit" />}
                        />
                    </Box>
                    </div>
                </div>
        </form>
  );
}
