import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useEffect, useState } from "react";

const ProfilesContext = createContext({
  profiles: [],
  setProfiles: () => {},
  activeProfile: {},
  setActiveProfile: () => {},
});

const ProfilesProvider = ({ children }) => {
  const [profiles, setProfiles] = useState([]);
  const [activeProfile, setActiveProfile] = useState("");

  // update profiles when profiles change
  useEffect(() => {
    AsyncStorage.setItem("profiles", JSON.stringify(profiles));
  }, [profiles]);

  // get all profiles when the app loads
  useEffect(() => {
    const getProfiles = async () => {
      const profiles = await AsyncStorage.getItem("profiles");
      if (profiles) {
        setProfiles(JSON.parse(profiles));
      }
    };
    getProfiles();
  }, []);

  return (
    <ProfilesContext.Provider
      value={{ profiles, setProfiles, activeProfile, setActiveProfile }}
    >
      {children}
    </ProfilesContext.Provider>
  );
};

export { ProfilesProvider, ProfilesContext };
