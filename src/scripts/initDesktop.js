import { headerTilt } from "./modules/tilt";
import { portfolioHover } from "./modules/hoverPortfolio";
import { fullWidthParallax, imageParallax } from "./modules/parallax";
import { mainNavigation } from "./modules/navigation";
import {
  handleIntersection,
  switchHalfWidthBackground,
  switchSectionsBg
} from "./modules/backgrounds";
import { hoverReveal } from "./modules/hoverReveal";

export const initDesktop = () => {
  // console.log("Init Desktop : Hello World");

  mainNavigation();

  headerTilt();

  switchHalfWidthBackground();
  switchSectionsBg();
  // handleIntersection();

  hoverReveal();
  portfolioHover();

  imageParallax();
  fullWidthParallax();
};
