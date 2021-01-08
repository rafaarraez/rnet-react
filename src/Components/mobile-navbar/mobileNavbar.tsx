import React from "react";
import { Link } from "react-router-dom";
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
        <Link to={'/category/apps'}  className="item column">
          <i className="large desktop icon"></i>
        </Link>
        <Link to={'/category/apps'}  className="item column">
          <i className="big mobile icon"></i>
        </Link>
        <Link to={'/category/apps'}  className="item column">
          <i className="large app store icon"></i>
        </Link>
        <Link to={'/category/apps'}  className="item column">
          <i className="large book icon"></i>
        </Link>
        <div className="item column">
          <i className="large id card icon"></i>
        </div>
      </div>
    </MobileNav>
  );
};

export default MobileNavbar;
