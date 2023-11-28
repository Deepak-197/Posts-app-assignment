import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { IoCreateOutline } from "react-icons/io5";
import "./PostList.css"

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate()

  const fetchPosts = async () => {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts?_start=${
        (currentPage - 1) * 10
      }&_limit=10`
    );
    setPosts(response.data);
  };

  useEffect(() => {
    fetchPosts();
  }, [currentPage]);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const handleCreateClick = () => {
          navigate("/create")
  }

  return (
    <div>
      <h2>Post List</h2>
      <div className="post-list-create-button" onClick={handleCreateClick}>
      <button className="desktop">Create Post</button>
      <button className="mobile-friendly"><IoCreateOutline className="icon" /></button>
      </div>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link to={`/post/${post.id}`}>
              <section>
                <h3>Title: {post.title}</h3>
                <p>Description: {post.body}</p>
              </section>
            </Link>
          </li>
        ))}
      </ul>
      <div className="prev-next-button">
        <button onClick={handlePrevPage}> Prev </button>
        <button onClick={handleNextPage}> Next </button>
      </div>
    </div>
  );
};

export default PostList;
