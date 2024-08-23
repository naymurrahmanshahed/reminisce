import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useSmoothHorizontalScroll } from "../Hook/useSmoothScroll";

const Featured = () => {
  useSmoothHorizontalScroll();
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

  return (
    <section
      ref={containerRef}
      className="min-h-screen bg-primary text-light flex overflow-x-hidden"
    >
      <div
        className="featured-container flex w-full"
        style={{ width: `calc(100vw * ${featuredSection.length})` }}
      >
        {featuredSection.map((item, index) => (
          <div
            ref={(el) => (featuredRefs.current[index] = el)}
            key={item.id}
            className="flex-shrink-0 w-full flex gap-10 items-center justify-center"
          >
            <div className="featured-image w-[30%] overflow-hidden">
              <img
                src={item.imgurl}
                className="w-full"
                alt={`Featured ${item.id}`}
              />
            </div>
            <div className="featured-content flex flex-col w-[40%]">
              <h3 className="text-[3vw]">{item.title}</h3>
              <Link className="border-b-4 w-[14rem]">Explore More</Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Featured;
