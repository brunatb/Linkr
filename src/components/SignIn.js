/* eslint-disable no-alert */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

import Forms from "./Forms";
import UserContext from "../contexts/UserContext";

export default function SignIn({ setTask }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggingIn, setLoggingIn] = useState(false);
  const { setUser, setUserToken, userToken } = useContext(UserContext);
  const history = useHistory();

  if (userToken) {
    history.push("/timeline");
  }

  function verifyInputs() {
    if (email === "" || password === "") alert("Preencha todos os campos");
    else {
      setLoggingIn(true);
      const request = axios.post(
        "https://mock-api.bootcamp.respondeai.com.br/api/v1/linkr/sign_in",
        { email, password }
      );
      request
        .then((props) => {
          const tokenObject = { token: props.data.token, user: props.data };
          setUser(props.data);
          setUserToken(props.data.token);
          localStorage.setItem("tokenObject", JSON.stringify(tokenObject));
          history.push("/timeline");
        })
        .catch(() => {
          alert("Email/Senha incorretos");
          setLoggingIn(false);
        });
    }
  }

  return (
    <>
      <Forms>
        <input
          type="email"
          name="email"
          placeholder="e-mail"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <input
          type="password"
          name="senha"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <button onClick={verifyInputs} type="submit" disabled={loggingIn}>
          Log In
        </button>
      </Forms>
      <p onClick={() => setTask(false)}>First time? Create an account</p>
    </>
  );
}
