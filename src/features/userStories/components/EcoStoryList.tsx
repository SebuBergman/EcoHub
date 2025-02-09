import { Box, Typography } from "@mui/material";
import { useAppDispatch, useAppSelector } from "@app/store";
import { EcoStory as EcoStoryTypes } from "../types";
import { useEffect } from "react";
import { collection, onSnapshot, query } from "firebase/firestore";
import { firestore } from "@app/services/firebase";
import { ECO_STORY_COLLECTION } from "../constant";
import UserStory from "./Story";
import { fetchUserStories, updateStoriesLocally } from "../store/ecoStorySlice";

export default function EcoStoryList() {
  const dispatch = useAppDispatch();
  const stories = useAppSelector((state) => state.ecoStory.stories);

  useEffect(() => {
    // Fetch posts initially
    dispatch(fetchUserStories());

    // Set up a listener for real-time updates
    const q = query(collection(firestore, ECO_STORY_COLLECTION));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const updatedStory: EcoStoryTypes[] = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        storyId: doc.id,
      })) as EcoStoryTypes[];

      // Sort posts by timestamp in descending order
      updatedStory.sort(
        (a, b) =>
          new Date(b.submissionDate).getTime() -
          new Date(a.submissionDate).getTime()
      );

      // Dispatch an action to update the posts in local state
      dispatch(updateStoriesLocally(updatedStory));
    });

    // Cleanup the listener on unmount
    return () => unsubscribe();
  }, [dispatch]);

  /*const handleRemove = (id: string) => {
    dispatch(removeStory(id));
  };*/

  return (
    <Box sx={{ maxWidth: "800px", mx: "auto", mt: {xs: 1, md: 4}, px: {xs: 1} }}>
      <Typography variant="h1" sx={{ mt: {xs: 2, md: 6}, mb: 2, textAlign: "center" }}>
        User Stories:
      </Typography>
      {stories.map((story) => (
        <UserStory key={story?.storyId} story={story} />
      ))}
    </Box>
  );
}
