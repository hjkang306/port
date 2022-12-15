// 새로고침시 맨위로
window.onload = function(){
    setTimeout(function(){
        scrollTo(0,0);
    }, 100);
}

// 로딩소스 + 인트로 애니메이션
function imagesProgress(){
    let $container = $("#progress"),
        $notice = $(".notice"),
        $progressText = $container.find(".progress-text"),
        imgLoad = imagesLoaded("body"),	
        imgTotal = imgLoad.images.length,	
        imgLoaded = 0,										
        current = 0,							
        progressTimer = setInterval(updateProgress, 2000 / 60);	

        imgLoad.on("progress", function(){
            imgLoaded++;
        });

    function updateProgress(){
        let target = ( imgLoaded / imgTotal) * 100;

        current += ( target - current) * 0.1;
        $progressText.text( Math.floor(current) );
        $progressText.css("letter-spacing", 1000 - current * 10 + "px" );

        if(current >= 100){
            clearInterval(progressTimer);
            $container.animate({opacity: '0'},500,'easeInOutQuint');
            $notice.animate({opacity: '1'},1500,'easeInOutQuint');
            $(".notice__close").click(() => {
                $notice.css("pointer-events", "none");
                $("#main").css("opacity", "1");
                $notice.animate({opacity: '0'},500,'easeInOutQuint');

                // home 인트로 gsap 애니메이션
                const homeFigure = gsap.utils.toArray("#home .figure");
                gsap.set(homeFigure, { y: -500, opacity: 0, rotation: 720 });
                gsap.set("#home .homeDecoInner", { opacity: 0 });
                gsap.set("#home .move__text__inner", { y: 200, opacity: 0 });
    
                let tl = gsap.timeline();
                tl.to(homeFigure[0], {
                    duration: 0.5,
                    y: 0,
                    opacity: 1,
                    rotation: 45,
                    ease: Power3.easeOut,
                })
                .to(
                    homeFigure[2],
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
                    homeFigure[1],
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
                    homeFigure[4],
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
                    homeFigure[3],
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
                })
                .to("#header", {
                    duration: 0.7,
                    y: 0,
                    opacity: 1,
                    ease: Power4.easeOut,
                });

                //인트로가 끝난 후 body fixed 해제 
                const fixedRemove = setInterval(() => {
                    if($("#header").css("opacity") == 1){
                        setTimeout(() => {
                            clearInterval(fixedRemove);
                            document.querySelector("body").classList.remove("fixed");
                        }, 1000);
                    }
                });
            })

        }
        if(current > 99.9){
            current = 100;
        };
    };
};

imagesProgress();