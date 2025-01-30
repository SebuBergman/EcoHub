import { UserData } from "@/features/userData/types";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";

export const saveUserDataToFirestore = async (
  uid: string,
  userData: UserData,
) => {
  const firestore = getFirestore();
  const userDocRef = doc(firestore, "users", uid);

  try {
    await setDoc(userDocRef, userData, { merge: true });
  } catch (error) {
    console.error("Error saving user data:", error);
  }
};

export const uploadImageToFirebaseStorage = async (
  uid: string,
  file: File,
  folder: string
): Promise<string | null> => {
  const storage = getStorage();
  const fileRef = ref(storage, `${folder}/${uid}/${file.name}`);
  const uploadTask = uploadBytesResumable(fileRef, file);

  return new Promise((resolve, reject) => {
    uploadTask.on(
      "state_changed",
      null,
      (error) => {
        console.error("Image upload error:", error);
        reject(null);
      },
      async () => {
        const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
        resolve(downloadURL);
      }
    );
  });
};
