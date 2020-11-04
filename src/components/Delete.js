import React, { useContext, useState, useEffect } from 'react'
import styled from 'styled-components';
import axios from 'axios';
import Modal from 'react-modal';

import { MdDelete } from 'react-icons/md';

export default function Delete() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    
    return (
        <>
            <Icon>
                <MdDelete onClick={handleOpen}/>
            </Icon>
            <Modal  style={style} isOpen={open}  ariaHideApp={false}>
                <Text>Tem certeza que deseja excluir essa publicação?</Text>
                <Buttons>
                    <button onClick={handleClose} className="no">Não, voltar</button>
                    <button className="yes">Sim, excluir</button>
                </Buttons>                
            </Modal>
        </>
    );     
}

const Icon = styled.span`
    margin: 0px 5px;
`;
const Text = styled.p`
    color: #fff;
    font-size: 30px;
    margin-bottom: 10px;
`;
const Buttons = styled.div`
    display:flex;
    justify-content:center;
    .no,.yes{
        width:30%;
        border-radius: 5px;
        padding: 10px 0;
        margin:20px;
        cursor: pointer;
    }
    .no{
        background-color: #fff;
        color: #1877F2;
    }
    .yes{
        background-color: #1877F2;
        color: #fff;
    }    
`;

export const style = {
    overlay:{
        backgroundColor: "rgba(255, 255, 255, 0.9)",
        display: "flex",
    },
    content: {
        top:"30%",
        margin: "0 auto",
        backgroundColor: "#333",
        width:"50%",
        height:"30%",
        opacity: "1",
        borderRadius: "30px", 
        textAlign: "center",
        padding: "3% 10%"
    }
}