gsap.registerPlugin(ScrollTrigger);

// 스크롤 스무스
const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smooth: true,
});
function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

// contact
const contactFigure = gsap.utils.toArray("#contact .figure");
gsap.set(contactFigure, { y: -500, opacity: 0, rotation: 720 });
gsap.set("#contact .contactDecoInner", { opacity: 0 });
gsap.set("#contact .move__text__inner", { y: 200, opacity: 0 });

let tl2 = gsap.timeline({scrollTrigger:{
      trigger: "#footer",
      start: "top center",
      end: "top 10%",
      scrub: 1,
      markers: true
    }})
    .to(contactFigure[0], {
        duration: 0.5,
        y: 0,
        opacity: 1,
        rotation: 45,
        ease: Power3.easeOut,
    })
    .to(
        contactFigure[2],
        { duration: 0.5, y: 0, opacity: 1, rotation: 45, ease: Power3.easeOut },
        "-=0.2"
    )
    .to(
        contactFigure[1],
        { duration: 0.5, y: 0, opacity: 1, rotation: 45, ease: Power3.easeOut },
        "-=0.2"
    )
    .to(
        contactFigure[4],
        { duration: 0.5, y: 0, opacity: 1, rotation: 45, ease: Power3.easeOut },
        "-=0.2"
    )
    .to(
        contactFigure[3],
        { duration: 0.5, y: 0, opacity: 1, rotation: 45, ease: Power3.easeOut },
        "-=0.2"
    )
    .to("#contact .contactDecoInner", {
        duration: 0.5,
        opacity: 1,
        ease: Power3.easeIn,
    })
    .to("#contact .move__text__inner", {
        duration: 0.7,
        y: 0,
        opacity: 1,
        ease: Power4.easeOut,
    });