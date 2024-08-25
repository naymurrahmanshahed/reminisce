import { useRef } from "react";
import {
  useGsapPhotoDropping,
  useGsapPhotoLavitate,
  useGsapShutterUnveil,
} from "../Hook/gsap";

const Hero = () => {
  const heroRef = useRef(null);
  const shutter1 = useRef(null);
  const shutter2 = useRef(null);
  const shutter3 = useRef(null);
  const photo1Ref = useRef(null);
  const photo2Ref = useRef(null);
  const photo3Ref = useRef(null);

  const photosArr = [photo1Ref, photo2Ref, photo3Ref];

  useGsapShutterUnveil(shutter1, 0, heroRef);
  useGsapShutterUnveil(shutter2, 0.2, heroRef);
  useGsapShutterUnveil(shutter3, 0.4, heroRef);
  useGsapPhotoDropping(photosArr, 2.5);
  useGsapPhotoLavitate(photosArr, heroRef);
  return (
    <div
      ref={heroRef}
      className="grid grid-cols-12 min-h-[calc(100vh-179px)] grid-rows-4 font-baijamjuree uppercase text-[5.5vw] font-semibold  text-darker relative"
    >
      <h3 className="wonder col-start-2 row-start-1">
        Wonder <span ref={shutter1}></span>
      </h3>
      <h3 className="discovery col-start-6 row-start-3 ">
        Discovery <span ref={shutter2}></span>
      </h3>
      <h3 className="magic col-start-2 row-start-4">
        Magic <span ref={shutter3}></span>
      </h3>
      <div className="photos">
        <div
          className="photo one"
          ref={photo1Ref}
          style={{
            backgroundImage:
              'url("https://images.pexels.com/photos/8038906/pexels-photo-8038906.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
          }}
        ></div>
        <div
          className="photo two"
          ref={photo2Ref}
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/5336487/pexels-photo-5336487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
          }}
        ></div>
        <div
          className="photo three"
          ref={photo3Ref}
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/4200745/pexels-photo-4200745.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Hero;
