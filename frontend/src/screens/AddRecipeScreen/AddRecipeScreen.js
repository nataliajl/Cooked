import React from "react";

import Navbar from '../../components/Navbar/Navbar'
import {Button, TextField} from '@material-ui/core'

const AddRecipeScreen = () => {
    return (
        <div>
            <Navbar/>
            <p>Adicionar receita</p>
            <TextField id="outlined-classic" label="Ingrediente 3" variant="outlined" margin="normal" />
            <TextField id="outlined-classic" label="Ingrediente 3" variant="outlined" margin="normal" />
            <TextField id="outlined-classic" label="Ingrediente 3" variant="outlined" margin="normal" />
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