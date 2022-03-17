import { useState, useEffect } from "react";

import useGlobalState from "use-global-state";
import { getUser } from "servers";

import Loader from "components/Loader";
import ProfilePage from "pages/ProfilePage";
import isObjectEmpty from "helpers/is-object-empty";

const ProfilePageContainer: React.FC = () => {
  const [user, setUser] = useGlobalState("user");
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        if (!isObjectEmpty(user)) {
          setIsLoading(false);
          return;
        }

        const res = await getUser();

        const newUser = res.data;

        if (newUser) setUser(newUser);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, [setUser]);

  if (isLoading) return <Loader />;
  return <ProfilePage user={user} />;
};

export default ProfilePageContainer;
