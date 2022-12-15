//네비게이션
let scrollTop = 0;
const sections = document.querySelectorAll("section");

function scroll(){
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // 해당 섹션에 들어가면 네비게이션에 활성 표시
    sections.forEach((section, index) => {
        if(scrollTop >= section.offsetTop - 8){
            document.querySelectorAll(".navigation ul li").forEach(li => {
                li.classList.remove("active");
            });
            document.querySelector(".navigation ul li:nth-child("+(index+1)+")").classList.add("active");
        }
    })

    // about01 이미지 바꾸기
    const aboutImg = document.querySelectorAll(".about__me01__img");

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
    
    requestAnimationFrame(scroll);
}
scroll();

// 네비게이션 클릭시 이동
document.querySelectorAll(".navigation ul li a").forEach(a => {
    a.addEventListener("click", (e) => {
        e.preventDefault();
        document.querySelector(a.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});