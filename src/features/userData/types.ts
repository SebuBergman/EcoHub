export interface UserData {
  description: string;
  socialLinks: SocialLink[];
  notifications: boolean | undefined;
}

export interface EcoStory {
  id: string;
  title: string;
  content: string;
  submissionDate: string;
  accepted: boolean;
}

export interface SocialLink {
  id: string;
  url: string;
}