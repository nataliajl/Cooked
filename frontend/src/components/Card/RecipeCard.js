import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { useStyles } from './RecipeCardStyles';
import { useHistory } from "react-router-dom";
import {CardActionArea} from '@material-ui/core';

export default function RecipeCard(props) {
  const classes = useStyles();
  const history = useHistory();
  
  const handleClick = (e, recipe) => {
    e.preventDefault();
    return history.push({
      pathname: '/recipe',
      state: recipe
    });
  };

  return (
    <div className={classes.content}>
      {props.content.map((data) =>(
        <div className={classes.card}>
          <Card className={classes.root}>
            <CardActionArea  onClick={(e) => handleClick(e, data)}>
              <CardHeader title={data.recipe.title} />
              {/* Set image
              <CardMedia
                className={classes.media}
                image="/static/images/cards/paella.jpg"
                title="Paella dish"
              /> */}
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">{data.recipe.description}</Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
      ))}
    </div>
      
  );
}
