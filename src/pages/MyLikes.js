import React, { useContext } from "react";

import SectionFiltered from "../components/SectionFiltered";
import UserContext from "../contexts/UserContext";

export default function MyLikes() {
  const { user } = useContext(UserContext);
  const linkApi = `https://mock-api.bootcamp.respondeai.com.br/api/v1/linkr/posts/liked`;
  const title = "my likes";
  const myLikes = true;

  return (
    <SectionFiltered
      linkApi={linkApi}
      title={title}
      avatar={user.user.avatar}
      myLikes={myLikes}
    />
  );
}
