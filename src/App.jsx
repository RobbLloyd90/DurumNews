import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "../src/index.css";
import Home from "./components/Home";
import Header from "./components/Header";
import Articles from "./components/Articles";
import Article from "./components/Article";
import Footer from "./components/Footer";
import useFetchData from "./customHooks/useFetchData";

function App() {
  const {
    data: articles,
    error,
    isPending,
  } = useFetchData("https://durum-herald.onrender.com/api/articles");

  return (
    <>
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}

      <Header />
      <Routes>
        <Route path="/" element={<Home data={articles} />} />
        <Route path="/articles" element={<Articles data={articles} />} />
        <Route path="/article/:id" element={<Article />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
