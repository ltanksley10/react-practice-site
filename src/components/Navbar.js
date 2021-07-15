import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';  
import deepPurple from '@material-ui/core/colors/deepPurple';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(0),
  },
  title: {
    flexGrow: 1,
    paddingLeft: theme.spacing(2),
  },
  navbar: {
      backgroundColor: deepPurple[500],
  }
}));

const NavBar = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.navbar}>
        <Toolbar>
          <Typography variant="h6" className={classes.title} >
              Lori Tanksley Art
          </Typography>
          <IconButton edge="end" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon onClick={handleClick} />
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={handleClose}><Link to="/originalartwork" className="navbarLink">Original Artwork</Link></MenuItem>
                <MenuItem onClick={handleClose}><Link to="/availableprints" className="navbarLink">Available Prints</Link></MenuItem>
                <MenuItem onClick={handleClose}><Link to="/t-shirts" className="navbarLink">T-Shirts</Link></MenuItem>
                <MenuItem onClick={handleClose}><Link to="/mugs" className="navbarLink">Mugs</Link></MenuItem>
                <MenuItem onClick={handleClose}><Link to="/showercurtains" className="navbarLink">Shower Curtains</Link></MenuItem>
                <MenuItem onClick={handleClose}><Link to="/blankets" className="navbarLink">Blankets</Link></MenuItem>
            </Menu>
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
