import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';

import SectionFiltered from '../components/SectionFiltered';

import UserContext from '../contexts/UserContext';

export default function MyPosts(){
    const { user, userToken } = useContext(UserContext);
    const linkApi = `https://mock-api.bootcamp.respondeai.com.br/api/v1/linkr/users/${user.user.id}/posts?offset=0&limit=10`
    const title = 'my posts';

    return(
        <SectionFiltered linkApi={linkApi} title={title} />
    )
}
