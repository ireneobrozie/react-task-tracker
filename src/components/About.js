import { Link } from "react-router-dom";
import { FaArrowAltCircleLeft } from "react-icons/fa";

const About = () => {
  return (
    <div>
      <h4>Version 1.0.0</h4>
      <Link to="/">
        <h3>
          <FaArrowAltCircleLeft
            style={{ color: "black", cursor: "pointer" }}
            // onClick={() => onDelete(task.id)}
          />
        </h3>
      </Link>
    </div>
  );
};

export default About;
