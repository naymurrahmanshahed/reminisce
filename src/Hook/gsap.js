import { useEffect } from "react";

import gsap, { Expo } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useGsapHorizontalScroll = (item, delay = 0, trig) => {
  useEffect(() => {
    const el = item.current.map((item) => item);
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

export const useGsapDownStagger = (arr, delay = 0) => {
  useEffect(() => {
    const el = arr.map((item) => item.current);
    gsap.fromTo(
      el,
      {
        y: "-100%",
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        stagger: 0.1,
        ease: Expo.easeIn,
        delay: delay,
      }
    );
  }, [arr, delay]);
};

export const useGsapUpStagger = (item, delay = 0) => {
  useEffect(() => {
    const el = item.current;
    gsap.fromTo(
      el,
      {
        y: "100%",
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        stagger: 0.1,
        ease: Expo.easeInOut,
        duration: 1.5,
        delay: delay,
      }
    );
  }, [delay, item]);
};
export const useGsapShutterUnveil = (item, delay = 0, trig) => {
  useEffect(() => {
    const el = item.current;
    gsap.fromTo(
      el,
      {
        height: "100%",
      },
      {
        height: 0,
        duration: 2,
        ease: Expo.easeInOut,
        delay: delay,
        scrollTrigger: {
          trigger: trig.current,
          toggleActions: "play reverse play reverse",
        },
      }
    );
  }, [delay, item, trig]);
};

export const useGsapPhotoDropping = (arr, delay = 0) => {
  useEffect(() => {
    const el = arr.map((item) => item.current);
    gsap.fromTo(
      el,
      {
        y: "-100vh",
        scale: 0,
      },
      {
        y: 0,
        scale: 1,
        duration: 2,
        stagger: 0.2,
        delay: delay,
        ease: Expo.easeInOut,
      }
    );
  }, [arr, delay]);
};

export const useGsapPhotoLavitate = (arr, trig) => {
  useEffect(() => {
    const el = arr.map((item) => item.current);
    gsap.fromTo(
      el,
      {
        y: 0,
      },
      {
        y: "-30%",
        ease: Expo.easeInOut,
        scrollTrigger: {
          trigger: trig.current,
          scrub: 1,
          toggleActions: "play reverse play reverse",
        },
      }
    );
  }, [arr, trig]);
};

export const useGsapAboutLeftShutterUnveil = (item, trig) => {
  useEffect(() => {
    const el = item.current;
    gsap.fromTo(
      el,
      {
        height: "100%",
      },
      {
        height: 0,
        duration: 1.3,
        ease: Expo.easeInOut,
        scrollTrigger: {
          trigger: trig.current,
          start: "top center",
          end: "bottom center",
          toggleActions: "play reverse play reverse",
        },
      }
    );
  }, [item, trig]);
};
export const useGsapAboutRightShutterUnveil = (item, trig) => {
  useEffect(() => {
    const el = item.current;
    gsap.fromTo(
      el,
      {
        width: "100%",
      },
      {
        width: 0,
        duration: 1.3,
        ease: Expo.easeInOut,
        scrollTrigger: {
          trigger: trig.current,
          start: "top center",
          end: "bottom center",
          toggleActions: "play reverse play reverse",
        },
      }
    );
  }, [item, trig]);
};

export const useGsapAboutContentLeftShutterUnveil = (item, trig) => {
  useEffect(() => {
    const el = item.current;
    gsap.fromTo(
      el,
      {
        height: "100%",
      },
      {
        height: 0,
        duration: 1.3,
        ease: Expo.easeInOut,
        scrollTrigger: {
          trigger: trig.current,
          start: "top center",
          end: "bottom center",
          toggleActions: "play reverse play reverse",
        },
      }
    );
  }, [item, trig]);
};
export const useGsapAboutContentRightShutterUnveil = (item, trig) => {
  useEffect(() => {
    const el = item.current;
    gsap.fromTo(
      el,
      {
        width: "100%",
      },
      {
        width: 0,
        duration: 1.3,
        ease: Expo.easeInOut,
        scrollTrigger: {
          trigger: trig.current,
          start: "top center",
          end: "bottom center",
          toggleActions: "play reverse play reverse",
        },
      }
    );
  }, [item, trig]);
};

export const useGsapGalleryImgUnveil = (arr, trig) => {
  useEffect(() => {
    const el = arr.current.map((item) => item);

    gsap.fromTo(
      el,
      {
        scale: 0,
      },
      {
        scale: 1,
        duration: 0.7,
        delay: 0.5,
        stagger: 1,
        ease: Expo.easeInOut,
        scrollTrigger: {
          trigger: trig.current,
          start: "top center",
          end: "bottom center",
          toggleActions: "play reverse play reverse",
        },
      }
    );
  }, [arr, trig]);
};

export const useGsapGalleryImgLavitate = (arr, trig) => {
  useEffect(() => {
    const el = arr.current.map((item) => item);
    gsap.fromTo(
      el,
      {
        y: 0,
      },
      {
        y: "-30%",
        ease: Expo.easeInOut,
        scrollTrigger: {
          trigger: trig.current,
          scrub: 1,
          toggleActions: "play reverse play reverse",
        },
      }
    );
  }, [arr, trig]);
};

export const useGsapFooterHeadline = (item, trig) => {
  useEffect(() => {
    const el = item.current;
    gsap.fromTo(
      el,
      {
        y: "-80%",
      },
      {
        y: 0,
        duration: 1,
        ease: Expo.easeInOut,
        scrollTrigger: {
          trigger: trig.current,
          toggleActions: "play ",
        },
      }
    );
  });
};
