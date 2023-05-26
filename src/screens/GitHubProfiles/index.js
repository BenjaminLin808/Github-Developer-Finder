import { useEffect, useState } from "react";

import Main from "layouts/Main";
import Header from "./Header";
import ProfileList from "./ProfileList";

const GitHubProfiles = () => {
  return (
    <Main>
      <Header />
      <ProfileList />
    </Main>
  );
};

export default GitHubProfiles;
