import { useEffect, useState } from "react";
import { SpinnerIcon, HeartIcon } from "../assets/temp/icons";
import { useParams } from "react-router-dom";
import axios from "axios";

const SingleArticle = ({ article }) => {
  const [totalVotes, setVotes] = useState(article.votes || 0);
  const [liked, setLiked] = useState(false);

  const { id } = useParams();
  const url = "https://durum-herald.onrender.com/api/articles/" + id;

  const handleLikeToggle = (e) => {
    e.preventDefault();
    const newLikedState = !liked;
    setLiked(newLikedState);

    const newVotes = newLikedState ? totalVotes + 1 : totalVotes - 1;
    setVotes(newVotes);
    const votes = { votes: newVotes };

    axios
      .post(url, votes)
      .then((response) => {})
      .catch(console.log);
  };

  return (
    <div className="article-container">
      <h3>Topic: {article.topic}</h3>
      <h1 className="container-text">{article.title}</h1>
      <div className="article-body-card">
        <img
          className="article-img"
          src={article.article_img_url}
          alt={article.title}
        ></img>
        <article>
          <h2 className="article-body-card">{article.body}</h2>
          <h3>By: {article.author}</h3>
          <h3>Likes {article.votes + totalVotes}</h3>
          <h4>{article.created_at}</h4>

          <button
            onClick={handleLikeToggle}
            className={`like-button ${liked ? "liked" : ""}`}
          >
            {liked ? "Liked" : "♡ Like"}
          </button>
        </article>
      </div>
    </div>
  );
};

export default SingleArticle;
