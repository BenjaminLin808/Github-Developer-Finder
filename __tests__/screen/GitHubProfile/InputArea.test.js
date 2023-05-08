import { render, waitFor, fireEvent } from "@testing-library/react-native";
import InputArea from "../../../screens/GitHubProfile/InputArea";

// test if the search button can trigger the setUser function
test("test if the search button can trigger the searchUser function", async () => {
  const searchUser = jest.fn();
  const { getByTestId, getByPlaceholderText } = render(
    <InputArea loading={false} searchUser={searchUser} />
  );

  const input = getByPlaceholderText("Enter GitHub username");
  fireEvent.changeText(input, "test");

  const searchButton = getByTestId("searchButton");
  fireEvent.press(searchButton);

  await waitFor(() => {
    expect(searchUser).toHaveBeenCalled();
  });
});
