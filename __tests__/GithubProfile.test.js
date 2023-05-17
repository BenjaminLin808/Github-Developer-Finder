import GitHubProfile from "../src/screens/GitHubProfile";
import { render, waitFor } from "@testing-library/react-native";

// test if GithubProfile can preload a profile of @octocat

test("loads octocat profile", async () => {
  const { getByText } = render(<GitHubProfile />);

  await waitFor(
    () => {
      expect(getByText("San Francisco")).toBeTruthy();
    },
    { timeout: 10000 }
  );
});
