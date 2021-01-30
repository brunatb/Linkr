import React, { useState } from "react";
import styled from "styled-components";

import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";

export default function Main() {
  const [task, setTask] = useState(true);
  return (
    <Container>
      <section>
        <h1>linkr</h1>
        <h2>
          save, share and discover
          <br />
          the best links on the web
        </h2>
      </section>
      <StyledSection>
        {task ? <SignIn setTask={setTask} /> : <SignUp setTask={setTask} />}
      </StyledSection>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  display: flex;
  height: 100vh;
  color: #fff;
  h1 {
    font-family: "Passion One";
    font-size: 106px;
  }
  h2 {
    font-size: 43px;
  }
  section {
    width: 60%;
    background: #151515;
    padding: 12% 10%;
  }
  @media (max-width: 800px) {
    flex-direction: column;
    section {
      width: 100%;
    }
    h1 {
      font-size: 76px;
    }
    h2 {
      font-size: 23px;
    }
  }
`;

const StyledSection = styled.div`
  width: 40%;
  background: #333;
  text-align: center;
  padding: 13% 0;

  p {
    font-family: "Lato";
    font-size: 20px;
    text-decoration: underline;
    cursor: pointer;
  }
  @media (max-width: 800px) {
    width: 100%;
    height: 100%;
  }
`;
