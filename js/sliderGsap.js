const races = document.querySelector(".races");
console.log(races.offsetWidth);

function getScrollAmount() {
  let racesWidth = races.scrollWidth;
  return -(racesWidth - window.innerWidth);
}

const tween = gsap.to(races, {
  x: getScrollAmount,
  duration: 3,
  ease: "none",
});

ScrollTrigger.create({
  trigger: ".racesWrapper",
  start: "top 20%",
  end: () => `+=${getScrollAmount() * -1}`,
  pin: true,
  animation: tween,
  scrub: 1,
  invalidateOnRefresh: true,
  markers: true,
});

ScrollTrigger.observe({
  target: ".racesWrapper",

  onDrag: (self) => {
    console.warn(self.deltaX);
    gsap.to(window, { scrollTo: { y: `+=${self.deltaX * 10}` } });
  },
});
