import { getArticles } from "../functions/functions";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SortByDropdown from "./SortByDropdown";

const AllArticles = ({ sortBy, setSortBy }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getArticles({ sort_by: sortBy }).then((res) => {
      setArticles(res);
    });
  }, [sortBy]);

  return (
    <>
      <SortByDropdown setSortBy={setSortBy} />
      <h2>All Articles:</h2>
      <div className="PageList">
        <ul>
          {articles.map((article) => {
            return (
              <Link to={`/articles/${article.article_id}`}>
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
