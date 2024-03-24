import { Link } from "react-router-dom";

const Footer = ({ show }) => {
  return (
    <footer>
      <p>Copyright &copy; 2024</p>
      <Link to="/about">About Task Tracker</Link>
    </footer>
  );
};

export default Footer;
