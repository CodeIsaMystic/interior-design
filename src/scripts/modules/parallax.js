import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const imageParallax = () => {
  // select all sections with-parallax CSS class
  gsap.utils.toArray(".with-parallax").forEach((section) => {
    // get the image
    const image = section.querySelector("img");

    gsap.to(image, {
      yPercent: 20,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top bottom",
        scrub: true
      }
    });
  });
};

export const fullWidthParallax = () => {
  gsap.utils.toArray(".full-width-parallax").forEach((section) => {
    section.image = section.querySelector(".full-width-parallax div img");

    gsap.set(section.image, { scale: 1.1 });

    gsap.to(section.image, {
      duration: 1.1,
      scale: 1,
      ease: "power4.out",
      scrollTrigger: {
        trigger: ".fake",
        start: "top bottom",
        scrub: true
      }
    });
  });
};
