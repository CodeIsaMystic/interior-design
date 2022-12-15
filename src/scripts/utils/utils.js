import gsap from "gsap/all";

export const getTextHeight = (textCopy) => {
  return textCopy.clientHeight;
};

export const removeEvent = (event, elements, cb) => {
  elements.forEach((element) => {
    element.removeEventListener(event, cb);
  });
};
export const getPortfolioOffset = (clientY) => {
  return -(
    document.querySelector(".l-portfolio_categories").clientHeight - clientY
  );
};



export const updateBodyColor = (color) => {
  gsap.to('.fill-background', {backgroundColor: color, ease: 'none'})
  // document.documentElement.style.setProperty("--bgc-fill-color", color);
};
