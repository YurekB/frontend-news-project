import "./App.css";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./components/MainPage";
import AllArticles from "./components/AllArticles";
import TopicArticles from "./components/TopicArticles";
import IndividualArticle from "./components/IndividualArticle";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <NavBar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/articles" element={<AllArticles />} />
          <Route path="/articles/:article_topic" element={<TopicArticles />} />
          <Route path="/:article_id" element={<IndividualArticle />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
