import React from "react";
import styled from "styled-components";
import { Switch, Route, withRouter } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import Main from '../pages/Main'
import MyPosts from '../pages/MyPosts';
import TimeLine from '../pages/TimeLine';
import Hashtag from '../pages/Hashtag';
import UserId from '../pages/UserId';
import MyLikes from '../pages/MyLikes';

function Container({ location }){

    return(
        <Wrapper>
            <TransitionGroup className="transition-group">
                <CSSTransition
                    key={location.key}
                    timeout={{enter: 300, exit: 300}}
                    classNames="fade"
                >
                    <section className='route-section'>
                        <Switch location={location}>
                            <Route path='/timeline'>
                                <TimeLine  />
                            </Route>
                            <Route path='/my-posts'>
                                <MyPosts />
                            </Route>
                            <Route path='/my-likes'>
                                <MyLikes />
                            </Route>
                            <Route path='/hashtag/:hashtag'>
                                <Hashtag />
                            </Route>
                            <Route path='/user/:id'>
                                <UserId />
                            </Route>
                            <Route path='/'>
                                <Main  />
                            </Route>
                        </Switch>
                    </section>
                </CSSTransition>
            </TransitionGroup>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    .fade-enter {
        opacity: 0.01;
    }
    .fade-enter.fade-enter-active {
        opacity: 1;
        transition: opacity 500ms ease-in;
    }
    .fade-exit {
        opacity: 1;
    }
      
    .fade-exit.fade-exit-active {
        opacity: 0.01;
        transition: opacity 500ms ease-in;
    }

    div.transition-group {
        position: relative;
    }
    section.route-section {
        position: absolute;
        width: 100%;
        top: 0;
        left: 0;
    }

`;

export default withRouter(Container);