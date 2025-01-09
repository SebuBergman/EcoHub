import { EcoStory, UserData } from "@/features/userData/types";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getFirestore, doc, setDoc, collection, addDoc, updateDoc } from "firebase/firestore";

// Define the Firestore collection name
const ECO_STORY_COLLECTION = "ecoStories";

export const saveUserDataToFirestore = async (
  uid: string,
  userData: UserData,
) => {
  const firestore = getFirestore();
  const userDocRef = doc(firestore, "users", uid);

  try {
    await setDoc(userDocRef, userData, { merge: true });
    console.log("User data saved to Firestore successfully!");
  } catch (error) {
    console.error("Error saving user data:", error);
  }
};

// Async thunk to upload a story to Firestore
export const uploadStoryToFirestore = createAsyncThunk(
  "ecoStory/uploadToFirestore",
  async (story: EcoStory) => {
    const db = getFirestore();
    const storyRef = await addDoc(collection(db, ECO_STORY_COLLECTION), story);
    return { ...story, id: storyRef.id }; // Use Firestore's generated ID
  }
);

// Async thunk to update a story's `accepted` status in Firestore
export const updateStoryInFirestore = createAsyncThunk(
  "ecoStory/updateInFirestore",
  async ({ id, accepted }: { id: string; accepted: boolean }) => {
    const db = getFirestore();
    const storyRef = doc(db, ECO_STORY_COLLECTION, id);
    await updateDoc(storyRef, { accepted });
    return { id, accepted };
  }
);