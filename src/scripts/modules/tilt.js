import gsap from "gsap";

export const moveImages = (e) => {
  const { offsetX, offsetY, target } = e;
  const { clientWidth, clientHeight } = target;

  //   console.log(offsetX, offsetY, clientWidth, clientHeight);

  const xPos = offsetX / clientWidth - 0.5;
  const yPos = offsetY / clientHeight - 0.5;

  const leftImages = gsap.utils.toArray(".l-head-g__left .l-head-g__img");
  const rightImages = gsap.utils.toArray(".l-head-g__right .l-head-g__img");

  const modifier = (index) => index * 1.2 + 0.5;

  /* Animating header gallery items */
  leftImages.forEach((image, index) => {
    gsap.to(image, {
      duration: 1.2,
      x: xPos * 20 + modifier(index),
      y: yPos * 30 + modifier(index),
      rotationX: yPos * 10,
      rotationY: xPos * 40,
      ease: "power3.out"
    });
  });
  rightImages.forEach((image, index) => {
    gsap.to(image, {
      duration: 1.2,
      x: xPos * 20 + modifier(index),
      y: yPos * 30 + modifier(index),
      rotationX: yPos * 10,
      rotationY: xPos * 40,
      ease: "power3.out"
    });
  });

  gsap.to(".c-circle-decor", {
    duration: 1.7,
    x: 100 * xPos,
    y: 120 * yPos,
    ease: "power4.out"
  });
};

export const headerTilt = () => {
  if (document.querySelector(".l-header")) {
    document
      .querySelector(".l-header")
      .addEventListener("mousemove", moveImages);
  } else {
    console.log("No l-header class for Tilt anim");
  }
};
