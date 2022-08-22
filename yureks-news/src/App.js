import "./App.css";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./components/MainPage";
import AllArticles from "./components/AllArticles";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <NavBar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/articles" element={<AllArticles />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
