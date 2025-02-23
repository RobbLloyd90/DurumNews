import React, { useEffect, useState } from "react";

const LikeButton = () => {
  // State to keep track of the like status
  const [liked, setLiked] = useState(false);

  useEffect(() => {}, [liked]);

  // Toggle like status
  const toggleLike = () => {
    setLiked(!liked);
  };

  return (
    <button
      onClick={toggleLike}
      className={`like-button ${liked ? "liked" : ""}`}
    >
      {liked ? "Liked" : "♡ Like"}
    </button>
  );
};

export default LikeButton;
