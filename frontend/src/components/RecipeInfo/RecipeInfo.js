import React from 'react';

import '@fontsource/lato';
import foodtray from './food-tray.png';
import timer from './timer.png';
import {Grid} from '@material-ui/core';
import {Favorite, FavoriteTwoTone} from '@material-ui/icons';
import DietaryRestrictions from './DietaryRestrictions'
import { StyledRating } from '../Filter/FilterStyles';

// import {AuthContext} from '../../context/AuthContext';

const RecipeInfo = ({title, description, imageSource, time, portionSize, comments, rating, diet}) => {
    // const {isUserLoggedIn} = useContext(AuthContext);
    const InfoItem = ({src, text}) => {
        return (
            <div className="infoitem">
                <img src={src} alt=''/>
                <span className="itemtext">{text}</span>
            </div>            
        );        
    }

    // const Comment = ({name, text, likes}) => {
    //     return (
    //         <Grid container>
    //             <Grid container alignItems="center" justify="space-around">
    //                 <Grid item xs={4}>
    //                     <h3 className="itemtext">{name}</h3>
    //                 </Grid>
    //                 <Grid container alignItems="center" justify="center" xs={2}>
    //                     <Favorite htmlColor="#ff6d75" />
    //                     <p className="itemtext">{likes}</p>
    //                 </Grid>
    //             </Grid>
    //             <p className="itemtext">{text}</p>     
    //         </Grid>
    //     );
    // }


    return ( 
        <div className="left-container">
            <img src={imageSource} className="image" alt=''/>
            <Grid container xs={12} className="details">
                <Grid item xs={3} className="leftBox">
                    <InfoItem src={timer} text={`${time} minutes`}/>
                    <InfoItem src={foodtray} text={`${portionSize} people`}/>
                    <StyledRating
                        name='customized-icons'
                        defaultValue={rating}
                        precision={0.5}
                        icon={<FavoriteTwoTone />}
                        size="large"
                        readOnly
                        className="rating"
                    />
                </Grid>
                
                <DietaryRestrictions diet={diet}/>
 
            </Grid>

            <p className="title">{title}</p>
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
