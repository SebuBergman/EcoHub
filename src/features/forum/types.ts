export interface Post {
  postId: string;
  userId: string | undefined;
  username: string | null | undefined;
  title: string;
  content: string;
  timestamp: string;
  likes: string[];
  comments: Comment[];
}

export interface Comment {
  commentId: string;
  userId: string | undefined;
  username: string | null | undefined;
  content: string;
  timestamp: string;
  likes: string[];
}

export interface newPost {
  postId: string;
  userId: string | undefined;
  username: string | null | undefined;
  title: string;
  content: string;
  timestamp: string;
  likes: never[];
  comments: never[];
}
