import { Link } from "react-router-dom";

const ArticleList = ({ articles }) => {
  const listOfArticles = articles.map((article, index) => (
    <ul key={index}>
      <Link to={`/article/${article.article_id}`}>
        <div className="article-card">
          <img
            key={index}
            className="article-card-img"
            src={article.article_img_url}
            alt={article.title}
          />
          <div className="article-title-card">
            <h3 className="container-text">{article.title}</h3>
          </div>
        </div>
      </Link>
    </ul>
  ));
  return <div className="rows">{listOfArticles}</div>;
};

export default ArticleList;
