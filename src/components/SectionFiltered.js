/* eslint-disable no-nested-ternary */
/* eslint-disable no-return-assign */
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import InfiniteScroll from "react-infinite-scroll-component";

import PostsContainer from "./PostsContainer";
import Post from "./Post";
import Header from "./Header";
import PagesContainer from "./PagesContainer";
import Trending from "./Trending";
import FollowBtn from "./FollowBtn";
import UserContext from "../contexts/UserContext";

export default function SectionFiltered({ linkApi, title, avatar }) {
  const { token, page, setPage } = useContext(UserContext);
  const [posts, setPosts] = useState([]);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    let mounted = true;
    const request = axios.get(linkApi, token);
    request.then((response) => {
      if (mounted) {
        let newPosts;
        if (
          response.data.length !== 0 &&
          posts.length !== response.data.posts.length
        ) {
          newPosts = [...posts, ...response.data.posts];
        } else {
          newPosts = [...posts];
        }
        setPosts(newPosts);
        setLoad(true);
      }
    });
    return () => (mounted = false);
  }, [token, linkApi, page]);

  return (
    <>
      <Header />
      <PagesContainer>
        <div className="btn-container">
          <span className="user-info">
            {avatar ? <img src={avatar} alt="avatar" /> : ""}
            <h2>{title || "Carregando"}</h2>
          </span>
          {title ? (
            title.charAt(0) === "#" ||
            title === "my likes" ||
            title === "my posts" ? (
              ""
            ) : (
              <FollowBtn />
            )
          ) : (
            ""
          )}
        </div>
        <div>
          <PostsContainer>
            {posts.length === 0 && !load ? (
              <Load>
                <img src="../images/loading.gif" alt="carregando" />
              </Load>
            ) : posts.length === 0 && load ? (
              <Text>Nenhum post encontrado</Text>
            ) : (
              <InfiniteScroll
                dataLength={posts.length}
                next={() => {
                  setPage(page + 10);
                }}
                hasMore={!(posts.length < 10)}
              >
                {posts.map((post) => (
                  <Post key={post.id} post={post} />
                ))}
              </InfiniteScroll>
            )}
          </PostsContainer>
          <Trending />
        </div>
      </PagesContainer>
    </>
  );
}

const Load = styled.div`
  display: flex;
  justify-content: center;

  img {
    width: 60px;
    border-radius: 10px;
  }
`;

const Text = styled.p`
  color: #fff;
  text-align: center;
  font-size: 20px;
`;
