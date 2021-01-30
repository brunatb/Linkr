/* eslint-disable react/destructuring-assignment */
import React, { createContext, useState } from "react";

const UserContext = createContext();

export default UserContext;

export function UserProvider(props) {
  const initialTokenState =
    localStorage.getItem("tokenObject") &&
    JSON.parse(localStorage.getItem("tokenObject")).token;
  const initialUserState =
    localStorage.getItem("tokenObject") &&
    JSON.parse(localStorage.getItem("tokenObject")).user;

  const [userToken, setUserToken] = useState(initialTokenState);
  const [user, setUser] = useState(initialUserState);
  const [page, setPage] = useState(0);

  const token = { headers: { "user-token": userToken } };

  return (
    <UserContext.Provider
      value={{ user, setUser, userToken, setUserToken, page, setPage, token }}
    >
      {props.children}
    </UserContext.Provider>
  );
}
