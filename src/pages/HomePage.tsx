import type { Post } from "models";

import { useState } from "react";
import { Link } from "react-router-dom";

import PostItem from "components/PostItem";

import { Button, Input, Card } from "@mui/material";

type Props = {
  posts: Post[];
  addPostHandler: (title: string, body: string) => void;
};

const HomePage: React.FC<Props> = ({ posts, addPostHandler }) => {
  const [title, setTitle] = useState<string>("");
  const [body, setBody] = useState<string>("");

  const addPost = () => {
    addPostHandler(title, body);
    setTitle("");
    setBody("");
  };

  return (
    <div>
      <Link to="profile" className="link">
        Profile
      </Link>
      <Card className="post-form" sx={{ backgroundColor: "#d3d3af" }}>
        <h3 className="post-title">Add new post</h3>
        <div className="post-input__container">
          <Input
            placeholder="Post title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <Input
            placeholder="Post body"
            type="text"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
        </div>
        <Button onClick={addPost}>Submit</Button>
      </Card>
      <div className="post-list">
        {posts.map((post) => (
          <PostItem key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
