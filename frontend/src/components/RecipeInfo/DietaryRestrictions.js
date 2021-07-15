import React from 'react';

import '@fontsource/lato';
import {Grid} from '@material-ui/core';
import { Eco } from '@material-ui/icons';


const DietaryRestrictions = ({diet}) => {
    const recipeRestrictions = diet.filter((e) => e.value).map(item => {
        switch(item.type){
            case ("vegetarian"):
                return {type: "Vegetarian", icon: <Eco htmlColor="#a9b64b"/>}
            case ("vegan"):
                return {type: "Vegan", icon: <Eco htmlColor="#a9b64b"/>}
            case ("glutenFree"):
                return {type: "Gluten Free", icon: <Eco htmlColor="#a9b64b"/>}
            case ("lactoseFree"):
                return {type: "Dairy Free", icon: <Eco htmlColor="#a9b64b"/>}
            default:
                return {type: "Vegetarian", icon: <Eco htmlColor="#a9b64b"/>}
        }
        
    });

    const DietItem = ({type, Icon}) => {
        return (
            <div className="tag">
                {Icon}
                <span className="itemtext">{type}</span>  
            </div>   
        )
    }
    
    return (
        <Grid item xs={9} className="rightBox"> 
            {recipeRestrictions.map(e => (
                <DietItem type={e.type} Icon={e.icon}/> 
            ))}
        </Grid>
    )
}

export default DietaryRestrictions;