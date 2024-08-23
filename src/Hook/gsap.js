import { useEffect } from "react";

import gsap from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useGsapHorizontalScroll = (item, delay = 0, trig) => {
  useEffect(() => {
    const el = item.current;
    gsap.to(el, {
      xPercent: -100 * (el.length - 1),
      ease: "none",
      delay: delay,
      scrollTrigger: {
        trigger: trig.current,
        scrub: 1,
        end: "+=" + trig.current.offsetWidth,
        pin: true,
        snap: 1 / (el - 1),
      },
    });
  });
};
