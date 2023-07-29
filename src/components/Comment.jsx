import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Avatar, IconButton } from "@mui/material";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import CardActions from "@mui/material/CardActions";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { useAuthContext } from "../contexts/AuthContext";
import { useCommentContext } from "../contexts/CommentContext";

const Comment = ({ item, commentUser, podId }) => {
  const { user, isAdmin } = useAuthContext();
  const { deleteComment, likeComment } = useCommentContext();
  const [likeCount, setLikeCount] = useState(item.likes.length);
  const [isActive, setIsActive] = useState(false);
  function handleDelete() {
    deleteComment(item.id, podId);
  }
  function handleLike() {
    if (!user) {
      return;
    }
    likeComment(item.id, user.email, podId);
    console.log(item.likes);
  }
  useEffect(() => {
    if (user) {
      if (item.likes.includes(user.email)) {
        setIsActive(true);
        setLikeCount(item.likes.length);
      } else {
        setIsActive(false);
        setLikeCount(item.likes.length);
      }
    } else {
      setIsActive(false)
    }
  }, [likeCount, item]);

  return (
    <Grid item xs={12} md={12} lg={12}>
      <Card sx={{ margin: "0 auto" }}>
        <CardContent>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography
              variant="h5"
              component="div"
              sx={{ cursor: "pointer", marginBottom: "1rem" }}
            >
              {commentUser.displayName}
            </Typography>
            <Avatar
              src={commentUser.photoURL}
              sx={{
                width: "3.5rem",
                height: "3.5rem",
                cursor: "pointer",
                marginBottom: "1rem",
              }}
            />
          </div>
          <Typography
            variant="body2"
            color="text.secondary"
            component="div"
            sx={{ display: "flex", flexWrap: "wrap", padding: "0.4rem" }}
          >
            {item.comment}
          </Typography>

          <CardActions
            sx={{
              display: "flex",
              justifyContent: "end",
              marginLeft: "1.5rem",
            }}
          >
            {user && (isAdmin(user) || user.email === commentUser.email) && (
              <IconButton onClick={handleDelete}>
                <DeleteOutlineIcon />
              </IconButton>
            )}
            <div>
              <IconButton
                color={isActive ? "primary" : "default"}
                onClick={handleLike}
              >
                <ThumbUpIcon />
              </IconButton>
              <Typography variant="body1" component="span">
                {likeCount}
              </Typography>
            </div>
          </CardActions>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default Comment;
