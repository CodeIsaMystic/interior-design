import gsap from "gsap";

// gsap.defaults({
//   overwrite: true
// });

export const infiniteText = () => {
  const target = document.querySelector(".b-heading-xl");
  const clone = target.cloneNode(true);
  target.after(clone);

  const tl = gsap
    .to("h1", { duration: 10, xPercent: -100, ease: "none", repeat: -1 })
    .timeScale(0);

  // Define the parent when mouse event needs to be activated
  document.querySelector(".parent").addEventListener("mouseenter", () => {
    gsap.to(tl, { timeScale: 1 });
  });
  document.querySelector(".parent").addEventListener("mouseleave", () => {
    gsap.to(tl, { timeScale: 0, duration: 1.5, ease: "sine" });
  });
};
