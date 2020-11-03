import React, { useContext, useState, useEffect } from 'react'
import styled from 'styled-components';
import axios from 'axios';

import { MdDelete } from 'react-icons/md';

export default function Delete() {
    return (
        <Icon>
            <MdDelete />
        </Icon>
    );     
}

const Icon = styled.span `
    margin: 0px 5px;
`;