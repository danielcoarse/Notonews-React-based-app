import React from "react";

const Card = (props) => {
  const { article } = props;

  return (
    <article className="card mb-3 border-0">
      <div className="card-header bg-white border-0">
        <a href={article.url} className="card-title">
          <h5>{article.title}</h5>
        </a>
        <div className="card-meta">
          <small className="text-muted">{article.publishedAt}</small>
        </div>
      </div>
      <a href={article.url} className="card-img">
        <img
          src={article.urlToImage}
          className="card-img-top rounded-0"
          alt="alt-text"
        />
      </a>
      <div className="card-body">
        <p className="card-text">{article.description}</p>
      </div>
    </article>
  );
};

export default Card;
