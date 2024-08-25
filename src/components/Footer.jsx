import { useRef } from "react";
import { useGsapFooterHeadline } from "../Hook/gsap";
const Footer = () => {
  const footerRef = useRef(null);
  const footerHeadlineRef = useRef(null);

  useGsapFooterHeadline(footerHeadlineRef, footerRef);
  return (
    <section className="footer text-center ">
      <h1
        ref={footerHeadlineRef}
        className="font-bodoni lowercase text-[10vw] text-primary"
      >
        Bienvenue
      </h1>
      <p>&copy; {new Date().getFullYear()} Reminisce. Crafted by yours truly</p>
    </section>
  );
};

export default Footer;
