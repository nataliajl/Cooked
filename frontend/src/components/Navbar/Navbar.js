import { makeStyles } from '@material-ui/core/styles';

import 'fontsource-roboto';
import Typography from '@material-ui/core/Typography';

import Appbar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

import useStyles from './NavbarStyles';

export default function Navbar() {
  const classes = useStyles();

  return (
    <Appbar>
      <Toolbar>
        <Typography className={classes.title} variant='h5'>
          Cooked
        </Typography>
        <IconButton aria-label='search' color='inherit'>
          <SearchIcon />
        </IconButton>
      </Toolbar>
    </Appbar>
  );
}
