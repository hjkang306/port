gsap.registerPlugin(ScrollTrigger);

const aboutImg = document.querySelectorAll(".about__me01__img");
const about = document.querySelector("#about");
const aboutMe01 = document.querySelector(".about__me01");
let aboutTop = aboutMe01.getBoundingClientRect();
// console.log(aboutTop)

let scrollTop = 0;
// 스크롤 값 + 이미지 바뀌기
function scroll() {
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    document.querySelector(".scrollTop").innerText = Math.ceil(scrollTop);
    requestAnimationFrame(scroll);

    if (scrollTop > 2900 && scrollTop < 3500) {
        aboutImg.forEach((e) => {
            e.classList.remove("show");
        });
        aboutImg[1].classList.add("show");
    } else if (scrollTop >= 3500) {
        aboutImg.forEach((e) => {
            e.classList.remove("show");
        });
        aboutImg[2].classList.add("show");
    } else {
        aboutImg.forEach((e) => {
            e.classList.remove("show");
        });
        aboutImg[0].classList.add("show");
    }
}
scroll();

// 스무스
const fixCheckIn = setInterval(() => {
    fixCheck();
}, 1000);
function fixCheck() {
    if ($("body").hasClass("fixed") === false) {
        clearInterval(fixCheckIn);
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
    }
}

// 인트로
gsap.set("#home .figure1", { y: -500, opacity: 0, rotation: 0 });
gsap.set("#home .figure2", { y: -500, opacity: 0, rotation: 0 });
gsap.set("#home .figure3", { y: -500, opacity: 0, rotation: 0 });
gsap.set("#home .figure4", { y: -500, opacity: 0, rotation: 0 });
gsap.set("#home .figure5", { y: -500, opacity: 0, rotation: 0 });
gsap.set("#home .homeDecoInner", { opacity: 0 });
gsap.set("#home .move__text__inner", { y: 200, opacity: 0 });
setTimeout(() => {
    let tl = gsap.timeline();

    tl.to("#home .figure1", {
        duration: 0.5,
        y: 0,
        opacity: 1,
        rotation: 45,
        ease: Power3.easeOut,
    })
        .to(
            "#home .figure3",
            {
                duration: 0.5,
                y: 0,
                opacity: 1,
                rotation: 45,
                ease: Power3.easeOut,
            },
            "-=0.2"
        )
        .to(
            "#home .figure2",
            {
                duration: 0.5,
                y: 0,
                opacity: 1,
                rotation: 45,
                ease: Power3.easeOut,
            },
            "-=0.2"
        )
        .to(
            "#home .figure5",
            {
                duration: 0.5,
                y: 0,
                opacity: 1,
                rotation: 45,
                ease: Power3.easeOut,
            },
            "-=0.2"
        )
        .to(
            "#home .figure4",
            {
                duration: 0.5,
                y: 0,
                opacity: 1,
                rotation: 45,
                ease: Power3.easeOut,
            },
            "-=0.2"
        )
        .to("#home .homeDecoInner", {
            duration: 0.5,
            opacity: 1,
            ease: Power3.easeIn,
        })
        .to("#home .move__text__inner", {
            duration: 0.7,
            y: 0,
            opacity: 1,
            ease: Power4.easeOut,
        });
}, 0);

// 컨택트
gsap.set("#contact .figure1", { y: -500, opacity: 0, rotation: 0 });
gsap.set("#contact .figure2", { y: -500, opacity: 0, rotation: 0 });
gsap.set("#contact .figure3", { y: -500, opacity: 0, rotation: 0 });
gsap.set("#contact .figure4", { y: -500, opacity: 0, rotation: 0 });
gsap.set("#contact .figure5", { y: -500, opacity: 0, rotation: 0 });
gsap.set("#contact .contactDecoInner", { opacity: 0 });
gsap.set("#contact .move__text__inner", { y: 200, opacity: 0 });

// gsap.to("#contact .figure1", {
//     duration: 2,
//     y: 0,
//     opacity: 1,
//     rotation: 45,
//     scrollTrigger: {
//         ease: "power3.easeOut",
//         trigger: "#contact",
//         start: "top top",
//         markers: true
//     }
// });

