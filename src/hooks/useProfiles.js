import { ProfilesContext } from "contexts/Profiles";
import { useContext } from "react";

const useProfiles = () => {
  const { profiles, setProfiles, activeProfile, setActiveProfile } =
    useContext(ProfilesContext);

  return { profiles, setProfiles, activeProfile, setActiveProfile };
};

export default useProfiles;
