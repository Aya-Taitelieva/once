import React, { useEffect, useState } from "react";
import { CircularProgress, Container, Grid, Typography } from "@mui/material";
import { useCommentContext } from "../contexts/CommentContext";
import Comment from "./Comment";
const CommentList = ({ post, showComments, setShowComments }) => {
  const { comments, filterComments } = useCommentContext();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        filterComments("postId", post.id);
        setTimeout(() => {
          setLoading(false);
        }, 800);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchData();
  }, [post, showComments]);
  return (
    <div>
      <Grid sx={{ my: 3, gap: "2rem" }} container spacing={2}>
        {loading ? (
          <Container
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "30vh",
            }}
          >
            <CircularProgress size={80} />
          </Container>
        ) : error ? (
          <Typography variant="body1" color="error" fontSize={"40px"}>
            There is a problem with the server. Please fix it.
          </Typography>
        ) : comments.length > 0 ? (
          comments.map((item) => {
            return (
              <Comment
                item={item}
                key={item.id}
                userEmail={item.email}
                setShowComments={setShowComments}
              />
            );
          })
        ) : (
          <Typography
            variant="body1"
            fontSize={"20px"}
            sx={{ marginLeft: "5%" }}
          >
            No comments here. Be the first to leave a comment!
          </Typography>
        )}
      </Grid>
    </div>
  );
};

export default CommentList;
