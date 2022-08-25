import { useParams } from "react-router-dom";
import {
  getArticleById,
  addArticleLike,
  getArticles,
} from "../functions/functions";
import { useEffect, useState } from "react";
import Comments from "./Comments";
import AddAComment from "./AddAComment";
import NavBar from "./NavBar";
import NotFound from "./NotFoundPage";

const IndividualArticle = ({ loggedInUser }) => {
  const [article, setArticle] = useState({});
  const [comments, setComments] = useState([]);
  const [articles, setArticles] = useState([]);
  const artIdArr = [];

  const { article_id } = useParams();

  useEffect(() => {
    getArticleById(article_id).then((res) => {
      setArticle(res);
    });
  }, [article_id]);

  useEffect(() => {
    getArticles().then((res) => {
      setArticles(res);
    });
  }, [article]);

  articles.map((art) => {
    artIdArr.push(art.article_id);
    return art;
  });

  if (!artIdArr.includes(parseInt(article_id))) {
    return <NotFound />;
  }

  const VotesAdd = (event) => {
    let likeChange = {};

    if (event.target.value === "like") {
      likeChange = { inc_votes: 1 };
    } else {
      likeChange = { inc_votes: -1 };
    }

    addArticleLike(article_id, likeChange)
      .then((res) => {
        setArticle(res);
      })
      .catch((err) => {
        return <p>{err}</p>;
      });
  };

  return (
    <>
      <NavBar />
      <div className="ArticlePage">
        <div className="Article">
          <h2 className="ArticleTitle">{article.title}</h2>
          <p className="ArticleTopic">Topic: {article.topic}</p>
          <p className="ArticleBody">{article.body}</p>
          <p className="ArticleAuthor">Written by: {article.author}</p>
          <p className="ArticleDate">{article.created_at}</p>
          <div className="ArticleLikes">
            <p className="ArticleVoted">Votes: {article.votes}</p>
            <button
              onClick={(event) => {
                VotesAdd(event);
              }}
              value="like"
            >
              {" "}
              Like{" "}
            </button>
            <button
              onClick={(event) => {
                VotesAdd(event);
              }}
              value="dislike"
            >
              {" "}
              Dislike
            </button>
          </div>
        </div>
      </div>
      <AddAComment
        comments={comments}
        setComments={setComments}
        loggedInUser={loggedInUser}
      />
      <Comments
        article_id={article_id}
        comments={comments}
        setComments={setComments}
        loggedInUser={loggedInUser}
      />
    </>
  );
};

export default IndividualArticle;
