import React from "react";

import Header from "../components/Header";
import Trending from "../components/Trending";
import SectionTimeline from "../components/SectionTimeline";
import PagesContainer from "../components/PagesContainer";
import UserSearch from "../components/UserSearch";

export default function TimeLine() {
  return (
    <>
      <Header />
      <PagesContainer>
        <UserSearch />
        <h2>timeline</h2>
        <div>
          <SectionTimeline />
          <Trending />
        </div>
      </PagesContainer>
    </>
  );
}
