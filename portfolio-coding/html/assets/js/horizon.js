let mm = gsap.matchMedia();
let mm2 = gsap.matchMedia();
mm.add("(min-width: 1201px)", () => {
    const react = document.querySelector(".react__section");
    const vue = document.querySelector(".vue__section");
    const php = document.querySelector(".php__section");
    
    gsap.to(".react__section", {
        xPercent: -100,
        ease: "none",
        scrollTrigger: {
            trigger: ".react__section__inner",
            pin: true,
            scrub: 1,
            end: () => "+=" + react.offsetWidth,
            // markers: true,
        },
    });
    gsap.to(".vue__section", {
        xPercent: -100,
        ease: "none",
        scrollTrigger: {
            trigger: ".vue__section__inner",
            pin: true,
            scrub: 1,
            end: () => "+=" + vue.offsetWidth,
            // markers: true,
        },
    });
    gsap.to(".php__section", {
        xPercent: -100,
        ease: "none",
        scrollTrigger: {
            trigger: ".php__section__inner",
            pin: true,
            scrub: 1,
            end: () => "+=" + php.offsetWidth,
            // markers: true,
        },
    });
});
mm2.add("(max-width: 1200px)", () => {
    const reactFiguresE = gsap.utils.toArray("#react .figure:nth-child(even)");
    const reactFiguresO = gsap.utils.toArray("#react .figure:nth-child(odd)");
    gsap.set("#react .vertical__tit", {yPercent: 100,opacity: 0});
    gsap.to("#react .vertical__tit", {
        yPercent: -10,
        opacity: 1,
        scrollTrigger: {
            trigger: ".react__section__inner",
            scrub: 1,
        },
    });
    gsap.to(reactFiguresE, {
        xPercent: 70,
        scale: 1.2,
        scrollTrigger: {
            trigger: "#react .react__figure__inner",
            scrub: 1,
        },
    });
    gsap.to(reactFiguresO, {
        xPercent: -40,
        scale: 1.2,
        scrollTrigger: {
            trigger: "#react2 .vertical__figure__inner",
            scrub: 1,
        },
    });

    // vue
    gsap.set("#vue2 .vertical__section__inner .vertical__tit", {yPercent: 100,opacity: 0});
    gsap.to("#vue2 .vertical__section__inner .vertical__tit", {
        yPercent: -10,
        opacity: 1,
        scrollTrigger: {
            trigger: "#vue2 .vertical__section__inner",
            scrub: 1,
        },
    });
    gsap.to("#vue2 .vertical__figure__inner .figure1", {
        xPercent: 70,
        scale: 1.2,
        scrollTrigger: {
            trigger: "#vue2 .vertical__figure__inner",
            scrub: 1,
        },
    });
    gsap.to("#vue2 .vertical__figure__inner .figure2", {
        xPercent: -40,
        scale: 1.2,
        scrollTrigger: {
            trigger: "#vue2 .vertical__figure__inner",
            scrub: 1,
        },
    });
    gsap.to("#vue2 .vertical__figure__inner .figure3", {
        xPercent: 50,
        scale: 1.2,
        scrollTrigger: {
            trigger: "#vue2 .vertical__figure__inner",
            scrub: 1,
        },
    });
    gsap.to("#vue2 .vertical__figure__inner .figure4", {
        xPercent: -25,
        scale: 1.2,
        scrollTrigger: {
            trigger: "#vue2 .vertical__figure__inner",
            scrub: 1,
        },
    });

    // php
    gsap.set("#php2 .vertical__section__inner .vertical__tit", {yPercent: 100,opacity: 0});
    gsap.to("#php2 .vertical__section__inner .vertical__tit", {
        yPercent: -10,
        opacity: 1,
        scrollTrigger: {
            trigger: "#php2 .vertical__section__inner",
            scrub: 1,
        },
    });
    gsap.to("#php2 .vertical__figure__inner .figure1", {
        xPercent: 70,
        scale: 1.2,
        scrollTrigger: {
            trigger: "#php2 .vertical__figure__inner",
            scrub: 1,
        },
    });
    gsap.to("#php2 .vertical__figure__inner .figure2", {
        xPercent: -40,
        scale: 1.2,
        scrollTrigger: {
            trigger: "#php2 .vertical__figure__inner",
            scrub: 1,
        },
    });
    gsap.to("#php2 .vertical__figure__inner .figure3", {
        xPercent: 50,
        scale: 1.2,
        scrollTrigger: {
            trigger: "#php2 .vertical__figure__inner",
            scrub: 1,
        },
    });
    gsap.to("#php2 .vertical__figure__inner .figure4", {
        xPercent: -25,
        scale: 1.2,
        scrollTrigger: {
            trigger: "#php2 .vertical__figure__inner",
            scrub: 1,
        },
    });
});