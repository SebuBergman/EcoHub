import { Post as PostTypes } from "./types";

interface Props {
  post: PostTypes;
  onLike: () => void;
}

export default function Post({ post, onLike }: Props) {
  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <button onClick={onLike}>
        {post.likes.includes("userId") ? "Unlike" : "Like"}
      </button>
      <span>{post.likes.length} likes</span>
    </div>
  );
}
