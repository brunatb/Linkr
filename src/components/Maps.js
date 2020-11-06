import React, { useState } from 'react';
import { MdLocationOn } from 'react-icons/md';
import {AiOutlineClose} from 'react-icons/ai';
import styled, { withTheme } from 'styled-components';
import Modal from 'react-modal';

export default function Maps({name, place}){
    const [open, setOpen] = useState(false);
   
    return(
        <Container>
            <MdLocationOn onClick={() => setOpen(true)} />
            <Modal style={style} isOpen={open} ariaHideApp={false}>
                <Close>
                    <h2>{`${name}'s location`}</h2>
                    <AiOutlineClose onClick={() => setOpen(false)} />
                </Close>

            </Modal>
        </Container>
    )
}

const Container = styled.span`
    svg{
        color: white;
        cursor: pointer;
    }
`;

const Close = styled.div`
    display: flex;
    justify-content: space-between;
    
    h2{
        font-size: 30px;
        font-weight: bold;
    }

    svg{
        cursor: pointer;
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
        padding: "3% 5%", 
        color: 'white',
    }
}