import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Blog from "./Pages/Blog";
import Footer from "./Components/Footer/Footer";
import BlogFeedPage from "./Pages/BlogFeedPage";


import Register from "./Pages/Register/Register";
import Login from "./Pages/Login/Login";
import PostPage from "./Components/Post/PostPage";
import FullPost from "./Pages/FullPost";
import  AddPost  from "./Pages/AddPost/AddPost";

function App() {
  const [posts] = React.useState([]);

 

  return (
    <Router>
      <Header />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/post" element={<PostPage />} />
        <Route path="/post/:id" element={<FullPost />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog-feed" element={<BlogFeedPage />} />
        <Route path="/blog-feed" element={<BlogFeedPage posts={posts} />} />
        <Route path="/add-post" element={<AddPost/>} />
        
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
