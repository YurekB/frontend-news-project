import { useState } from "react";
import { postComment, getArticleComments } from "../functions/functions";
import { useParams } from "react-router-dom";
import { getCurrentDate } from "../functions/functions";

const AddAComment = ({ comments, setComments, loggedInUser }) => {
  const [comment, setComment] = useState({ username: loggedInUser, body: "" });
  const [commMsg, setCommMsg] = useState("");

  const { article_id } = useParams();

  const handleChange = (e) => {
    const value = e.target.value;
    setComment({ ...comment, [e.target.name]: value });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    setComment({
      body: event.target[0].value,
      created_at: getCurrentDate(),
      votes: 0,
    });

    postComment(article_id, comment)
      .then((res) => {
        setCommMsg("Comment added successfully!");
        setComment({ username: loggedInUser, body: "" });
      })
      .catch(() => {
        setCommMsg("An error occurred adding your comment!");
        setComment({ username: loggedInUser, body: "" });
      });

    setInterval(setCommMsg(""), 1000);

    getArticleComments(article_id).then((res) => {
      setComments(res);
    });

    event.target[0].value = "";
  };

  return (
    <div className="AddAComment">
      <p>{commMsg}</p>
      <h3>Leave a comment:</h3>
      <form onSubmit={submitHandler}>
        <label>
          Comment:
          <input onChange={handleChange} type="text" name="body" required />
        </label>
        <br />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

export default AddAComment;
