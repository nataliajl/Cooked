import React from "react";

import Navbar from '../../components/Navbar/Navbar'
import {Button} from '@material-ui/core'

const AddRecipeScreen = () => {
    return (
        <div>
            <Navbar/>
            <p>Adicionar receita</p>
            <Button
                variant="contained"
                color = "primary"
            >
                Salvar
            </Button>
        </div>
    );
}

export default AddRecipeScreen;