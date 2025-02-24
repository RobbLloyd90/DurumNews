import { Link } from "react-router-dom";
import ArticleList from "./ArticleList";
import { useEffect, useState } from "react";

const Articles = ({ data }) => {
  const [sortOrder, setSortOrder] = useState("");
  const [sortedData, setSortedData] = useState([]);

  useEffect(() => {
    const sortedArticles = () => {
      const sortedData = [...data];

      if (sortOrder === "a-z") {
        return sortedData.toSorted((a, b) => a.title.localeCompare(b.title));
      }
      if (sortOrder === "z-a") {
        return sortedData.toSorted((a, b) => b.title.localeCompare(a.title));
      }
      if (sortOrder === "popular") {
        return sortedData.toSorted(
          (a, b) =>
            parseInt(b.comment_count) +
            b.votes -
            parseInt(a.comment_count) +
            a.votes
        );
      } else {
        return sortedData.toSorted((a, b) =>
          b.created_at.localeCompare(a.created_at)
        );
      }
    };
    setSortedData(sortedArticles());
  }, [sortOrder, data]);

  const handleSortAsc = () => {
    setSortOrder("a-z");
  };
  const handleSortDesc = () => {
    setSortOrder("z-a");
  };
  const handleMostRecent = () => {
    setSortOrder("");
  };
  const handleMostPopular = () => {
    setSortOrder("popular");
  };

  return (
    <>
      <section className="background-container">
        <h3>Sort-by</h3>
        <button onClick={handleSortAsc}>A-z</button>
        <button onClick={handleSortDesc}>Z-a</button>
        <button onClick={handleMostRecent}>Most Recent</button>
        <button onClick={handleMostPopular}>Most Popular</button>
        <ArticleList articles={sortedData} />
      </section>
    </>
  );
};

export default Articles;
