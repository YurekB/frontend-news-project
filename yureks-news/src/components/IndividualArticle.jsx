import { useParams } from "react-router-dom";
import { getArticleById, getArticleComments } from "../functions/functions";
import { useEffect, useState } from "react";

const IndividualArticle = () => {
  const [article, setArticle] = useState({});
  const [comments, setComments] = useState([]);

  const { article_id } = useParams();

  useEffect(() => {
    getArticleById(article_id).then((res) => {
      setArticle(res);
    });
    getArticleComments(article_id).then((res) => {
      console.log(res);
      setComments(res);
    });
  }, []);

  console.log(comments);

  return (
    <div className="ArticlePage">
      <div className="Article">
        <h2 className="ArticleTitle">{article.title}</h2>
        <p className="ArticleTopic">Topic: {article.topic}</p>
        <p className="ArticleBody">{article.body}</p>
        <p className="ArticleAuthor">Written by: {article.author}</p>
        <p className="ArticleDate">{article.created_at}</p>
        <p className="ArticleVoted">{article.votes}</p>
        <button>Like</button>
        <button>Dislike</button>
      </div>
      <div className="Comments">
        <h2 className="Comments">Comments:</h2>
        <ul>
          {comments.map((comment) => {
            return (
              <div className="Comment">
                <li key={comment.comment_id}>
                  {comment.body}
                  Written by: {comment.author}
                  Votes: {comment.votes}
                </li>
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default IndividualArticle;
