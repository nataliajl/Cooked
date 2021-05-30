import React from "react";

import IngredientsForm  from "./IngredientsForm";
import StepsForm from "./StepsForm";


const ListFormManage = {
    ingredients: {
        render(props){
            return <IngredientsForm {...props} />
        }
    },
    steps:{
        render(props){
            return <StepsForm {...props} />
        }
    }
};

const ListForm = (props) => {
    return ListFormManage[props.type].render(props);
};

export default ListForm;