import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderStyled = styled.header`
  margin: 0 !important;
  @media screen and (max-width: 760px) {
     {
    }
    div a.item,
    div div.menu2 {
      display: none !important;
    }
    app-identification {
      cursor: pointer;
    }
    app-identification:hover {
      /*background-color:;*/
    }
  }
`;

const Header = () => {
  return (
    <HeaderStyled className="ui inverted white red stackable menu">
      <div className="ui large labeled icon red inverted white menu">
        <h1 className="ui header item">
          <Link to={'/'}>RNet</Link>
        </h1>
        <Link to={'/category/tecnologia'} className="item">
          <i className="desktop icon"></i>Tecnologia
        </Link>
        <Link to={'/category/smartphones'} className="item">
          <i className="mobile icon"></i>Smartphones
        </Link>
        <Link to={'/category/apps'} className="item">
          <i className="app store icon"></i>Apps
        </Link>
        <Link to={'/category/tutoriales'} className="item">
          <i className="book icon"></i>Tutoriales
        </Link>
      </div>
      <div className="right menu">
        <div className="ui right aligned category search item">
          <div className="ui icon input">
            <input
              className="prompt"
              placeholder="Buscar articulos..."
              type="text"
            />
            <i className="search link icon"></i>
          </div>
        </div>
        <div className="ui large labeled icon red menu inverted menu2 ng-star-inserted">
          <a href="!#" className="item">
            <i className="id card icon"></i>Identificarse
          </a>
        </div>
      </div>
    </HeaderStyled>
  );
};

export default Header;
