import React from "react";
import styled from "styled-components";
import { Switch, Route, withRouter } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import What from './What';
import Why from './Why';
import How from './How'
import Companies from './Companies'

function Container({ location }) {
  return (
    <Wrapper>
    <div style={{background: '#2A2A2A'}}>
      <TransitionGroup className="transition-group">
        <CSSTransition
          key={location.key}
          timeout={{ enter: 300, exit: 300 }}
          classNames="fade"
        >
          <section className="route-section">
            <Switch location={location}>
              <Route exact path="/" component={What} />
              <Route path="/what" component={What} />
              <Route path="/why" component={Why} />
              <Route path="/how" component={How} />
              <Route path="/companies" component={Companies} />
            </Switch>
          </section>
        </CSSTransition>
      </TransitionGroup>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
.fade-enter {
  opacity: 0.01;
}

.fade-enter.fade-enter-active {
  opacity: 1;
  transition: opacity 300ms ease-in;
}

.fade-exit {
  opacity: 1;
}

.fade-exit.fade-exit-active {
  opacity: 0.01;
  transition: opacity 300ms ease-in;
}

div.transition-group {
}

section.route-section {
  width: 100%;
  top: 0;
  left: 0;
}
`;

export default withRouter(Container);
