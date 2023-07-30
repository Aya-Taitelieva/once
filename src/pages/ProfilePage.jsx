import React, { useEffect, useState } from "react";
import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import DeleteModal from "../components/DeleteModal";
import { useAuthContext } from "../contexts/AuthContext";
import { useCommentContext } from "../contexts/CommentContext";
import Comment from "../components/Comment";
const ProfilePage = () => {
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const { user } = useAuthContext();
  const {comments, getComments} = useCommentContext()
  useEffect(() => {
    getComments("user.email", user.email);
  }, []);
  const handleDeleteModal = () => {
    setOpenDeleteModal(true);
  };
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-around",
        marginTop: "2rem",
      }}
    >
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Paper sx={{ padding: "2rem" }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                marginBottom: "2rem",
              }}
            >
              <img
                src={user.photoURL}
                alt="Profile"
                style={{ width: "200px", height: "200px", borderRadius: "50%" }}
                onError={(e) => {
                  e.target.src =
                    "data:image/jpeg;base64,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";
                }}
              />
            </Box>
            <Typography variant="h6" gutterBottom>
              {user.displayName}
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                marginTop: "2rem",
              }}
            >
              <Button
                variant="contained"
                color="error"
                onClick={handleDeleteModal}
              >
                Delete User
              </Button>
            </Box>
          </Paper>
        </Grid>

        <Grid item xs={12} md={8}>
          <Paper>
            <Grid sx={{ my: 3, gap: "2rem" }} container spacing={2}>
            {comments.length > 0 ? (
              comments.map((item) => {
                return (
                  <Comment
                    item={item}
                    key={item.id}
                    podId={item.podId}
                    commentUser={item.user}
                    inProfile={true}
                  />
                );
              })
            ) : (
              <Typography
                variant="body1"
                fontSize={"20px"}
                sx={{ marginLeft: "5%" }}
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
