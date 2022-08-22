import { getArticles } from "../functions/functions";
import { useEffect, useState } from "react";

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
      <div className="AllArticles">
        <ul>
          {articles.map((article) => {
            return <li key={article.title}>{article.title}</li>;
          })}
        </ul>
      </div>
    </>
  );
};

export default AllArticles;
