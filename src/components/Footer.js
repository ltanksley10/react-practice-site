import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
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
  }
}));

const Footer = () => {
  const classes = useStyles();
  
  return (
    <div className={classes.root}>
        <AppBar position="static" className={classes.footer}>
            <Toolbar display="flex">
                <Typography variant="subtitle2" className={classes.title}>
                    &copy; Lori Tanksley Art 
                </Typography>
                <Typography>
                  <Link to="/contactpage" color="inherit" variant="subtitle2" className="footerLink">
                    Contact |
                  </Link>
                  <Link to="/privacypolicy" color="inherit" variant="subtitle2" className="footerLink">
                    Privacy Policy |
                  </Link>
                  <Link to="/terms" color="inherit" variant="subtitle2" className="footerLink">
                    Terms
                  </Link>
                </Typography>
            </Toolbar>
        </AppBar>
    </div>
  );
};

export default Footer;