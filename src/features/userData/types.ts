export interface UserData {
  description: string;
  socialLinks: SocialLink[];
  notifications: boolean | undefined;
}

export interface SocialLink {
  id: string;
  url: string;
}