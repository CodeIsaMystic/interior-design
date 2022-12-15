import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const mainNavigation = () => {
  const mainNavLinks = gsap.utils.toArray(".main-nav a");
  const mainNavLinksRev = gsap.utils.toArray(".main-nav a").reverse();

  mainNavLinks.forEach((link) => {
    link.addEventListener("mouseleave", (e) => {
      /* adding class */
      link.classList.add("animation-out");

      setTimeout(() => {
        /* remove class */
        link.classList.remove("animation-out");
      }, 300);
    });
  });

  function navAnimation(direction) {
    const scrollingDown = direction === 1;
    const links = scrollingDown ? mainNavLinks : mainNavLinksRev;

    return gsap.to(links, {
      duration: 0.3,
      stagger: 0.05,
      autoAlpha: () => (scrollingDown ? 0 : 1),
      y: () => (scrollingDown ? 20 : 0),
      ease: "power4.out"
    });
  }

  ScrollTrigger.create({
    start: 100,
    end: "bottom bottom-=200",
    toggleClass: {
      targets: "body",
      className: "has-scrolled"
    },
    onEnter: ({ direction }) => navAnimation(direction),
    onLeaveBack: ({ direction }) => navAnimation(direction)
    // markers: true
  });
};
