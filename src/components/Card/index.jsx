import PropTypes from 'prop-types';
import DefaultPicture from '../../assets/profile.png';
import styled from 'styled-components';
import colors from '../../utils/style/colors';

const CardLabel = styled.span`
  color: #5843e4;
  font-size: 22px;
  font-weight: normal;
  padding-left: 15px;
`;

const CardTitle = styled.span`
  color: black;
  font-size: 22px;
  font-weight: normal;
  align-self: center;
`;

const CardImage = styled.img`
  height: 150px;
  width: 150px;
  align-self: center;
  border-radius: 50%;
  transition: transform 0.3s ease-in-out; /* Smooth animation for scaling and rotation */

  &:hover {
    transform: rotate(-10deg) scale(1.1); /* Rotate and scale on hover */
  }
`;

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 15px;
  background-color: ${colors.backgroundLight};
  border-radius: 30px;
  width: 300px;
  height: 300px;
  transition: 400ms ease-in-out;
  &:hover {
    cursor: pointer;
    box-shadow: 2px 2px 10px #e2e3e9;
    transform: scale(1.1) rotate(3deg);
  }
`;

function Card({ label, title, picture }) {
  return (
    <CardWrapper>
      <CardLabel>{label}</CardLabel>
      <CardImage src={picture} alt="freelancer" />
      <CardTitle>{title}</CardTitle>
    </CardWrapper>
  );
}

Card.propTypes = {
  label: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
};

Card.defaultProps = {
  label: '',
  title: '',
  picture: DefaultPicture,
};

export default Card;
