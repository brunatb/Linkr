import React, {useState} from 'react';
import { GoLocation } from 'react-icons/go';
import styled from 'styled-components';

export default function Location({setGeoLocation}){
    const [location, setLocation] = useState(false);

    function getLocation(){
        navigator.geolocation.getCurrentPosition(storePosition, () =>{
            alert('Geolocation is not supported by this browser.');
            setLocation(false);
        });
    }

    function storePosition(position){
        setGeoLocation(position);
    }

    return(
        <Container location={location}>
            {location ? 
                <span onClick={()=> {
                    setLocation(false)
                }}> <GoLocation className='icon' /> Localização ativada</span> 
                : 
                <span onClick={()=> {
                    setLocation(true)
                    getLocation();
                }}> <GoLocation className='icon' /> Localização desativada</span>
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

    .icon{
        color: ${props => props.location ? '#238700' : '#707070'};
    }
`;