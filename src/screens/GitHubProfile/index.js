import { useState } from "react";
import { View, Text, TextInput, Button, ActivityIndicator } from "react-native";
// import { Card, Image } from 'react-native-elements';
import axios from "axios";

import Header from "./Header";
import InputArea from "./InputArea";
import Card from "./Card";

const GitHubProfile = () => {
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
    } catch (error) {
      console.error(error);
      setError(error.message);
    }

    setLoading(false);
  };

  return (
    <View style={{ paddingHorizontal: 20 }}>
      <Header />
      <InputArea searchUser={searchUser} loading={loading} />
      {user ? <Card user={user} loading={loading} error={error} /> : <></>}
    </View>
  );
};

export default GitHubProfile;
