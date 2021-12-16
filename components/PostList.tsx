import type { FC } from "react";
import { PostType } from "../types/sns";

type PostListProps = {
  posts: PostType[];
  someType: string;
};

const PostView: FC<{ post: PostType }> = ({ post }) => {
  return (
    <a href={post.url} target="_blank">
      <div className="post-item">
        <img src={post.ogImage} className="post-item--image" />
        <div className="post-item--detail">
          <div className="post-item--detail-title">{post.title}</div>
          <div className="post-item--detail-number">
            <div className="post-item--detail-number-likes">
              {post.likesCount}
            </div>
            <div className="post-item--detail-number-date">
              {post.updatedAt}
            </div>
          </div>
        </div>
      </div>
    </a>
  );
};

export const PostList: FC<PostListProps> = (props) => {
  const { posts, someType } = props;

  return (
    <div className="post-list">
      <div className="post-list--sns">{someType}</div>
      <div className="post-list--container">
        {posts.map((post, j) => (
          <PostView post={post} />
        ))}
      </div>
    </div>
  );
};
