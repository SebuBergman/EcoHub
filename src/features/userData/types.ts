export interface SocialLink {
  id: string;
  url: string;
}

export interface UserData {
  description: string;
  avatar: string | null;
  socialLinks: SocialLink[];
  notifications: boolean | null;
}

export interface userImageFile {
  fileName: string;
  storagePath?: string | null;
  url?: string | null;
}
