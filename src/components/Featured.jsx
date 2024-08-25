import { useEffect, useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import FeaturedItem from "./FeaturedItem";
const featuredSection = [
  {
    id: 1,
    imgurl: `../../images/featured-1.webp`,
    title: "Hands Holding Polaroid Photo",
  },
  {
    id: 2,
    imgurl: `../../images/featured-2.jpg`,
    title: "Person Developing Film in a Dark Room ",
  },
  {
    id: 3,
    imgurl: `../../images/featured-3.webp`,
    title:
      "Retro photo camera and vintage telephone placed on wooden bedside table",
  },
];
const Featured = () => {
  const featuredRefs = useRef([]);

  const containerRef = useRef();

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.to(featuredRefs.current, {
      xPercent: -100 * (featuredRefs.current.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        scrub: 1,
        end: "+=" + containerRef.current.offsetWidth,
        pin: true,
        snap: 1 / (featuredRefs.current.length - 1),
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className=" min-h-screen bg-primary text-light flex overflow-x-hidden"
    >
      <div
        className="featured-container flex w-full h-full"
        // style={{ width: `calc(100vw * ${featuredSection.length})` }}
      >
        {featuredSection.map((item, index) => (
          <FeaturedItem
            ref={(el) => (featuredRefs.current[index] = el)}
            key={item.id}
            item={item}
          />
        ))}
      </div>
    </section>
  );
};

export default Featured;
