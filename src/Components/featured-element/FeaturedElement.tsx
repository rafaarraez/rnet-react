import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Dimmer, Image } from "semantic-ui-react";
import styled from "styled-components";

const Div = styled.div`
  position: relative;
  height: 100%;
}

.image-with-text .article-img, .image-with-text a.article-img img {
  height: 100%;
}

.image-content {
  position: absolute; /* Position the background text */
  bottom: 0; /* At the bottom. Use top:0 to append it to the top */
  background: rgba(0, 0, 0, 0.5); /* Black background with 0.5 opacity */
  color: #f1f1f1; /* Grey text */
  width: 100%; /* Full width */
  padding: 10px; /* Some padding */
  font-size: 1.3em;
}

.dimmer-text {
  font-size: 1.4em;
}

@media screen and (max-width: 768px) {
  {}
  .image-with-text .image img {
    min-height: 220px;
    max-height: 220px;
  }
}
`;

interface Articles {
  classdos: string;
  id: number;
  title: string;
  img: string;
}
const FeaturedElement = ({ classdos, id, title, img }: Articles) => {
  const [handleDimmer, sethandleDimmer] = useState({ active: false });

  const show = () => sethandleDimmer({ active: true });
  const hidden = () => sethandleDimmer({ active: false });

  const { active } = handleDimmer;
  const content = (
    <div>
      <a href={"/" + id}>Leer más</a>
    </div>
  );

  return (
    <div className={classdos}>
      <Div className="image-with-text">
        <Dimmer.Dimmable
          dimmed={active}
          dimmer={{ active, content }}
          onMouseEnter={show}
          onMouseLeave={hidden}
        />
        <Link to={'/article/' + id} className="article-img">
          <Image src={img} style={{ height: "100%" }} fluid />
        </Link>

        <a href="!#">
          <div className="image-content">
            <p>{title}</p>
          </div>
        </a>
      </Div>
    </div>

    // <div className={classdos}>
    //   <Div className="image-with-text" onMouseEnter={show} onMouseLeave={hidden}>
    //
    //     <Dimmer isClickable="false" dimmed={active}>
    //       <a
    //         className="dimmer-text"
    //         >Leer mas</a>
    //     </Dimmer>
    //     <a>
    //       <div className="image-content">
    //         <p>gfhhgfhghf</p>
    //       </div>
    //     </a>
    //   </Div>
    // </div>
  );
};

export default FeaturedElement;
