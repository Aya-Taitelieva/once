import React, { createContext, useContext, useEffect, useState } from "react";
import { API_COMMENTS } from "../utils/consts";
import axios from "axios";
const commentContext = createContext();

export function useCommentContext() {
  return useContext(commentContext);
}

const CommentContext = ({ children }) => {
  const [comments, setComments] = useState([]);

  async function getComments(key, value) {
    const { data } = await axios.get(API_COMMENTS, {
      params: {
        [key]: value,
      },
    });
    setComments(data);
  }
  async function deleteComment(id, podId) {
    await axios.delete(`${API_COMMENTS}/${id}`);
    getComments("podId", podId);
  }
  async function addComment(obj, podId) {
    await axios.post(API_COMMENTS, obj);
    getComments("podId", podId);
  }

  async function likeComment(commentId, userEmail, podId) {
    try {
      const commentResponse = await axios.get(`${API_COMMENTS}/${commentId}`);
      const comment = commentResponse.data;
  
      if (!comment.likes.includes(userEmail)) {
        const updatedLikes = [...comment.likes, userEmail];
        await axios.patch(`${API_COMMENTS}/${commentId}`, { likes: updatedLikes });
        filterComments("podId", podId)
        console.log("Comment liked successfully.");
      } else {
        const updatedLikes = comment.likes.filter((email) => email !== userEmail);
        await axios.patch(`${API_COMMENTS}/${commentId}`, { likes: updatedLikes });
        console.log("Comment unliked successfully.");
        filterComments("podId", podId)
      }
    } catch (error) {
      console.error("Error liking/unliking comment:", error);
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
