import { useParams } from "react-router-dom";
import { getArticleByTopic } from "../functions/functions";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const TopicArticles = () => {
  const [articles, setArticles] = useState([]);

  const { article_topic } = useParams();

  useEffect(() => {
    getArticleByTopic(article_topic).then((res) => {
      setArticles(res);
    });
  }, [article_topic]);

  return (
    <div className="PageList">
      <h2>
        {article_topic.charAt(0).toUpperCase() + article_topic.slice(1)}{" "}
        Articles:
      </h2>
      <ul>
        {articles.map((article) => {
          return (
            <Link to={`/${article.article_id}`}>
              <li key={article.title}>{article.title}</li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default TopicArticles;
