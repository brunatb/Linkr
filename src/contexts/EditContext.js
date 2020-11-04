import { createContext } from 'react';
import React, { useState } from 'react';

const EditContext = createContext();

export default EditContext;

export function EditProvider(props){

   
    return(
        <EditContext.Provider>
            {props.children}
        </EditContext.Provider>
    )
}


//value={{editing, setEditing, textEdit, setTextEdit}}