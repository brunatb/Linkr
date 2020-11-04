import React, { useContext, useState, useRef, useEffect } from 'react'
import styled from 'styled-components';
import EditContext from '../contexts/EditContext';

export default function Edit(props) {

    const { text, id } = props;
    const { textEdit, setTextEdit, setEditing, postEdit, setPostId, disabled, setDisabled} = useContext(EditContext);
    
    useEffect(() => {
        setTextEdit(text);
    }, [])

    return (
        <textarea
            autoFocus
            type='text'
            onChange={e => {
                setTextEdit(e.target.value);
                setPostId(id);
            }}
            onKeyUp={(e) => {
                if(e.keyCode == 27){
                    setEditing(false);
                }
                if(e.keyCode == 13){
                    setDisabled(true);
                    postEdit();
                }
            }}
            value={textEdit}
            disabled={disabled}/>
    );

}