import { useParams } from "react-router-dom";
import { getArticleByTopic } from "../functions/functions";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SortByDropdown from "./SortByDropdown";
import OrderByDropdown from "./OrderByDropdown";
import NavBar from "./NavBar";

const TopicArticles = ({ sortBy, setSortBy, order, setOrder }) => {
  const [articles, setArticles] = useState([]);

  const { article_topic } = useParams();

  useEffect(() => {
    getArticleByTopic(article_topic, { sort_by: sortBy, order }).then((res) => {
      setArticles(res);
    });
  }, [article_topic, sortBy, order]);

  return (
    <>
      <NavBar />
      <div className="ArticlesPage">
        <h2>
          {article_topic.charAt(0).toUpperCase() + article_topic.slice(1)}{" "}
          Articles:
        </h2>
        <div className="Filters">
          Sort by: <SortByDropdown setSortBy={setSortBy} />
          Order: <OrderByDropdown setOrder={setOrder} />
        </div>
        <ul className="Articles">
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

export default TopicArticles;
