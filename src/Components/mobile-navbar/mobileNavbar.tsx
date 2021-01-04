import React from "react";
import styled from "styled-components";

const MobileNav = styled.div`
  @media screen and (min-width: 769px) {
       display: none !important;
    }
  }
`;

const MobileNavbar = () => {
  return (
    <MobileNav className="ui massive borderless inverted white red bottom fixed menu">
      <div className="ui five column grid inverted white red container">
        <a href="/tecnologia" className="item column">
          <i className="large desktop icon"></i>
        </a>
        <a href="/smartphones" className="item column">
          <i className="big mobile icon"></i>
        </a>
        <a href="/apps" className="item column">
          <i className="large app store icon"></i>
        </a>
        <a href="/tutoriales" className="item column">
          <i className="large book icon"></i>
        </a>
        <a className="item column">
          <i className="large id card icon"></i>
        </a>
      </div>
    </MobileNav>
  );
};

export default MobileNavbar;
