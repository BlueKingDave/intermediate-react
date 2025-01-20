import { Link } from 'react-router-dom';
import styled from 'styled-components';
import colors from '../../utils/style/colors';

const StyledLink = styled(Link)`
  padding: 15px;
  color: #8186a0;
  text-decoration: none;
  font-size: 18px;
  border-radius: 30px;
  width: 15vw;
  transition:
    box-shadow 0.3s ease,
    transform 0.3s ease;

  &:hover {
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
    transform: translateY(-5px) scale(1.05); /* Moves up and scales slightly */
  }

  ${({ $isFullLink }) =>
    $isFullLink &&
    `
      color: white; 
      border-radius: 30px; 
      background-color: ${colors.primary};
    `}
`;

const StickyHeader = styled.nav`
  display: flex;
  justify-content: space-evenly;
  position: sticky;
  top: 0; /* Sticks to the top of the viewport */
  z-index: 1000; /* Ensures it stays above other elements */
  background-color: #fff; /* Set a background to avoid transparency */
  padding: 15px 0;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* Optional shadow for visual distinction */
`;

function Header() {
  return (
    <StickyHeader>
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="/survey/1" $isFullLink>
        Run the Test
      </StyledLink>
      <StyledLink to="/freelancers">Profiles</StyledLink>
    </StickyHeader>
  );
}

export default Header;
