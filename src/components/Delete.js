import React, { useContext, useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import Modal from 'react-modal';

import { MdDelete } from 'react-icons/md';
import UserContext from '../contexts/UserContext';

export default function Delete(props) {
    const { id } = props;
    const [open, setOpen] = useState(false);
    const [enable, setEnable] = useState(false);
    const { userToken } = useContext(UserContext);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    
    const location = useLocation();
    const history = useHistory();
    
    function deletePost(){
        setEnable(true);
        const request = axios.delete("https://mock-api.bootcamp.respondeai.com.br/api/v1/linkr/posts/"+id,userToken);
        request.then(() => { 
            handleClose();
            history.push(location.pathname);
        }).catch(() => {
            alert("Não foi possível excluir o post");
            handleClose();
        });
    }

    return (
        <>
            <Icon>
                <MdDelete onClick={handleOpen}/>
            </Icon>
            <Modal  style={style} isOpen={open}  ariaHideApp={false}>                
                {!enable ? 
                <Text>Tem certeza que deseja excluir essa publicação?</Text> :
                <Load><img src="./images/loading.gif"></img></Load>}
                <Buttons>
                    <button onClick={handleClose} className="no" disabled={enable}>
                        Não, voltar
                    </button>
                    <button onClick={deletePost} className="yes" disabled={enable}>
                        Sim, excluir
                    </button>
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
const Load = styled.div`
    display:flex;
    justify-content:center;

    img{
        width:60px;
        border-radius:10px;
    }
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