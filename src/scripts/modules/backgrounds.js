import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { updateBodyColor } from "../utils/utils";

gsap.registerPlugin(ScrollTrigger);

// Document background colors
const pageBackground = document.querySelector(".fill-background");
// Header layout section
const header = document.querySelector(".l-header");
// Scroll trigger sections switch bg animation
const target = document.querySelector(".js-section");
// Texts content's section
// const txtContent = document.querySelectorAll(".l-articles_txt h3");

export const switchHalfWidthBackground = () => {
  if (header) {
    header.addEventListener("mousemove", calcXpos);
  } else {
    console.log(
      "No l-header class on the page document for Switch Mouse Move BG anim"
    );
  }
};

export const switchSectionsBg = () => {
  gsap.utils.toArray(".js-bg-sections").forEach((section) => {
    // select all sections "js-bg-sections" CSS class
    ScrollTrigger.create({
      trigger: section,
      start: "top top",
      onEnter: () => updateBodyColor(section.dataset.color),
      onEnterBack: () => updateBodyColor(section.dataset.color)
    });
  });
};

export const updateBodyColor = (color) => {
  let tl = gsap.timeline();

  tl.to(pageBackground, {
    backgroundColor: color,
    ease: "none"
  });

  // .to(txtContent, { color: "red", ease: "none" });
};

// const options = {
//   root: null,
//   rootMargin: "100px",
//   threshold: 1.0
// };

export const handleIntersection = (entries) => {
  if (entries) {
    entries?.map((entry) => {
      if (entry.isIntersecting) {
        console.log(true);
        document.documentElement.style.setProperty("--bgc-fill-color", "#fff");
      } else {
        console.log(false);
        document.documentElement.style.setProperty(
          "--bgc-fill-color",
          "var(--color-content-400)"
        );
      }
    });
  }
};
const observer = new IntersectionObserver(handleIntersection);
if (target) {
  observer.observe(target);
}

// export const switchHalfWidthBackgroundSection = () => {
//   gsap.utils.toArray(".js-sections").forEach((section, index) => {
//     ScrollTrigger.create({
//       trigger: section,
//       start: "top center",
//       markers: true,
//       onEnter: () => updateBodyColor(section.dataset.color),
//       onEnterBack: () => updateBodyColor(section.dataset.color)
//     });
//   });
// };

const calcXpos = (e) => {
  const { offsetX, target } = e;
  const { clientWidth } = target;

  const xPos = offsetX / clientWidth - 0.5;

  if (xPos * 100 < 0) {
    gsap.to(pageBackground, { backgroundColor: "#c6b9b1", ease: "none" });
  } else if (xPos * 100 >= 0) {
    gsap.to(pageBackground, { backgroundColor: "#758a94", ease: "none" });
  }
};
