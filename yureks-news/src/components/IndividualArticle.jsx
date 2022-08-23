import { useParams } from "react-router-dom";
import { getArticleById } from "../functions/functions";
import { useEffect, useState } from "react";
import Comments from "./Comments";

const IndividualArticle = () => {
  const [article, setArticle] = useState({});

  const { article_id } = useParams();

  useEffect(() => {
    getArticleById(article_id).then((res) => {
      setArticle(res);
    });
  }, []);

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
      <Comments article_id={article_id} />
    </div>
  );
};

export default IndividualArticle;
