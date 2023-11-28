// CreatePost.jsx
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "./CreatePost.css"

const CreatePost = ({ history }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();


      
    try {
      
      const response = await axios.post('https://jsonplaceholder.typicode.com/posts', {
        title: title,
        body: description,
        userId: Math.floor(Math.random() * 10),
      });

      // console.log(response.data)
      alert('Post created successfully!');
      
      
    navigate("/");
    } catch (error) {
      console.error('Error creating post:', error);
   
    }
  };

  return (
    <div className='create-post'>
      <h2>Create New Post</h2>
     
      <form onSubmit={handleSubmit}>
        <p>
          Title
        </p>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required/>
        <br />
        <p>
          Description: Length should be less than 1000.
        </p>
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} maxLength={1000} />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreatePost;
