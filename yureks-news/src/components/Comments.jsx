import { useEffect, useState } from "react";
import {
  getArticleComments,
  getCommentById,
  deleteCommentById,
} from "../functions/functions";

const Comments = ({ article_id, comments, setComments, loggedInUser }) => {
  const [deleted, setDeleted] = useState("");

  useEffect(() => {
    getArticleComments(article_id).then((res) => {
      setComments(res);
    });
  }, [article_id, comments, setComments]);

  const deleteComment = (event) => {
    getCommentById(event.target.value).then((res) => {
      if (res.author === loggedInUser) {
        deleteCommentById(event.target.value).then((res) => {
          setDeleted(res);
        });
      } else {
        setDeleted("Cant delete comments of other users!");
      }
    });
  };

  const ButtonFunc = ({ comm }) => {
    if (loggedInUser === comm.author) {
      return (
        <button value={comm.comment_id} onClick={deleteComment}>
          Delete
        </button>
      );
    } else {
      return "";
    }
  };

  return (
    <div className="Comments">
      <h2>Comments:</h2>
      <p>{deleted}</p>
      <div className="CommentsList">
        <ul>
          {comments.map((comm) => {
            return (
              <div className="IndComment">
                <li key={comm.comment_id}>
                  <div className="CommentUser">User: {comm.author}</div>
                  <div className="CommentBody"> {comm.body}</div>

                  <div className="CommentCreated"> {comm.created_at}</div>
                  <div className="CommentVotes">Votes: {comm.votes}</div>
                </li>
                <ButtonFunc comm={comm} />
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Comments;
