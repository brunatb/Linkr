import React, { useContext } from 'react';

import SectionFiltered from '../components/SectionFiltered';

import UserContext from '../contexts/UserContext';

export default function MyPosts(){
    const { user, page, moreLoad } = useContext(UserContext);
    const linkApi = `https://mock-api.bootcamp.respondeai.com.br/api/v1/linkr/users/${user.user.id}/posts?offset=${page}&limit=${moreLoad}`
    const title = 'my posts';

    return(
        <SectionFiltered linkApi={linkApi} title={title} />
    )
}
