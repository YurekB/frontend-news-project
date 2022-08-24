import { getArticles } from "../functions/functions";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SortByDropdown from "./SortByDropdown";
import OrderByDropdown from "./OrderByDropdown";

const AllArticles = ({ sortBy, setSortBy, order, setOrder }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getArticles({ sort_by: sortBy, order }).then((res) => {
      setArticles(res);
    });
  }, [sortBy, order]);

  return (
    <>
      <h2>All Articles:</h2>
      Sort by: <SortByDropdown setSortBy={setSortBy} />
      Order: <OrderByDropdown setOrder={setOrder} />
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
