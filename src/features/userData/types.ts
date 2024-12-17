export interface UserSettings {
  about: string;
  avatar: string | null;
  banner: string | null;
  photos: userImageFile[];
  notificationsEnabled: boolean;
}

export interface userImageFile {
  fileName: string;
  storagePath?: string | null;
  url?: string | null;
}
