import React, { useEffect, useState } from "react";
import { useMainContext } from "../contexts/MainContext";
import { useNavigate, useParams } from "react-router";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { Container } from "react-bootstrap";
import { Box, Typography, TextField } from "@mui/material";
import { Button } from "@mui/material";
import { useAuthContext } from "../contexts/AuthContext";
import { useCommentContext } from "../contexts/CommentContext";
import CommentList from "../components/CommentList";
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
const DetailsPage = () => {
  const { pod, getOnePods } = useMainContext();
  const { id } = useParams();
  const { user } = useAuthContext();
  const { comments, addComment } = useCommentContext();
  const navigate = useNavigate();
  const [newComment, setNewComment] = useState("");
  const [onePod, setOnePod] = useState({
    title: "",
    taste: "",
    description: "",
    image: "",
    imageBack: "",
    price: "",
  });
  const [showComments, setShowComments] = useState(false);
  useEffect(() => {
    getOnePods(id);
  }, []);
  console.log(pod, "sdadasd");
  useEffect(() => {
    setOnePod(pod);
  }, [pod]);

  const handleAddComment = () => {
    if (!user) {
      navigate("/auth");
      return;
    }
    if (!newComment) {
      return
    }
    addComment({
      comment: newComment,
      user: {
        email: user.email,
        displayName: user.displayName,
        photoURL: user.photoURL,
      },
      podId: onePod.id,
    });
    setNewComment("");
    setShowComments(false);
  };
  return (
    <div>
    <Container
      style={{
        marginTop: "30px",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        gap: "30px",
      }}
    >
      <ImageList
        sx={{ width: 1000, height: 400 }}
        variant="standard"
        cols={2}
        gap={8}
      >
        <ImageListItem>
          <img src={onePod.image} width="500" />
        </ImageListItem>
        <ImageListItem>
          <img src={onePod.imageBack} width="500" />
        </ImageListItem>
      </ImageList>
      <Box
        sx={{
          width: 650,
          height: 500,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          margin: "0 auto",
        }}
        variant="standard"
      >
        <h3>{onePod.title}</h3>
        <p>{onePod.taste}</p>
        <p>{onePod.description}</p>
        <h3>{`${onePod.price}$`}</h3>
        <Button variant="outline" onClick={() => navigate("/products")}>
          Go Back
        </Button>
      </Box>
    </Container>
    <Box sx={{ width:'50%', margin: '2rem auto'}}>
      <Box sx={{my:3}}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <TextField
            label="Add Comment"
            variant="outlined"
            fullWidth
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          />
          <Button variant="contained" onClick={handleAddComment} sx={{ ml: 2 }}>
            Add
          </Button>
        </Box>
      </Box>

      <Accordion expanded={showComments} >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          onClick={() => setShowComments(!showComments)}
          aria-controls="comment-panel-content"
          id="comment-panel-header"
        >
          <Typography variant="h4" my={3}>
            Comments ({comments.length})
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <CommentList
            post={onePod}
            showComments={showComments}
            setShowComments={setShowComments}
          />
        </AccordionDetails>
      </Accordion>
      </Box>
    </div>
  );
};

export default DetailsPage;
