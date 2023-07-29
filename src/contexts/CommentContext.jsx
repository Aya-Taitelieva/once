import React, { createContext, useContext, useEffect, useState } from "react";
import { API_COMMENTS } from "../utils/consts";
import axios from "axios";
const commentContext = createContext();

export function useCommentContext() {
  return useContext(commentContext);
}

const CommentContext = ({ children }) => {
  const [comments, setComments] = useState([]);

  async function getComments() {
    const { data } = await axios.get(API_COMMENTS);
    setComments(data);
  }
  async function deleteComment(id) {
    await axios.delete(`${API_COMMENTS}/${id}`);
    getComments();
  }
  async function addComment(obj) {
    await axios.post(API_COMMENTS, obj);
    getComments();
  }
  async function filterComments(key, value) {
    const { data } = await axios.get(API_COMMENTS, {
      params: {
        [key]: value,
      },
    });
    setComments(data);
  }
  const value = {
    comments,
    getComments,
    addComment,
    deleteComment,
    filterComments
  };

  return (
    <commentContext.Provider value={value}>{children}</commentContext.Provider>
  );
};

export default CommentContext;
