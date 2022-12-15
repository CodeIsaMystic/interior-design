import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { getPortfolioOffset } from "../utils/utils";

gsap.registerPlugin(ScrollTrigger);

const allLinks = gsap.utils.toArray(".l-portfolio_categories a");
const title = document.querySelector(".l-portfolio .c-chapter");
const portfolioSection = document.querySelector(".js-portfolio-section");
const largeImage = document.querySelector(".l-portfolio_img-large");
const smallImage = document.querySelector(".l-portfolio_img-small");
const lInside = document.querySelector(".l-portfolio_img-large .img-inside");
const sInside = document.querySelector(".l-portfolio_img-small .img-inside");

export const portfolioHover = () => {
  allLinks.forEach((link) => {
    link.addEventListener("mouseenter", createPortfolioHover);
    link.addEventListener("mouseleave", createPortfolioHover);
    link.addEventListener("mousemove", createPortfolioMove);
  });
};

const createPortfolioHover = (e) => {
  if (e.type === "mouseenter") {
    // change images to the right urls
    const { color, imagelarge, imagesmall } = e.target.dataset;
    const allSiblings = allLinks.filter((item) => {
      return item !== e.target;
    });

    const tl = gsap.timeline();

    tl.set(lInside, { backgroundImage: `url(${imagelarge})` })
      .set(sInside, {
        backgroundImage: `url(${imagesmall})`
      })
      //fade in images
      .to([largeImage, smallImage], { duration: 1, autoAlpha: 1 })
      // all siblings to white and fade out
      .to(allSiblings, { color: "#fff", autoAlpha: 0.1, ease: "none" }, 0)
      // Title to white
      .to(title, { color: "#FFF", autoAlpha: 1 }, 0)
      // active link to white
      .to(e.target, { color: "#FFF", autoAlpha: 1 }, 0)
      // update page background color
      .to(portfolioSection, { backgroundColor: color, ease: "none" }, 0);
  } else if (e.type === "mouseleave") {
    const tl = gsap.timeline();

    tl
      // fade out images
      .to([largeImage, smallImage], { autoAlpha: 0 })
      // all linnks back to black color
      .to(allLinks, { color: "#000", autoAlpha: 1 }, 0)
      // Title to black
      .to(title, { color: "#000", autoAlpha: 1 }, 0)
      // change background color back to default
      // .to(portfolioSection, { backgroundColor: color, ease: "none" }, 0)
      .to(
        portfolioSection,
        {
          backgroundColor: portfolioSection.dataset.color,
          ease: "none"
        },
        0
      );
  }
};

const createPortfolioMove = (e) => {
  const { clientY } = e;

  // Moce large image
  gsap.to(largeImage, {
    duration: 1.2,
    y: getPortfolioOffset(clientY) / 12
  });
  // Moce small image
  gsap.to(smallImage, {
    duration: 1.2,
    y: -getPortfolioOffset(clientY) / 4
  });
};
