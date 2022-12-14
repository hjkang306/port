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