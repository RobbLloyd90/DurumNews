import { useEffect, useState } from "react";

const useSortby = (data, sortByStr) => {
  console.log(sortByStr);
  const [sortOrder, setSortOrder] = useState("");
  const [sortedData, setSortedData] = useState([]);

  useEffect(() => {
    const sortedArticles = () => {
      const sortedData = [...data];

      console.log(sortedData);

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

  console.log(sortByStr);

  setSortOrder(sortByStr);
};

export default useSortby;
