import { useRef } from "react";
import {
  useGsapAboutContentLeftShutterUnveil,
  useGsapAboutContentRightShutterUnveil,
  useGsapAboutLeftShutterUnveil,
  useGsapAboutRightShutterUnveil,
} from "../Hook/gsap";

const About = () => {
  const aboutLeftShutterRef = useRef(null);
  const aboutRightShutterRef = useRef(null);
  const aboutContentLeftShutterRef = useRef(null);
  const aboutContentRightShutterRef = useRef(null);
  const featureRef = useRef(null);
  useGsapAboutLeftShutterUnveil(aboutLeftShutterRef, featureRef);
  useGsapAboutRightShutterUnveil(aboutRightShutterRef, featureRef);
  useGsapAboutContentLeftShutterUnveil(aboutContentLeftShutterRef, featureRef);
  useGsapAboutContentRightShutterUnveil(
    aboutContentRightShutterRef,
    featureRef
  );
  return (
    <section
      ref={featureRef}
      className="min-h-screen container mx-auto py-10 flex items-center justify-center"
    >
      <div className=" flex flex-col ">
        <div className="about-container flex gap-10 justify-between  border-t-4 border-b-0 md:border-b-4 md:border-b-primary  border-t-primary">
          <div className="image-container-left w-[30%] h-[18rem] 2xl:h-[24rem] p-2">
            <img
              src="../../images/about-1.webp"
              className="w-full h-full object-cover"
              alt=""
            />
            <span
              className="about-shutter-left"
              ref={aboutLeftShutterRef}
            ></span>
          </div>
          <p className="about-content-left relative w-[66%] text-[1.5rem] text-justify">
            Growing up, life was filled with simple joys and endless
            possibilities. The days were long, and the summers even longer, as
            we explored the world with wide-eyed wonder. From the first light of
            dawn to the setting sun, our childhood was a canvas painted with
            laughter, mischief, and endless adventures.
            <span
              ref={aboutContentLeftShutterRef}
              className="about-content-left-shutter"
            ></span>
          </p>
        </div>
        <div className="about-container flex justify-between border-b-4 border-b-primary ">
          <p className="about-content-right relative w-[66%] text-[1.5rem] text-justify">
            Growing up, life was filled with simple joys and endless
            possibilities. The days were long, and the summers even longer, as
            we explored the world with wide-eyed wonder. From the first light of
            dawn to the setting sun, our childhood was a canvas painted with
            laughter, mischief, and endless adventures.
            <span
              ref={aboutContentRightShutterRef}
              className="about-content-right-shutter"
            ></span>
          </p>
          <div className="image-container-right  w-[30%]  h-[18rem] 2xl:h-[24rem] p-2">
            <img
              src="../../images/about-2.webp"
              className="w-full h-full object-cover"
              alt=""
            />
            <span
              className="about-shutter-right"
              ref={aboutRightShutterRef}
            ></span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
