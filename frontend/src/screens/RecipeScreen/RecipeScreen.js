import React, {useContext} from 'react';

import '@fontsource/lato';
import Navbar from '../../components/Navbar/Navbar';
import './RecipeScreen.css';
import ItemCircle from '../../components/ItemCircle/ItemCircle'
import RecipeInfo from '../../components/RecipeInfo/RecipeInfo';
import ShareDial from '../../components/RecipeInfo/ShareDial/ShareDial'
import { Star, StarBorder, Favorite, FavoriteBorder } from '@material-ui/icons';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { Button } from '@material-ui/core';
import Checkbox from '@material-ui/core/Checkbox';
import {AuthContext} from '../../context/AuthContext';
import Rating from '@material-ui/lab/Rating';
const RecipeScreen = () => {
    const {isUserLoggedIn} = useContext(AuthContext);
    const data = {
        title: 'Recipe title',
        imageSource: 'https://industryeats.com/wp-content/uploads/2017/07/cucumber-asparagus-salad.jpg',
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean erat justo, pretium sit amet sem nec, aliquet dignissim purus. Donec non velit rutrum, luctus nunc eget, aliquam nisl. Nulla sit amet eros nec risus volutpat porttitor. Cras sit amet leo et leo facilisis gravida. In commodo sapien vitae tellus iaculis, a sodales nunc blandit. Aliquam eget diam gravida, ullamcorper sem at, placerat elit. Vestibulum eget tellus sagittis, laoreet augue faucibus, viverra lorem. Curabitur tincidunt convallis volutpat. Nunc a odio est. Integer bibendum sagittis arcu vel ornare.

        Nullam erat felis, venenatis eu lectus sed, pellentesque pharetra dolor. Morbi cursus lobortis leo, vitae euismod metus dapibus ut. Praesent placerat diam non massa lobortis, sed rhoncus sem elementum. Sed aliquet ultricies lorem id venenatis. Nulla mollis, mauris in tincidunt tincidunt, lorem lacus pulvinar arcu, sed elementum nibh quam quis diam. Vivamus elit nisi, vehicula quis purus eu, pharetra auctor quam. Fusce non suscipit dui, vitae dignissim ipsum. Integer pretium risus vitae dignissim pulvinar. Cras lectus sem, molestie ut lacinia nec, bibendum eget arcu. Pellentesque pharetra ut eros eu finibus. Curabitur nec massa id ipsum bibendum placerat sit amet ac dolor. Aliquam a commodo erat. Suspendisse potenti. Pellentesque sed erat rhoncus, iaculis est ut, vulputate enim. Sed ullamcorper massa at diam pulvinar hendrerit.
        
        Sed vehicula felis faucibus purus feugiat elementum. Nam lobortis nisl non felis bibendum, sit amet finibus lacus mattis. Quisque dolor mauris, luctus vitae mauris lacinia, pulvinar euismod ante. Nulla a ultrices mi, nec commodo arcu. Sed mattis arcu quis pellentesque consectetur. Vestibulum id tempor erat. Morbi non dui felis. Donec vel congue urna.
        
        Aenean mattis ipsum quis faucibus porttitor. Sed blandit arcu et mauris imperdiet rutrum. Cras auctor, purus eu aliquet consectetur, ipsum neque egestas ligula, sit amet tincidunt neque neque vel justo. Donec libero ligula, sodales vel risus eget, consequat venenatis sem. Maecenas congue feugiat turpis, vel pellentesque leo blandit non. Integer sit amet odio non ipsum facilisis tristique in vitae ligula. Cras at libero ipsum. Donec tempus porttitor egestas. In quis est id lacus ornare rutrum eu sed mi. Aenean scelerisque vestibulum augue vitae viverra. Donec luctus vel ipsum sed accumsan.`,
        portionSize: 10,
        time: 15,
        ingredients: [
            {quantity: 4, title: 'small cucumbers'},
            {quantity: 3, title: 'chilis'},
            {quantity: 5, title: 'springs of aspargus'}
        ],
        rating: 4.5,
        steps: [
            'Wash the cucumbers', 
            'Season the chilis',
            'Peel the springs of aspargus',
            'Roll out the cucumbers',
            'Quarter the springs of aspargus',
            'Squeeze the chilis',
            'Squeeze the cucumbers',
            'Unwrap the chilis'
        ],
        vegetarian: true,
        vegan: true,
        glutenFree: true,
        lactoseFree: true,
    } 


    const StepItem = ({number, text}) => {
        return (
            <div className="stepitem">
                <ItemCircle number={number}/>
                <p className="itemtext">{text}</p>
            </div>            
        );
    }

    const Square = () => {
        return (
            <div className="outer">            
                <div className="square"/>
            </div>
        );
    }
    const IngredientItem = ({text}) => {
        return (
            <div className="stepitem">
                <Square/>
                <p className="itemtext">{text.quantity} {text.title}</p>
            </div>            
        );
    }

    function handleFavourite(){
        // todo
        return
    }

    function handleRating(){
        // todo
        return
    }

    return (
      <div>
        <Navbar />
        {isUserLoggedIn() && (
          <div className="user-actions">
            <FormControlLabel
              control={
                <Checkbox
                  icon={<FavoriteBorder />}
                  checkedIcon={<Favorite />}
                  onClick={handleFavourite}
                />
              }
              label="Add recipe to favourites"
            />
            <div className="rating">
              <Rating defaultValue={0.5} precision={0.5} />
              <Button onClick={handleRating}>Rate this recipe</Button>
            </div>
          </div>
        )}

        <div className="outer-container">
          <RecipeInfo
            title={data.title}
            description={data.description}
            imageSource={data.imageSource}
            time={data.time}
            portionSize={data.portionSize}
            rating={data.rating}
            diet={[
              {
                type: "vegetarian",
                value: data.vegetarian,
              },
              {
                type: "vegan",
                value: data.vegan,
              },
              {
                type: "glutenFree",
                value: data.glutenFree,
              },
              {
                type: "lactoseFree",
                value: data.lactoseFree,
              },
            ]}
          />
          <ShareDial data={data} />
          <div className="right-container">
            <p className="section-text">Ingredients</p>
            <p>
              {data.ingredients.map((ingredient) => (
                <IngredientItem text={ingredient} />
              ))}
            </p>
            <p className="section-text">Steps</p>
            <p>
              {data.steps.map((text, index) => (
                <StepItem number={index + 1} text={text} />
              ))}
            </p>
          </div>
        </div>
      </div>
    );
};

export default RecipeScreen;
