import { createGlobalStyle } from 'styled-components';
import { useContext } from 'react';
import { ThemeContext } from '../context'; // Adjust the path if needed

// Define the styled component
const StyledGlobalStyle = createGlobalStyle`
  * {
    font-family: 'Trebuchet MS', Helvetica, sans-serif;
  }

  body {
    background-color: ${({ isDarkMode }) => (isDarkMode ? '#2C3E50' : 'white')}; /* Dark blue-gray for dark mode */
    color: ${({ isDarkMode }) => (isDarkMode ? '#ECF0F1' : '#333')}; /* Soft white text for dark mode */
    margin: 0;
    transition: background-color 0.3s ease, color 0.3s ease; /* Smooth transitions */
  }

  a {
    color: ${({ isDarkMode }) => (isDarkMode ? '#1ABC9C' : '#0066CC')}; /* Teal for dark mode, blue for light mode */
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      text-decoration: underline;
    }
  }
`;

// Create the functional component to use context
function GlobalStyle() {
  const { theme } = useContext(ThemeContext); // Get the current theme from context
  return <StyledGlobalStyle isDarkMode={theme === 'dark'} />;
}

export default GlobalStyle;
