import React, { useContext } from 'react';

import SectionFiltered from '../components/SectionFiltered';

export default function MyLikes(){
    const linkApi = `https://mock-api.bootcamp.respondeai.com.br/api/v1/linkr/posts/liked`
    const title = 'my likes';

    return(
        <SectionFiltered linkApi={linkApi} title={title} />
    )
}
 