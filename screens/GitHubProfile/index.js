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

  // return (
  // <View style={{ paddingHorizontal: 20 }}>
  //   <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>GitHub Profile Search</Text>
  //   <TextInput
  //     style={{ borderWidth: 1, borderColor: '#ccc', padding: 5, marginBottom: 10 }}
  //     value={username}
  //     onChangeText={setUsername}
  //     placeholder="Enter GitHub username"
  //     autoCapitalize="none"
  //     autoCorrect={false}
  //   />
  //   <Button title="Search" onPress={searchUser} disabled={!username} />

  //   {loading ? (
  //     <ActivityIndicator size="large" style={{ marginTop: 20 }} />
  //   ) : user ? (
  //     <Card containerStyle={{ marginTop: 20 }}>
  //       <Image source={{ uri: user.avatar_url }} style={{ width: 200, height: 200, alignSelf: 'center' }} />
  //       <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 20, textAlign: 'center' }}>{user.login}</Text>
  //       <Text style={{ marginTop: 10, textAlign: 'center' }}>{user.name || '-'}</Text>
  //       <Text style={{ marginTop: 10, textAlign: 'center' }}>{user.bio || '-'}</Text>
  //       <Text style={{ marginTop: 10, textAlign: 'center' }}>{user.location || '-'}</Text>
  //     </Card>
  //   ) : error ? (
  //     <Text style={{ marginTop: 20, color: 'red' }}>{error}</Text>
  //   ) : null}
  // </View>

  // );
};

export default GitHubProfile;
