import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import deepPurple from '@material-ui/core/colors/deepPurple';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    paddingLeft: theme.spacing(2),
  },
  footer: {
      backgroundColor: deepPurple[500]
  },
  link: {
      paddingLeft: theme.spacing(1)
  }
}));

const Footer = () => {
  const classes = useStyles();
  const preventDefault = (event) => event.preventDefault();
  
  return (
    <div className={classes.root}>
        <AppBar position="static" className={classes.footer}>
            <Toolbar display="flex">
                <Typography variant="subtitle2" className={classes.title}>
                    &copy; Lori Tanksley Art 
                </Typography>
                <Typography>
                  <Link href="#" onClick={preventDefault} variant="subtitle2" color="inherit" className={classes.link}>
                    Contact
                  </Link>
                  <Link href="#" onClick={preventDefault} variant="subtitle2" color="inherit" className={classes.link}>
                    Privacy Policy    
                  </Link>
                  <Link href="#" onClick={preventDefault} variant="subtitle2" color="inherit" className={classes.link}>
                    Terms
                  </Link>
                </Typography>
            </Toolbar>
        </AppBar>
    </div>
  );
};

export default Footer;