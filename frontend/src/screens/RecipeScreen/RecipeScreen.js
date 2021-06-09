import React from 'react';

import '@fontsource/lato';
import Navbar from '../../components/Navbar/Navbar';
import './RecipeScreen.css';
import ItemCircle from '../../components/ItemCircle/ItemCircle'
import RecipeInfo from '../../components/RecipeInfo/RecipeInfo';


const RecipeScreen = () => {
    const data = {
        title: 'Recipe title',
        imageSource: 'https://industryeats.com/wp-content/uploads/2017/07/cucumber-asparagus-salad.jpg',
        descripion: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean erat justo, pretium sit amet sem nec, aliquet dignissim purus. Donec non velit rutrum, luctus nunc eget, aliquam nisl. Nulla sit amet eros nec risus volutpat porttitor. Cras sit amet leo et leo facilisis gravida. In commodo sapien vitae tellus iaculis, a sodales nunc blandit. Aliquam eget diam gravida, ullamcorper sem at, placerat elit. Vestibulum eget tellus sagittis, laoreet augue faucibus, viverra lorem. Curabitur tincidunt convallis volutpat. Nunc a odio est. Integer bibendum sagittis arcu vel ornare.

        Nullam erat felis, venenatis eu lectus sed, pellentesque pharetra dolor. Morbi cursus lobortis leo, vitae euismod metus dapibus ut. Praesent placerat diam non massa lobortis, sed rhoncus sem elementum. Sed aliquet ultricies lorem id venenatis. Nulla mollis, mauris in tincidunt tincidunt, lorem lacus pulvinar arcu, sed elementum nibh quam quis diam. Vivamus elit nisi, vehicula quis purus eu, pharetra auctor quam. Fusce non suscipit dui, vitae dignissim ipsum. Integer pretium risus vitae dignissim pulvinar. Cras lectus sem, molestie ut lacinia nec, bibendum eget arcu. Pellentesque pharetra ut eros eu finibus. Curabitur nec massa id ipsum bibendum placerat sit amet ac dolor. Aliquam a commodo erat. Suspendisse potenti. Pellentesque sed erat rhoncus, iaculis est ut, vulputate enim. Sed ullamcorper massa at diam pulvinar hendrerit.
        
        Sed vehicula felis faucibus purus feugiat elementum. Nam lobortis nisl non felis bibendum, sit amet finibus lacus mattis. Quisque dolor mauris, luctus vitae mauris lacinia, pulvinar euismod ante. Nulla a ultrices mi, nec commodo arcu. Sed mattis arcu quis pellentesque consectetur. Vestibulum id tempor erat. Morbi non dui felis. Donec vel congue urna.
        
        Aenean mattis ipsum quis faucibus porttitor. Sed blandit arcu et mauris imperdiet rutrum. Cras auctor, purus eu aliquet consectetur, ipsum neque egestas ligula, sit amet tincidunt neque neque vel justo. Donec libero ligula, sodales vel risus eget, consequat venenatis sem. Maecenas congue feugiat turpis, vel pellentesque leo blandit non. Integer sit amet odio non ipsum facilisis tristique in vitae ligula. Cras at libero ipsum. Donec tempus porttitor egestas. In quis est id lacus ornare rutrum eu sed mi. Aenean scelerisque vestibulum augue vitae viverra. Donec luctus vel ipsum sed accumsan.`,
        portionSize: 10,
        time: 15,
        ingredients: [
            '4 small cucumbers',
            '3 chilis',
            '5 springs of aspargus'
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
        comments: [
            {
                name: "User X",
                comment: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vitae.",
                likes: 12
            },
            {
                name: "User Y",
                comment: "Nullam sit.",
                likes: 1000
            },
            {
                name: "User Z",
                comment: `Morbi eu accumsan elit. Nullam ac efficitur arcu. Quisque condimentum laoreet sem, non elementum purus tempor eget. Ut sit amet libero elementum est sollicitudin consequat non sed urna. Duis aliquet eros eros, ut aliquam nibh ullamcorper vitae. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras condimentum tellus libero, cursus placerat tellus auctor ac. Quisque vitae lectus a turpis dapibus euismod.\nNullam accumsan odio felis, at porttitor velit bibendum a. Morbi vitae porta erat, finibus molestie felis. Sed cursus risus ante. Morbi consequat dui magna, vel ultricies augue egestas placerat. Praesent vel metus eget urna pulvinar pretium. Donec non maximus enim, vitae sollicitudin ligula. Pellentesque at tristique leo. Suspendisse augue nunc, commodo ac hendrerit vitae, tempor vitae libero. Sed a massa a tortor lobortis lacinia ac eget purus.`,
                likes: 0
            },
            {
                name: "User W",
                comment: "Duis rutrum augue placerat, sollicitudin dolor ac, lobortis urna. In pretium nisi nibh. Aliquam erat volutpat. Nulla ac sagittis sem, vel ultricies velit. In efficitur.",
                likes: 100
            }
        ]
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
                <p className="itemtext">{text}</p>
            </div>            
        );
    }

    return ( 
        <div>
            <Navbar/>
            <div className="outer-container">
                <RecipeInfo 
                    title={data.title}
                    description={data.descripion}
                    imageSource={data.imageSource}
                    time={data.time}
                    portionSize={data.portionSize}
                    rating={data.rating}
                    comments={data.comments}
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
                <div className="right-container">
                    <p className="section-text">Ingredients</p>
                    <p>
                        {data.ingredients.map(text => <IngredientItem text={text}/>)}
                    </p>
                    <p className="section-text">Steps</p>
                    <p>
                        {data.steps.map((text, index) => <StepItem number={index + 1} text={text}/>)}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default RecipeScreen;
