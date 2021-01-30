/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import UserContext from "../contexts/UserContext";

export default function Menu() {
  const { setPage, setUserToken } = useContext(UserContext);

  function clearLocal() {
    localStorage.clear();
    setUserToken("");
  }

  return (
    <StyledMenu>
      <ul>
        <Link to="/my-posts" onClick={() => setPage(0)}>
          <li>My posts</li>
        </Link>
        <Link to="/my-likes">
          <li>My likes</li>
        </Link>
        <Link to="/">
          <li onClick={clearLocal}>Logout</li>
        </Link>
      </ul>
    </StyledMenu>
  );
}

const StyledMenu = styled.nav`
  position: absolute;
  width: 130px;
  top: 60px;
  right: -25px;
  background: #171717;
  padding: 15px;
  border-radius: 0 0 0 20px;

  li {
    font-family: "Lato", sans-serif;
    font-weight: bold;
    font-size: 17px;
    line-height: 20px;
    letter-spacing: 0.05em;
    text-align: center;
    margin: 0 0 10px;
    cursor: pointer;
    color: white;
  }
`;
