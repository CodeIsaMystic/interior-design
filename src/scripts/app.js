import gsap from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { hoverReveal, createHoverReveal } from "./modules/hoverReveal";
import { initDesktop } from "./initDesktop";

gsap.registerPlugin(ScrollTrigger);

const sectionsRevealGallery = document.querySelectorAll(".l-reveal-g__col");

window.addEventListener("load", function () {
  // console.log("APP : Hi app.js");

  /* Defining Media Querie breakpoint */
  const mq = window.matchMedia("(min-width: 768px");
  /* Add event with specific function */
  mq.addEventListener("change", handleWidthChange);

  /* First page load invoke function */
  handleWidthChange(mq);
  initDesktop();
});

/**
 *
 * @param {*} elements
 */
function resetProps(elements) {
  // console.log(elements);

  // Kill all tweens
  gsap.killTweensOf("*");

  // then clear all Props
  if (elements.length) {
    elements.forEach((element) => {
      element && gsap.set(element, { clearProps: "all" });
    });
  }
}
/**
 *
 * @param {*} mq
 */
/* Define if there is a breakpoint match */
function handleWidthChange(mq) {
  if (mq.matches) {
    hoverReveal();
  } else {
    // console.log("We are on mobile");

    sectionsRevealGallery.forEach((section) => {
      section.removeEventListener("mouseenter", hoverReveal);
      section.removeEventListener("mouseleave", hoverReveal);

      const { imageBlock, image, mask, text, textCopy, textMask, textP } =
        section;
      resetProps([imageBlock, image, mask, text, textCopy, textMask, textP]);
    });
  }
}
