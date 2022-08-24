import "./App.css";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./components/MainPage";
import AllArticles from "./components/AllArticles";
import TopicArticles from "./components/TopicArticles";
import IndividualArticle from "./components/IndividualArticle";
import { useState } from "react";

function App() {
  const [sortBy, setSortBy] = useState("votes");
  const [order, setOrder] = useState("asc");

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <NavBar />
        <Routes>
          <Route path="/" element={<MainPage />} />
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
          <Route path="/articles/:article_id" element={<IndividualArticle />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
