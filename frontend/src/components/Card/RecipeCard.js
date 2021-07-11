import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { useStyles } from './RecipeCardStyles';

export default function RecipeCard(props) {
  const classes = useStyles();
  const handleCategory = () => {
    // busca titulo da categoria no banco
    return "test";
  };

  const category = handleCategory();

  const handleClick = () => {
    return 'test';
  };

  return (
    <div className={classes.content}>
      {props.content.map((data) =>(
        <div className={classes.card}>
          <Card className={classes.root} onClick={handleClick}>
            <CardHeader title={data.title} subheader={category}/>
            {/* Set image
            <CardMedia
              className={classes.media}
              image="/static/images/cards/paella.jpg"
              title="Paella dish"
            /> */}
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">{data.description}</Typography>
            </CardContent>
          </Card>
        </div>
      ))}
    </div>
      
  );
}
