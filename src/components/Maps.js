import React, { useState } from 'react';
import { MdLocationOn } from 'react-icons/md';
import styled from 'styled-components';
import Modal from 'react-modal';

export default function Maps({name, place}){
    const [open, setOpen] = useState(false);

    return(
        <Container>
            <MdLocationOn onClick={() => setOpen(true)} />
            <Modal style={style} isOpen={open} ariaHideApp={false}>
                <h2>{`${name}'s location`}</h2>
            </Modal>
        </Container>
    )

}

const Container = styled.span`
    svg{
        color: white;
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