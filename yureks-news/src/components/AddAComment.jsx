import { useState } from "react";
import { postComment, getArticleComments } from "../functions/functions";
import { useParams } from "react-router-dom";
import { getCurrentDate } from "../functions/functions";

const AddAComment = ({ comments, setComments }) => {
  const [comment, setComment] = useState({ username: "", body: "" });
  const [commMsg, setCommMsg] = useState("");

  const { article_id } = useParams();

  const handleChange = (e) => {
    const value = e.target.value;
    setComment({ ...comment, [e.target.name]: value });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    setComment({
      username: event.target[0].value,
      body: event.target[1].value,
      created_at: getCurrentDate(),
      votes: 0,
    });

    postComment(article_id, comment)
      .then((res) => {
        setCommMsg("Comment added successfully!");
      })
      .catch(() => {
        setCommMsg("An error occurred adding your comment!");
      });

    setInterval(setCommMsg(""), 1000);

    getArticleComments(article_id).then((res) => {
      setComments(res);
    });

    event.target[0].value = "";
    event.target[1].value = "";
  };

  return (
    <div className="AddAComment">
      <p>{commMsg}</p>
      <h3>Leave a comment:</h3>
      <form onSubmit={submitHandler}>
        <label>
          Username:
          <input onChange={handleChange} type="text" name="username" required />
        </label>
        <br />
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
