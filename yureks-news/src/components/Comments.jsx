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
      <ul>
        {comments.map((comm) => {
          return <li key={comm.comment_id}>{comm.body}</li>;
        })}
      </ul>
    </div>
  );
};

export default Comments;
