gsap.registerPlugin(ScrollTrigger);
var line1 = document.getElementById("circle");
var line2 = document.getElementById("image1");
var line3 = document.getElementById("image2");
var line4 = document.getElementById("image3");
var line5 = document.getElementById("image4");

gsap.fromTo(
  line1,
  {
    x: "-100%",
    opacity: 0,
  },
  {
    x: "0%",
    opacity: 1,
    ease: "power1.out",
    scrollTrigger: {
      trigger: ".main-container",
      scrub: true,
    },
  }
);

gsap.fromTo(
  line2,
  {
    x: "-100%",
    opacity: 0,
  },
  {
    x: "0%",
    opacity: 1,
    ease: "power1.out",
    scrollTrigger: {
      trigger: ".header-image-content",
      scrub: true,
    },
  }
);
gsap.fromTo(
  line3,
  {
    x: "100%",
    opacity: 0,
  },
  {
    x: "0%",
    opacity: 1,
    ease: "power1.out",
    scrollTrigger: {
      trigger: ".article-2-container",
      scrub: true,
    },
  }
);
gsap.fromTo(
  line4,
  {
    x: "-100%",
    opacity: 0,
  },
  {
    x: "0%",
    opacity: 1,
    ease: "power1.out",
    scrollTrigger: {
      trigger: ".article-3-container",
      scrub: true,
    },
  }
);
gsap.fromTo(
  line5,
  {
    y: "-100%",
    opacity: 1,
  },
  {
    y: "0%",
    opacity: 1,
    ease: "power1.out",
    scrollTrigger: {
      trigger: ".footer-container",
      scrub: true,
    },
  }
);
