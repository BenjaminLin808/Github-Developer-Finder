import { useEffect, useState } from "react";
import { View, Text, TextInput, Button, ActivityIndicator } from "react-native";
import axios from "axios";
import useProfiles from "hooks/useProfiles";

import Main from "layouts/Main";
import Header from "./Header";
import InputArea from "./InputArea";
import Card from "./Card";
import NotFound from "components/svgr/NotFound";

const GitHubProfile = () => {
  const { setActiveProfile } = useProfiles();
  // user state: used to store user information
  const [user, setUser] = useState("");

  // loading state : used to indicate whether the request is in progress
  const [loading, setLoading] = useState(false);

  // error state: used to store error message
  const [error, setError] = useState(null);

  const searchUser = async (username) => {
    setLoading(true);
    setError(null);
    setUser(null);

    try {
      const response = await axios.get(
        `https://api.github.com/users/${username}`
      );
      setUser(response.data);
      setActiveProfile(username);
    } catch (error) {
      setError(error.message);
    }

    setLoading(false);
  };

  // preload a profile
  useEffect(() => {
    const preloadProfile = () => {
      searchUser("octocat");
    };

    preloadProfile();
  }, []);

  return (
    <Main>
      <Header user={user} />
      <InputArea searchUser={searchUser} loading={loading} />
      {user ? (
        <Card user={user} loading={loading} error={error} />
      ) : (
        <NotFound></NotFound>
      )}
    </Main>
  );
};

export default GitHubProfile;
