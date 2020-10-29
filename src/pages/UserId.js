import React, { useContext } from 'react';
import { useParams } from 'react-router-dom'
import SectionFiltered from '../components/SectionFiltered';
import UserContext from '../contexts/UserContext';

export default function UserId(){
    const { id } = useParams();
    const { page, moreLoad } = useContext(UserContext);
    const linkApi = `https://mock-api.bootcamp.respondeai.com.br/api/v1/linkr/users/${id}/posts?offset=${page}&limit=${moreLoad}`

    return(
        <SectionFiltered linkApi={linkApi} title={""} />
    )
} 