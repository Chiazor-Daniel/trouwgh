import React, { createContext, useContext, useState } from 'react';
const PostContext = createContext();

export function usePost() {
  return useContext(PostContext);
}

export function PostProvider({ children }) {
  const [post, setPost] = useState([]);
    function handlePost(p){
        setPost([...post, p])
    }
  return (
    <PostContext.Provider value={{ post, handlePost }}>
      {children}
    </PostContext.Provider>
  );
}
