export interface EcoStory {
  storyId: string;
  userId: string | undefined;
  username: string | null | undefined;
  title: string;
  content: string;
  submissionDate: string;
  accepted: boolean;
}
