import { getArticles } from "../functions/functions";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SortByDropdown from "./SortByDropdown";
import OrderByDropdown from "./OrderByDropdown";
import NavBar from "./NavBar";

const AllArticles = ({ sortBy, setSortBy, order, setOrder }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getArticles({ sort_by: sortBy, order }).then((res) => {
      setArticles(res);
    });
  }, [sortBy, order]);

  return (
    <>
      <NavBar />
      <div className="ArticlesPage">
        <h2>All Articles:</h2>
        <div className="Filters">
          Sort by: <SortByDropdown setSortBy={setSortBy} />
          Order: <OrderByDropdown setOrder={setOrder} />
        </div>
        <div className="PageList">
          <ul className="Articles">
            {articles.map((article) => {
              return (
                <Link to={`/articles/${article.article_id}`}>
                  <li key={article.article_id}>{article.title}</li>
                </Link>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default AllArticles;
