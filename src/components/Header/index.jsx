import { Link } from 'react-router-dom';
function Header() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/survey/1">Survey</Link>
      <Link to="/results">Results</Link>
      <Link to="/freelancers">Freelancers</Link>
    </nav>
  );
}

export default Header;
