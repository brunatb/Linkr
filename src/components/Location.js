import React, {useState} from 'react';
import {GrLocation} from 'react-icons/gr';
import styled from 'styled-components';

export default function Location(){
    const [location, setLocation] = useState(false);

    function getLocation(){
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(storePosition);
        }else{
            alert('Geolocation is not supported by this browser.');
            setLocation(false);
        }
    }

    function storePosition(position){
        console.log(position);
    }

    return(
        <Container location={location}>
            {location ? 
                <span onClick={()=> {
                    setLocation(false)
                }}> <GrLocation /> Localização ativada</span> 
                : 
                <span onClick={()=> {
                    setLocation(true)
                    getLocation();
                }}> <GrLocation /> Localização desativada</span>
            }
        </Container>
         
    )
}

const Container = styled.div`
    & > span{
        font-size: 13px;
        color: ${props => props.location ? '#238700' : '#707070'};
        cursor: pointer;
    }

    svg{
        color: ${props => props.location ? '#238700' : '#707070'};
    }
`;