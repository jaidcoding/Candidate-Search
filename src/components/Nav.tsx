
import { Link } from 'react-router-dom';
const Nav = () => {
  // TODO: Add necessary code to display the navigation bar and link between the pages
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link> {/* Link to the Home page */}
        </li>
        <li>
          <Link to="/candidates">Candidate Search</Link> {/* Link to Candidate Search */}
        </li>
        <li>
          <Link to="/saved">Saved Candidates</Link> {/* Link to Saved Candidates */}
        </li>
      </ul>
    </nav>
  );
};

export default Nav;