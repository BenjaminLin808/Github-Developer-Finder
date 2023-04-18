import { render, fireEvent } from '@testing-library/react-native';
import App from '../App';

// test if the app renders correctly without crashing
test('renders correctly', () => {
  render(<App />);
});