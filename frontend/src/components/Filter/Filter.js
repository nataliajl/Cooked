import React from 'react';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
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
            <div class="input-igredient">
                <div class="keywords">
                    <TextField id="outlined-search" type="search" placeholder="Please enter your ingredients" variant="outlined" />

                    <IconButton className={classes.margin}>
                        <AddCircleIcon />
                    </IconButton>
                </div>
                    
                <div class="swith">
                    <FormControlLabel
                        control={<Switch checked={checked} onChange={toggleChecked} />}
                        label="Only inserted ingredients"
                        labelPlacement="start"
                    />
                </div>

                <div>
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

                <div>
                    <Typography id="discrete-slider-custom" gutterBottom>
                        Serving Rage
                    </Typography>
                    <Typography variant="body2">
                        How many people do you want to serve?
                    </Typography>
                    <Slider
                        defaultValue={1}
                        aria-labelledby="discrete-slider-custom"
                        step={1}
                        valueLabelDisplay="auto"
                        min={1}
                        max={100}
                    />
                </div>

            </div>
        </form>
  );
}
