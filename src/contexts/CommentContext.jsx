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
  async function likeComment(commentId, userEmail) {
    try {
      const commentResponse = await axios.get(`${API_COMMENTS}/${commentId}`);
      const comment = commentResponse.data;
  
      const userIndex = comment.likes.indexOf(userEmail);
  
      if (userIndex === -1) {
        const updatedLikes = [...comment.likes, userEmail];
        await axios.put(`${API_COMMENTS}/${commentId}`, { likes: updatedLikes });
        console.log("Comment liked successfully.");
      } else {
        const updatedLikes = comment.likes.filter((email) => email !== userEmail);
        await axios.put(`${API_COMMENTS}/${commentId}`, { likes: updatedLikes });
        console.log("Comment unliked successfully.");
      }
    } catch (error) {
      console.error("Error liking/unliking comment:", error);
      // Handle errors as needed.
    }
  }
  const value = {
    comments,
    getComments,
    addComment,
    deleteComment,
    filterComments,
    likeComment
  };

  return (
    <commentContext.Provider value={value}>{children}</commentContext.Provider>
  );
};

export default CommentContext;
