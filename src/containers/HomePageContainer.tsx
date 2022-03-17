import { useEffect, useState } from "react";

import { getPosts } from "servers";

import useGlobalState from "use-global-state";

import Loader from "components/Loader";
import HomePage from "pages/HomePage";

const HomePageContainer: React.FC = () => {
  const [posts, setPosts] = useGlobalState("posts");
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        if (posts.length) {
          setIsLoading(false);
          return;
        }
        const res = await getPosts();

        const newPosts = res.data;

        setPosts(newPosts);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, [setPosts]);

  const addPostHandler = (title: string, body: string) => {
    setPosts((prevPosts) => {
      const posts = [...prevPosts];
      posts.unshift({
        title,
        body,
        id: Math.random(),
        userId: 1,
      });

      return posts;
    });
  };

  if (isLoading) return <Loader />;

  return <HomePage posts={posts} addPostHandler={addPostHandler} />;
};

export default HomePageContainer;
