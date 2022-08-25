import "./App.css";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import AllArticles from "./components/AllArticles";
import TopicArticles from "./components/TopicArticles";
import IndividualArticle from "./components/IndividualArticle";
import { useState } from "react";

function App() {
  const [sortBy, setSortBy] = useState("votes");
  const [order, setOrder] = useState("asc");
  const [loggedInUser, setLoggedInUser] = useState("");

  return (
    <BrowserRouter>
      <div className="App">
        <Header loggedInUser={loggedInUser} />
        <Routes>
          <Route
            path="/"
            element={<LoginPage setLoggedInUser={setLoggedInUser} />}
          />
          <Route
            path="/articles"
            element={
              <AllArticles
                sortBy={sortBy}
                setSortBy={setSortBy}
                order={order}
                setOrder={setOrder}
              />
            }
          />
          <Route
            path="/topics/:article_topic"
            element={
              <TopicArticles
                sortBy={sortBy}
                setSortBy={setSortBy}
                order={order}
                setOrder={setOrder}
              />
            }
          />
          <Route
            path="/articles/:article_id"
            element={<IndividualArticle loggedInUser={loggedInUser} />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
