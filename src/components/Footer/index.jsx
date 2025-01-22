import styled from 'styled-components';
import { useContext } from 'react';
import { ThemeContext } from '../../utils/context'; // Import the ThemeContext

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-top: 60px;
  background-color: ${({ theme }) =>
    theme === 'light' ? '#f8f9fa' : '#343a40'};
  color: ${({ theme }) => (theme === 'light' ? '#212529' : '#ffffff')};
`;

const NightModeButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 16px;
  padding: 8px 16px;
  border-radius: 4px;
  transition:
    color 0.3s ease,
    background-color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) =>
      theme === 'light' ? '#dddddd' : '#444444'};
    color: ${({ theme }) => (theme === 'light' ? '#000000' : '#ffffff')};
  }
`;

function Footer() {
  const { toggleTheme, theme } = useContext(ThemeContext);

  return (
    <FooterContainer theme={theme}>
      <NightModeButton onClick={toggleTheme}>
        Switch mode: {theme === 'light' ? '☀️' : '🌙'}
      </NightModeButton>
    </FooterContainer>
  );
}

export default Footer;
