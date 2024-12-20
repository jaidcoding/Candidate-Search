import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className="nav">
      <ul>
        <li className="nav-item">
          <Link to="/" className="nav-link">Home</Link> {/* Link to the Home page */}
        </li>
        <li className="nav-item">
          <Link to="/candidate-search" className="nav-link">Candidate Search</Link> {/* Link to Candidate Search */}
        </li>
        <li className="nav-item">
          <Link to="/saved-candidates" className="nav-link">Saved Candidates</Link> {/* Link to Saved Candidates */}
        </li>
      </ul>
    </nav>
  );
};

export default Nav;