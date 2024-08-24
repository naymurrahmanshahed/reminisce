import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="container mx-auto navbar flex justify-between items-center font-syncopate place-items-cente py-2 text-[1.5rem]">
      <Link to="/" className="brand text-darker font-[700]">
        Reminisce
      </Link>
      <ul className="nav-items font-[700] text-dark">
        <li className="nav-item">
          <Link to={"/"} className="nav-link">
            Featured
          </Link>
        </li>
        <li className="nav-item">
          <Link to={"/about"} className="nav-link">
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link to={"/gallery"} className="nav-link">
            Gallery
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link">Blog</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
