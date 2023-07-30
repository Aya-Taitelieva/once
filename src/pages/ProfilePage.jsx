import React, { useEffect, useState } from "react";
import { Box, Button, Grid, Paper, Typography, Avatar } from "@mui/material";
import DeleteModal from "../components/DeleteModal";
import { useAuthContext } from "../contexts/AuthContext";
import { useCommentContext } from "../contexts/CommentContext";
import Comment from "../components/Comment";

const ProfilePage = () => {
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const { user } = useAuthContext();
  const { comments, getComments } = useCommentContext();

  useEffect(() => {
    getComments("user.email", user.email);
  }, []);

  const handleDeleteModal = () => {
    setOpenDeleteModal(true);
  };

  return (
    <Box sx={{ margin: "2rem auto", maxWidth: "1200px", padding: "1rem" }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <Paper
            sx={{
              padding: "2rem",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar
              src={user.photoURL}
              alt="Profile"
              sx={{ width: 200, height: 200, mb: 2 }}
            />
            <Typography variant="h6" gutterBottom>
              {user.displayName}
            </Typography>
            <Button
              variant="contained"
              color="error"
              onClick={handleDeleteModal}
              sx={{ mt: 2 }}
            >
              Delete User
            </Button>
          </Paper>
        </Grid>

        <Grid item xs={12} md={8}>
          <Typography variant="h2" fontSize={"3rem"} sx={{ padding: "1.5rem" }}>
            Your comments
          </Typography>
          <Paper sx={{ padding: "1rem" }}>
            <Grid container spacing={2}>
              {comments.length > 0 ? (
                comments.map((item) => (
                  <Comment
                    item={item}
                    key={item.id}
                    podId={item.podId}
                    commentUser={item.user}
                    inProfile={true}
                  />
                ))
              ) : (
                <Typography
                  variant="body1"
                  fontSize="1.5rem"
                  justifyContent={"center"}
                >
                  You never left any comments
                </Typography>
              )}
            </Grid>
          </Paper>
        </Grid>
      </Grid>
      <DeleteModal open={openDeleteModal} setOpen={setOpenDeleteModal} />
    </Box>
  );
};

export default ProfilePage;