let tl2 = gsap
    .timeline({
        // scrollTrigger: {
        //     ease: "Power3.easeOut",
        //     trigger: "#contact",
        //     markers: true,
        //     scrub: 1,
        // }
    })
    .to("#contact .figure1", {
        duration: 0.5,
        y: 0,
        opacity: 1,
        rotation: 45,
        ease: Power3.easeOut,
    })
    .to(
        "#contact .figure3",
        { duration: 0.5, y: 0, opacity: 1, rotation: 45, ease: Power3.easeOut },
        "-=0.2"
    )
    .to(
        "#contact .figure2",
        { duration: 0.5, y: 0, opacity: 1, rotation: 45, ease: Power3.easeOut },
        "-=0.2"
    )
    .to(
        "#contact .figure5",
        { duration: 0.5, y: 0, opacity: 1, rotation: 45, ease: Power3.easeOut },
        "-=0.2"
    )
    .to(
        "#contact .figure4",
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

// 홈 스크롤 애니메이션
const homeFig = gsap.utils.toArray("#home .figure");
gsap.set(homeFig, { rotation: 520 });

gsap.to(homeFig, {
    rotation: 360,
    scrollTrigger: {
        trigger: "#home",
        scrub: true,
        markers: true,
    },
});

// 피규어 이질감
gsap.set("#effect .figure1", { yPercent: 50 });
gsap.set("#effect .figure3", { yPercent: 50 });
gsap.set("#effect .figure5", { yPercent: 50 });
gsap.set("#effect .figure7", { yPercent: 50 });

gsap.to("#effect .figure1", {
    yPercent: -70,
    ease: "power4",
    scrollTrigger: {
        trigger: "#effect",
        scrub: 1,
    },
});
gsap.to("#effect .figure3", {
    yPercent: -70,
    ease: "power4",
    scrollTrigger: {
        trigger: "#effect",
        scrub: 1,
    },
});
gsap.to("#effect .figure5", {
    yPercent: -70,
    ease: "power4",
    scrollTrigger: {
        trigger: "#effect",
        scrub: 1,
    },
});
gsap.to("#effect .figure7", {
    yPercent: -70,
    ease: "power4",
    scrollTrigger: {
        trigger: "#effect",
        scrub: 1,
    },
});

gsap.set("#about .figure1", { yPercent: 50 });
gsap.set("#about .figure3", { yPercent: 50 });
gsap.set("#about .figure5", { yPercent: 50 });
gsap.set("#about .figure7", { yPercent: 50 });

gsap.to("#about .figure1", {
    yPercent: -70,
    ease: "power4",
    scrollTrigger: {
        trigger: "#about",
        scrub: 1,
    },
});
gsap.to("#about .figure3", {
    yPercent: -70,
    ease: "power4",
    scrollTrigger: {
        trigger: "#about",
        scrub: 1,
    },
});
gsap.to("#about .figure5", {
    yPercent: -70,
    ease: "power4",
    scrollTrigger: {
        trigger: "#about",
        scrub: 1,
    },
});
gsap.to("#about .figure7", {
    yPercent: -70,
    ease: "power4",
    scrollTrigger: {
        trigger: "#about",
        scrub: 1,
    },
});

// 세로모드
function verticalGsap(){
    if(window.innerWidth <= 1200){
        gsap.set("#react2 .vertical__section__inner .vertical__tit", {yPercent: 100,opacity: 0});
        gsap.to("#react2 .vertical__section__inner .vertical__tit", {
            yPercent: -10,
            opacity: 1,
            scrollTrigger: {
                trigger: "#react2 .vertical__section__inner",
                scrub: 1,
            },
        });
        gsap.to("#react2 .vertical__figure__inner .figure1", {
            xPercent: 70,
            scale: 1.2,
            scrollTrigger: {
                trigger: "#react2 .vertical__figure__inner",
                scrub: 1,
            },
        });
        gsap.to("#react2 .vertical__figure__inner .figure2", {
            xPercent: -40,
            scale: 1.2,
            scrollTrigger: {
                trigger: "#react2 .vertical__figure__inner",
                scrub: 1,
            },
        });
        gsap.to("#react2 .vertical__figure__inner .figure3", {
            xPercent: 50,
            scale: 1.2,
            scrollTrigger: {
                trigger: "#react2 .vertical__figure__inner",
                scrub: 1,
            },
        });
        gsap.to("#react2 .vertical__figure__inner .figure4", {
            xPercent: -25,
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
    }
}

// 명언
gsap.set(".about__me02__text__desc", { opacity: 0, yPercent: 100 });
gsap.to(".about__me02__text__desc", {
    opacity: 1,
    yPercent: 0,
    ease: "power4.easeInOut",
    scrollTrigger: {
        trigger: ".about__me02__text",
        scrub: 1,
    },
});

// gsap 가로
const sections01 = gsap.utils.toArray(".react__section");
const sections02 = gsap.utils.toArray(".vue__section");
const sections03 = gsap.utils.toArray(".php__section");
const react01 = document.querySelector(".react__section01");
const vue01 = document.querySelector(".vue__section01");
const php01 = document.querySelector(".php__section01");

gsap.to(sections01, {
    xPercent: -100 * (sections01.length - 1),
    ease: "none",
    scrollTrigger: {
        trigger: ".react__wrap",
        pin: true,
        scrub: 1,
        end: () => "+=" + react01.offsetWidth,
        // markers: true,
    },
});
gsap.to(sections02, {
    xPercent: -100 * (sections02.length - 1),
    ease: "none",
    scrollTrigger: {
        trigger: ".vue__wrap",
        pin: true,
        scrub: 1,
        end: () => "+=" + vue01.offsetWidth,
        // markers: true,
    },
});
gsap.to(sections03, {
    xPercent: -100 * (sections03.length - 1),
    ease: "none",
    scrollTrigger: {
        trigger: ".php__wrap",
        pin: true,
        scrub: 1,
        end: () => "+=" + php01.offsetWidth,
        // markers: true,
    },
});
