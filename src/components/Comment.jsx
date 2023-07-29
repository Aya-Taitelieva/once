import React from "react";
import { Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Avatar, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import CardActions from "@mui/material/CardActions";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { useAuthContext } from "../contexts/AuthContext";
import { useCommentContext } from "../contexts/CommentContext";

const Comment = ({ item, userEmail, setShowComments }) => {
  const navigate = useNavigate();
  const { user, getUserByEmail, isAdmin } = useAuthContext();
  const commentUser = getUserByEmail(userEmail)
  const { deleteComment } = useCommentContext();
  function handleDelete() {
    deleteComment(item.id);
    setShowComments(false);
  }
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
              {commentUser.displayName.length < 12
                ? commentUser.displayName
                : commentUser.displayName.slice(0, 12) + "..."}
            </Typography>
            <Avatar
              src={commentUser.photoURL}
              sx={{
                width: "3.5rem",
                height: "3.5rem",
                cursor: "pointer",
                marginBottom: "1rem",
              }}
              onClick={() => navigate(`/profile/${commentUser.email}`)}
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

          {user &&
            (isAdmin(user) || user.email === commentUser.email) && (
              <CardActions
                sx={{
                  display: "flex",
                  justifyContent: "end",
                  marginLeft: "1.5rem",
                }}
              >
                <IconButton onClick={handleDelete}>
                  <DeleteOutlineIcon />
                </IconButton>
              </CardActions>
            )}
        </CardContent>
      </Card>
    </Grid>
  );
};

export default Comment;
