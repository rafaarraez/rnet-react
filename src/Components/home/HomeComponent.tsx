import React from "react";
import { Link } from "react-router-dom";
import data from "../../assets/data/articles.json";

const HomeComponent = () => {
  return (
    <div className="ui segment container">
      <h1>Lo ultimo</h1>
      <div className="ui four column doubling stackable grid container">
        {data.map((article) => (
          <div className="column" key={article.id}>
            <Link to={'/article/' + article.id} className="ui centered card">
              <div className="ui fluid image">
                <img src={article.imageUrl} alt={article.title} />
              </div>
              <div className="content">
                <div className="header">{article.title}</div>
                <div className="meta">
                  <Link to={'/category/' + article.category}> {article.category}</Link>
                </div>
                <div className="description">
                  {article.story.substr(0, 100)}...
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeComponent;
