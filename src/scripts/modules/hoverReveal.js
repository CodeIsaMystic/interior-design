import gsap from "gsap";

import { getTextHeight } from "../utils/utils";

export const hoverReveal = () => {
  const sections = document.querySelectorAll(".l-reveal-g__col");
  // const pageBackground = document.querySelector(".fill-background");

  sections.forEach((section, index) => {
    // get components for animation
    section.imageBlock = section.querySelector(".l-reveal-g__img");
    section.image = section.querySelector(".l-reveal-g__img img");
    section.mask = section.querySelector(".l-reveal-g__img--mask");
    section.text = section.querySelector(".l-reveal-g__txt");
    section.textCopy = section.querySelector(".l-reveal-g__txt--copy");
    section.textMask = section.querySelector(".l-reveal-g__txt--mask");
    section.textP = section.querySelector(".l-reveal-g__txt--copy p");

    // reset the initial position
    gsap.set([section.imageBlock, section.textMask], { yPercent: -101 });
    gsap.set([section.mask, section.textP], { yPercent: 100 });
    gsap.set(section.image, { scale: 1.2 });
    // gsap.set(pageBackground, {
    //   backgroundColor: section.dataset.color
    // });

    // add event listener to each section
    section.addEventListener("mouseenter", createHoverReveal);
    section.addEventListener("mouseleave", createHoverReveal);
  });
};

const createHoverReveal = (e) => {
  const { imageBlock, image, mask, text, textCopy, textMask, textP } = e.target;
  const pageBackground = document.querySelector(".fill-background");

  let tl = gsap.timeline({
    defaults: {
      duration: 0.7,
      ease: "power4.out"
    }
  });

  if (e.type === "mouseenter") {
    tl.to([mask, imageBlock, textMask, textP], { yPercent: 0 })
      .to(
        text,
        {
          y: () => -getTextHeight(textCopy) / 2
        },
        0
      )
      .to(image, { duration: 1.7, scale: 1 }, 0)
      .to(
        pageBackground,
        {
          backgroundColor: e.target.dataset.color
        },
        0
      );
  } else if (e.type === "mouseleave") {
    tl.to([mask, textP], { yPercent: 100 })
      .to([imageBlock, textMask], { yPercent: -101 }, 0)
      .to(text, { y: 0 }, 0)
      .to(image, { scale: 1.2 }, 0)
      .to(
        pageBackground,
        {
          backgroundColor: e.target.dataset.color
        },
        0
      );
  }

  return tl;
};
