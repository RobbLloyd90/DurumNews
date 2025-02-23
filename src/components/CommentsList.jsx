const CommentsList = ({ comments }) => {
  return (
    <div className="rows">
      {comments.map((comment, index) => (
        <ul key={index}>
          <div className="comment-card">
            <h4>By: {comment.author}</h4>
            <article>
              <h3>{comment.body}</h3>
            </article>
            <h4> Votes: {comment.votes}</h4>
          </div>
        </ul>
      ))}
    </div>
  );
};

export default CommentsList;
