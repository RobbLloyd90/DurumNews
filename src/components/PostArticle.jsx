import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";

const PostArticle = () => {
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");

  const { id } = useParams();
  const url = "https://durum-herald.onrender.com/api/articles/12/comments";

  const handleSubmit = (e) => {
    e.preventDefault();
    const timeAtSubmit = new Date();
    const created_at = timeAtSubmit.toISOString();
    const article_id = id;
    const votes = 0;
    const submitInfo = { author, body, votes };

    console.log(submitInfo);

    axios
      .post(url, { submitInfo })
      .then((response) => {
        console.log(response);
      })
      .catch(console.error);
  };

  return (
    <section>
      <div className="background-container">
        <h3>Have your say</h3>
        <div className="post-container">
          <form onSubmit={handleSubmit}>
            <label>Body</label>
            <textarea
              required
              value={body}
              onChange={(e) => setBody(e.target.value)}
            />
            <label>Author:</label>
            <input
              required
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
            <button className="button">Send</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default PostArticle;
