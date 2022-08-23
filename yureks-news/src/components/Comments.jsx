import { useEffect, useState } from "react";
import { getArticleComments } from "../functions/functions";

const Comments = ({ article_id }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getArticleComments(article_id).then((res) => {
      setComments(res);
    });
  }, []);

  return (
    <div className="Comments">
      <h2>Comments:</h2>
      <div className="CommentsList">
        <ul>
          {comments.map((comm) => {
            return (
              <li key={comm.comment_id}>
                User: {comm.author}
                <br />
                {comm.body}
                <br />
                {comm.created_at}
                <br />
                Votes: {comm.votes}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Comments;
