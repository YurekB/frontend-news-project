import { getTopics } from "../functions/functions";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    getTopics().then((res) => {
      setTopics(res);
    });
  }, []);

  return (
    <div className="NavList">
      <ul>
        <Link to="/articles">
          <li>All Articles</li>
        </Link>
        {topics.map((topic) => {
          return (
            <li key={topic.slug}>
              {topic.slug.charAt(0).toUpperCase() + topic.slug.slice(1)}
            </li>
          );
        })}
        <li>Other</li>
      </ul>
    </div>
  );
};

export default NavBar;
