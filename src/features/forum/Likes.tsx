import { useState } from "react";
import "./styles.scss"; // Import the CSS file for styling
import { Box, Stack } from "@mui/material";

interface Props {
  initialLikes: number;
  initialUserVote: number; // -1 for downvote, 0 for no vote, 1 for upvote
  onUpvote: () => void;
  onDownvote: () => void;
}

export default function LikesComponent({
  initialLikes,
  initialUserVote,
  onUpvote,
  onDownvote,
}: Props) {
  const [likes, setLikes] = useState(initialLikes);
  const [userVote, setUserVote] = useState(initialUserVote);

  const handleUpvote = () => {
    if (userVote === 1) {
      setLikes(likes - 1);
      setUserVote(0);
      onDownvote();
    } else if (userVote === -1) {
      setLikes(likes + 2);
      setUserVote(1);
      onUpvote();
    } else {
      setLikes(likes + 1);
      setUserVote(1);
      onUpvote();
    }
  };

  const handleDownvote = () => {
    if (userVote === -1) {
      setLikes(likes + 1);
      setUserVote(0);
      onUpvote();
    } else if (userVote === 1) {
      setLikes(likes - 2);
      setUserVote(-1);
      onDownvote();
    } else {
      setLikes(likes - 1);
      setUserVote(-1);
      onDownvote();
    }
  };

  return (
    <Box
      className="like-component"
      sx={{
        display: "flex",
        flexDirection: "row",
        padding: "10px 0px 10px 0px",
        gap: 1,
      }}
    >
      <button
        className={`vote-button upvote ${userVote === 1 ? "active" : ""}`}
        onClick={handleUpvote}
      >
        ▲
      </button>
      <Stack className="like-count">{likes}</Stack>
      <button
        className={`vote-button downvote ${userVote === -1 ? "active" : ""}`}
        onClick={handleDownvote}
      >
        ▼
      </button>
    </Box>
  );
};
