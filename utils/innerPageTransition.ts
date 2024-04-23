import gsap from "gsap";

export const enterTransition = (
  el: { querySelector: (arg0: string) => any },
  done: any
) => {
  const content = el.querySelector(".pf-contentList");
  const breadcrumb = el.querySelector(".pf-breadcrumb");
  const tl = gsap
    .timeline({ onComplete: done })
    .fromTo(
      breadcrumb,
      { autoAlpha: 0, y: 15 },
      { autoAlpha: 1, y: 0, duration: 0.3 }
    )
    .fromTo(
      content,
      { autoAlpha: 0, y: 15 },
      { autoAlpha: 1, y: 0, duration: 0.3 }
    );
};

export const leaveTransition = (el: gsap.TweenTarget, done: any) => {
  if (window.scrollY !== 0) {
    gsap.to(el, { opacity: 0, duration: 0.3, onComplete: done });
    return;
  }
  gsap.to(el, { y: "+=100vh", opacity: 0, duration: 0.3, onComplete: done });
};
