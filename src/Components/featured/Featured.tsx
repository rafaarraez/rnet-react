import React, { useEffect } from "react";
import FeaturedElement from "../featured-element/FeaturedElement";
import data from "../../assets/data/articles.json";
import styled from "styled-components";

const Div = styled.div`
@media screen and (min-width: 769px) {
    display: grid;
    grid-template-columns: 2fr 4fr 2fr;
    grid-template-rows: 1fr 1fr;
    grid-template-areas: "gl gc gr" "gl2 gc gr2";
  }

  Div.gallery-grid Div.centered {
    display: none;
  }

  .gl {
    grid-area: gl;
  }

  .gc {
    grid-area: gc;
  }

  .gr {
    grid-area: gr;
  }

  .gl2 {
    grid-area: gl2;
  }

  .gr2 {
    grid-area: gr2;
  }
}
@media screen and (max-width: 768px) {
    display: none;
  }
  .active {
    display: block;
  }
  .gallery-grid {
    position: relative;
  }

  div.dots {
    text-align: center;
    margin-top: 14px
  }

  .dot {
    cursor:pointer;
    height: 15px;
    width: 15px;
    margin: 0 2px;
    background-color: #bbb;
    border-radius: 50%;
    display: inline-block;
    transition: background-color 0.6s ease;
  }
  .dot.active, .dot:hover {
    background-color: #717171;
  }
}
`;

const Featured = () => {
  const classGrid = ["gl", "gc", "gr", "gl2", "gr2"];

  return (
    <div className="basic segment">
      <Div className="gallery-grid">
        {data
          .filter((d) => d.featured === true)
          .map((d, i) => (
            <FeaturedElement
              classdos={classGrid[i]}
              id={d.id}
              img={d.imageUrl}
              title={d.title}
              key={d.id}
            ></FeaturedElement>
          ))}
      </Div>
      <div className="centered dots">
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>
    </div>
  );
};

export default Featured;
