import { useRef } from "react";
import { Link } from "react-router-dom";
import { useGsapDownStagger, useGsapUpStagger } from "../Hook/gsap";

const Navbar = () => {
  const li1 = useRef(null);
  const li2 = useRef(null);
  const li3 = useRef(null);
  const logoRef = useRef(null);
  const liArr = [li1, li2, li3];
  useGsapDownStagger(liArr, 0.8);
  useGsapUpStagger(logoRef, 1.5);
  return (
    <div className="container mx-auto navbar flex justify-between items-center font-syncopate place-items-center py-2">
      <div className="logo" ref={logoRef}>
        <Link to="/" className="brand text-darker font-[700]">
          Reminisce
        </Link>
      </div>
      <ul className="nav-items font-[700] text-dark">
        <li ref={li1} className="nav-item">
          <Link to={"/"} className="nav-link ">
            Featured
          </Link>
        </li>
        <li ref={li2} className="nav-item">
          <Link to={"/about"} className="nav-link">
            About
          </Link>
        </li>
        <li ref={li3} className="nav-item">
          <Link to={"/gallery"} className="nav-link">
            Gallery
          </Link>
        </li>
        {/* <li ref={li4} className="nav-item">
          <Link className="nav-link">Blog</Link>
        </li> */}
      </ul>
    </div>
  );
};

export default Navbar;
