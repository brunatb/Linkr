import React from 'react';
import { useParams } from 'react-router-dom'
import SectionFiltered from '../components/SectionFiltered';

export default function UserId(){
    const { id } = useParams(); 
    const linkApi = `https://mock-api.bootcamp.respondeai.com.br/api/v1/linkr/users/${id}/posts?offset=0&limit=10`

    return(
        <SectionFiltered linkApi={linkApi} title={""} />
    )
}