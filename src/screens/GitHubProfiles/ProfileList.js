import { View, StyleSheet } from "react-native";
import useProfiles from "hooks/useProfiles";
import ProfileItem from "./ProfileItem";

const ProfileList = () => {
  const { profiles } = useProfiles();

  return (
    <View>
      {profiles.map((profile) => (
        <ProfileItem key={profile.login} profile={profile} />
      ))}
    </View>
  );
};

export default ProfileList;
