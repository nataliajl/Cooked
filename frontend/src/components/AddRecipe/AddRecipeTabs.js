import React from 'react';
import PropTypes from 'prop-types';

import { Typography, Tabs, Tab, Box } from '@material-ui/core';
import ListForm from './ListForm/ListForm';


function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`recipe-tabpanel-${index}`}
            aria-labelledby={`recipe-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function recipeTabsProps(index) {
    return {
        id: `recipe-tab-${index}`,
        'aria-controls': `recipe-tabpanel-${index}`,
    };
}

const AddRecipeTabs = ({ 
    ingredients,
    setIngredients, 
    steps,
    setSteps
}) => {
    const [tabValue, setTabValue] = React.useState(0);

    const handleTabChange = (event, newTabValue) => {
        setTabValue(newTabValue);
    };

    return (
        <>
            <Tabs 
                value={tabValue} 
                onChange={handleTabChange} 
                indicatorColor="primary"
                textColor="primary"
                aria-label="recipe tabs"
            >
                <Tab label="Ingredients" {...recipeTabsProps(0)} />
                <Tab label="Steps" {...recipeTabsProps(1)} />
            </Tabs>

            <TabPanel value={tabValue} index={0}>
                <ListForm 
                    type='ingredients'
                    ingredients={ingredients} 
                    setIngredients={setIngredients}
                />
            </TabPanel>
            <TabPanel value={tabValue} index={1}>
                <ListForm 
                    type='steps'
                    steps={steps} 
                    setSteps={setSteps}
                />
            </TabPanel>
        </>
    );
}

export default AddRecipeTabs;