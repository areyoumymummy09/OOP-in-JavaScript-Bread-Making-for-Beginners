export function animate() {
  gsap.registerPlugin(SplitText);

  const split = new SplitText('.hero-title', { type: "chars" });

  gsap.timeline()
      .from(split.chars, {
          duration: .1,
          autoAlpha: 0,
          stagger: { each: .1 }
      });
}
