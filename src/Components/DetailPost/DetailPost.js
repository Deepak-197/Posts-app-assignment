import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import "./DetailPost.css"

const DetailPost = ({ match }) => {
  const [post, setPost] = useState([]);
  const {id} = useParams()

  console.log(id)
  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
        setPost(response.data);
      } catch (error) {
        console.log('Error fetching post details:', error);
        
      }
    };

    fetchPost();
  }, [id]);


   console.log(post)
  return (
    <div>
    <h2>Detail Post</h2>
      {post ? (
        <div className='detail-post'>
          <h4>Title: {post.title}</h4>
          <p>Description: {post.body}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default DetailPost;