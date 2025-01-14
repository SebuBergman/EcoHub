export interface UserData {
  description: string;
  socialLinks: SocialLink[];
  notifications: boolean | undefined;
}

export interface SocialLink {
  id: string;
  url: string;
}

/*export interface userImageFile {
  fileName: string;
  storagePath?: string | null;
  url?: string | null;
}

export interface Avatar {
  fileName: string;
  storagePath?: string | null;
  url?: string | null;
}

export interface EcoStory {
  id: string;
  title: string;
  content: string;
  date: string;
}*/
