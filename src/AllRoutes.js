
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import PostList from './Components/PostList/PostList'
import CreatePost from './Components/CreatePost/CreatePost'
import DetailPost from './Components/DetailPost/DetailPost'

export const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<PostList />}  />
            <Route path='/create' element={<CreatePost />} />
            <Route path='/post/:id' element={<DetailPost />} />
        </Routes>
    </div>
  )
}
