import { useParams } from "react-router-dom";
import { getArticleById, addArticleLike } from "../functions/functions";
import { useEffect, useState } from "react";
// import Comments from "./Comments";

const IndividualArticle = () => {
  const [article, setArticle] = useState({});
  const { article_id } = useParams();

  useEffect(() => {
    getArticleById(article_id).then((res) => {
      setArticle(res);
    });
  }, [article_id]);

  const VotesAdd = () => {
    const addLike = { inc_votes: 1 };
    addArticleLike(article_id, addLike)
      .then((res) => {
        setArticle(res);
      })
      .catch((err) => {
        return <p>{err}</p>;
      });
  };

  const VotesRemove = () => {
    const RemoveLike = { inc_votes: -1 };
    addArticleLike(article_id, RemoveLike)
      .then((res) => {
        setArticle(res);
      })
      .catch((err) => {
        return <p>{err}</p>;
      });
  };

  return (
    <div className="ArticlePage">
      <div className="Article">
        <h2 className="ArticleTitle">{article.title}</h2>
        <p className="ArticleTopic">Topic: {article.topic}</p>
        <p className="ArticleBody">{article.body}</p>
        <p className="ArticleAuthor">Written by: {article.author}</p>
        <p className="ArticleDate">{article.created_at}</p>
        <p className="ArticleVoted">{article.votes}</p>
        <button onClick={VotesAdd}>Like</button>
        <button onClick={VotesRemove}>Dislike</button>
      </div>
      {/* <Comments article_id={article_id} /> */}
    </div>
  );
};

export default IndividualArticle;
