import React from 'react';
import '../styles/App.css';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import deepPurple from '@material-ui/core/colors/deepPurple';

const useStyles = makeStyles({
  root: {
    maxWidth: 400,
    margin: '20px auto'
  },
  media: {
    height: 275,
  },
  button: {
      backgroundColor: deepPurple[500],
      color: deepPurple[50],
      padding: '10px',
      marginBottom: '5px',
      "&:hover": {
          backgroundColor: deepPurple[700]
      }
  }
});

const OverviewCard = (props) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.src}
          alt={props.alt}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" align="center">
            {props.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" align="center">
            {props.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className="cardAction">
        <Button size="small" className={classes.button}>
          View More
        </Button>
      </CardActions>
    </Card>
  );
};

export default OverviewCard;