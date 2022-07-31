import { BrowserRouter, Routes, Route } from "react-router-dom"
import About from "./about/About";
import Home from "./home/Home";
import Post from "./post/Post";
import Posts from "./posts/Posts";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/posts" element={<Posts />} />
      <Route path="/post/:id" element={<Post />} />
    </Routes>  
  )
}

export default Router;