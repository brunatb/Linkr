/* eslint-disable no-console */
/* eslint-disable no-alert */
/* eslint-disable react/button-has-type */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-use-before-define */
import axios from "axios";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import UserContext from "../contexts/UserContext";
import Location from "./Location";

export default function Publish({ setPosts }) {
  const [link, setLink] = useState("");
  const [text, setText] = useState("");
  const [geoLocation, setGeoLocation] = useState({});
  const { token, user } = useContext(UserContext);
  const [enable, setEnable] = useState(false);

  function verifyLink() {
    let request;
    if (!link) {
      alert("Preencha o campo de link!");
    } else {
      setEnable(true);
      if (geoLocation.coords !== undefined) {
        request = axios.post(
          "https://mock-api.bootcamp.respondeai.com.br/api/v1/linkr/posts",
          {
            link,
            text,
            geolocation: {
              latitude: geoLocation.coords.latitude,
              longitude: geoLocation.coords.longitude,
            },
          },
          token
        );
      } else {
        request = axios.post(
          "https://mock-api.bootcamp.respondeai.com.br/api/v1/linkr/posts",
          { link, text },
          token
        );
      }
      request.then(successCase).catch(errorCase);
    }
  }

  function errorCase(response) {
    alert("Houve um erro ao publicar seu link!");
    setEnable(false);
    console.log(response);
  }

  function successCase() {
    setEnable(false);
    const request = axios.get(
      "https://mock-api.bootcamp.respondeai.com.br/api/v1/linkr/following/posts?offset=0&limit=10",
      token
    );
    request
      .then((response) => {
        setPosts(response.data.posts);
        setLink("");
        setText("");
      })
      .catch(() =>
        alert("Houve uma falha ao obter os posts, por favor atualize a página")
      );
  }

  return (
    <Container location={location}>
      <Link to="/my-posts">
        <img src={user.user.avatar} alt="avatar" />
      </Link>
      <div>
        <p>O que você tem para favoritar hoje?</p>
        <input
          type="text"
          name="link"
          placeholder="http://..."
          onChange={(e) => setLink(e.target.value)}
          value={link}
          disabled={enable}
        />
        <textarea
          placeholder="Muito irado esse link falando de #javascript"
          onChange={(e) => setText(e.target.value)}
          value={text}
          disabled={enable}
        />
        <div className="container-button">
          <Location setGeoLocation={setGeoLocation} />
          <button onClick={verifyLink} disabled={enable}>
            {!enable ? "Publicar" : "Publicando..."}
          </button>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.section`
  display: flex;
  border-radius: 15px;
  background: #fff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 20px;
  font-family: "Lato";
  margin-bottom: 30px;

  img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
  }
  div {
    width: 100%;
    padding: 0 0 0 10px;
  }
  p {
    color: #707070;
    font-size: 20px;
    line-height: 24px;
    margin: 15px 0 10px 0;
  }
  input,
  textarea {
    width: 100%;
    background: #efefef;
    border-radius: 5px;
    margin-bottom: 10px;
    padding: 10px 10px;
  }
  input {
    height: 30px;
  }
  textarea {
    height: 70px;
  }
  .container-button {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0;
  }
  button {
    width: 110px;
    height: 30px;
    background: #1877f2;
    border-radius: 5px;
    color: #fff;
    cursor: pointer;
  }
  @media (max-width: 800px) {
    border-radius: 0;
    img {
      display: none;
    }
  }
`;
