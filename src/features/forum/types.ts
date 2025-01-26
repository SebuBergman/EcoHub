export interface Post {
  id: string;
  userId: string;
  username: string;
  title: string;
  content: string;
  timestamp: Date;
  likes: string[];
  comments: Comment[];
}

export interface Comment {
  userId: string;
  username: string;
  content: string;
  timestamp: Date;
}

export interface newPost {
  userId: string;
  username: string;
  title: string;
  content: string;
  timestamp: Date;
  likes: never[];
  comments: never[];
};