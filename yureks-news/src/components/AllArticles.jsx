import { getArticles } from "../functions/functions";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllArticles = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getArticles().then((res) => {
      setArticles(res);
    });
  }, []);

  return (
    <>
      <h2>All Articles:</h2>
      <div className="PageList">
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
    </>
  );
};

export default AllArticles;
