import React from 'react';

import '@fontsource/lato';
import foodtray from './food-tray.png';
import timer from './timer.png';
import {Grid, Divider, List} from '@material-ui/core';
import { Star, StarBorder, Favorite, FavoriteBorder } from '@material-ui/icons';
import DietaryRestrictions from './DietaryRestrictions'

import {AuthContext} from '../../context/AuthContext';

const RecipeInfo = ({title, description, imageSource, time, portionSize, comments, rating, diet}) => {
    // const {isUserLoggedIn} = useContext(AuthContext);
    const InfoItem = ({src, text}) => {
        return (
            <div className="infoitem">
                <img src={src}/>
                <p className="itemtext">{text}</p>
            </div>            
        );        
    }

    const Comment = ({name, text, likes}) => {
        return (
            <Grid container>
                <Grid container alignItems="center" justify="space-around">
                    <Grid item xs={4}>
                        <h3 className="itemtext">{name}</h3>
                    </Grid>
                    <Grid container alignItems="center" justify="center" xs={2}>
                        <Favorite htmlColor="#ff6d75" />
                        <p className="itemtext">{likes}</p>
                    </Grid>
                </Grid>
                <p className="itemtext">{text}</p>     
            </Grid>
        );
    }



    return ( 
        <div className="left-container">
            <img src={imageSource} className="image"/>
            <Grid container spacing={1} >
                <Grid item xs={6}>
                    <InfoItem src={timer} text={`${time} minutes`}/>
                </Grid>
                <Grid item xs={6}>
                    <InfoItem src={foodtray} text={`${portionSize} people`}/>
                </Grid>
            </Grid> 
            <Grid container spacing={1} >
                <Grid container xs={12} alignItems="center" justify="space-around" >
                    <p className="itemtext">Rating:</p>
                    <Grid container alignItems="center" justify="center" xs={3}>
                        <p className="itemtext">{rating}</p>
                        <Star htmlColor="#ffb400" fontsize="inherit"/>
                    </Grid>
                </Grid>
            </Grid> 
            <DietaryRestrictions diet={diet}/>
            <p>
                <p className="title">{title}</p>
            </p>
            <p className="text">{description}</p>
            {/* <List>
                {comments.map(comment => (
                    <>
                        <Comment name={comment.name} text={comment.comment} likes={comment.likes} /> 
                        <Divider />
                    </>
                ))}
            </List> */}
        </div>
    );
};

export default RecipeInfo;
