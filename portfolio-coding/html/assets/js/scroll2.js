gsap.registerPlugin(ScrollTrigger);

// 스크롤 스무스 ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------
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

// home animation ------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// figure rotate
const homeFig = gsap.utils.toArray("#home .figure");
gsap.set(homeFig, {
    rotation: 45
});
gsap.to(homeFig, {
    rotation: 70,
    scrollTrigger: {
        trigger: "#home",
        scrub: true,
        start: "bottom 100%",
        end: "bottom top",
        // markers: true,
    },
});
// title move
gsap.to("#home .move__text__inner", {
    yPercent: -100,
    scrollTrigger: {
        trigger: "#home",
        scrub: true,
        start: "bottom 100%",
        end: "bottom top",
        // markers: true,
    },
});

// about animation ------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// figure move
const aboutFigure = gsap.utils.toArray("#about .figure:nth-child(odd)");
gsap.to(aboutFigure, {
    yPercent: -100,
    ease: "power4",
    scrollTrigger: {
        trigger: ".about__title__section",
        scrub: 2,
        stagger: 1,
        start: "bottom bottom",
        // markers: true
    },
});

// about__me02 text animation
gsap.from(".about__me02__text__desc", {
    opacity: 0,
    yPercent: 100,
    ease: "power4.easeOut",
    scrollTrigger: {
        trigger: ".about__me02__text",
        scrub: 2,
        start: "bottom 100%",
        end: "top center",
        // markers: true
    },
});

// effect animation ----------------------------------------------------------------------------------------------------------------------------------------------------------------------
//figure move
const effectFigure = gsap.utils.toArray("#effect .figure:nth-child(odd)");
gsap.to(effectFigure, {
    yPercent: -100,
    ease: "power4",
    scrollTrigger: {
        trigger: ".effect__title__section",
        scrub: 2,
        stagger: 1,
        start: "bottom bottom",
        // markers: true
    },
});

// contact animation ------------------------------------------------------------------------------------------------------------------------------------------------------------------------
const contactFigure = gsap.utils.toArray("#contact .figure");
gsap.set(contactFigure, { y: -500, opacity: 0, rotation: 720 });
gsap.set("#contact .contactDecoInner", { opacity: 0 });
gsap.set("#contact .move__text__inner", { y: 200, opacity: 0 });
let tl = gsap.timeline({
    scrollTrigger:{
            trigger: "#contact .figure__inner",
            start: "bottom center",
            end: "bottom 10%",
            scrub: 4,
            // markers: true
        }
    })
    tl.to(contactFigure[0], {
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