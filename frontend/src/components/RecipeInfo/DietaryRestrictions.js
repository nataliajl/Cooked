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
            <Grid container alignItems="center" justify="space-around">
                <Grid item>
                    {Icon}
                </Grid>
                <Grid item>
                    <p className="itemtext">{type}</p>
                </Grid>
            </Grid>
        )
    }
    
    return (
        <Grid container xs={10} alignItems="center" justify="space-between">
            {recipeRestrictions.map(e => (
                <Grid item xs={6/recipeRestrictions.length} alignItems="center" justify="center"  >
                    <DietItem type={e.type} Icon={e.icon}/> 
                </Grid>
            ))}
        </Grid>
    )
}

export default DietaryRestrictions;