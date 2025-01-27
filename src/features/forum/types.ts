export interface Post {
  id: string;
  userId: string | undefined;
  username: string | null | undefined;
  title: string;
  content: string;
  timestamp: string;
  likes: string[];
  comments: Comment[];
}

export interface Comment {
  userId: string | undefined;
  username: string | null | undefined;
  content: string;
  timestamp: string;
  likes: string[];
}

export interface newPost {
  userId: string | undefined;
  username: string | null | undefined;
  title: string;
  content: string;
  timestamp: string;
  likes: never[];
  comments: never[];
}
