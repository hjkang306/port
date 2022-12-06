const colorMenu = document.querySelectorAll(".color__menu ul li");
const figure = document.querySelectorAll(".figure");
const noticeTit = document.querySelector(".notice__tit");
const pointColor = document.querySelectorAll(".point__color");
const star = document.querySelectorAll(".star");
const hoverTxt = document.querySelectorAll(".hover__txt");
const contactTagTit = document.querySelectorAll(".contact__tag__tit");
const logo = document.querySelector(".logo a");
const svgLogo = document.querySelector(".logo a svg path");
const svg1 = document.querySelector(".contact__tag svg path");
const svg2 = document.querySelectorAll(".effect__deco02 svg path");
const svg3 = document.querySelectorAll(".effect__deco01 svg path");

let randomColor = Math.floor(Math.random()*10);
let colorList = [
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "purple",
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "purple",
];
let hexColor = [
    "#F44545",
    "#FF5C00",
    "#FFB800",
    "#79D869",
    "#1859FF",
    "#8F20E7",
    "#F44545",
    "#FF5C00",
    "#FFB800",
    "#79D869",
    "#1859FF",
    "#8F20E7",
];
let hexColor2 = [
    "#F44584",
    "#FF5631",
    "#FF8A00",
    "#B4D869",
    "#1890FF",
    "#6020E7",
    "#F44584",
    "#FF5631",
    "#FF8A00",
    "#B4D869",
    "#1890FF",
    "#6020E7",
];
let tagColor = hexColor[randomColor];
let ticketColor = hexColor2[randomColor];

function whatColor(click) {
    switch (click) {
        case "red":
            tagColor = hexColor[0];
            ticketColor = hexColor2[0];
            colorMenu[0].classList.add("active");
            colorChage("var(--pc-r)");
            break;
        case "orange":
            tagColor = hexColor[1];
            ticketColor = hexColor2[1];
            colorMenu[1].classList.add("active");
            colorChage("var(--pc-o)");
            break;
        case "yellow":
            tagColor = hexColor[2];
            ticketColor = hexColor2[2];
            colorMenu[2].classList.add("active");
            colorChage("var(--pc-y)");
            break;
        case "green":
            tagColor = hexColor[3];
            ticketColor = hexColor2[3];
            colorMenu[3].classList.add("active");
            colorChage("var(--pc-g)");
            break;
        case "blue":
            tagColor = hexColor[4];
            ticketColor = hexColor2[4];
            colorMenu[4].classList.add("active");
            colorChage("var(--pc-b)");
            break;
        case "purple":
            tagColor = hexColor[5];
            ticketColor = hexColor2[5];
            colorMenu[5].classList.add("active");
            colorChage("var(--pc-p)");
            break;
    }
}

function colorChage(color) {
    figure.forEach((ef) => {
        ef.style.backgroundColor = color;
    });
    pointColor.forEach((ep) => {
        ep.style.backgroundColor = color;
    });
    star.forEach((es) => {
        es.style.color = color;
    });
    hoverTxt.forEach((eh) => {
        eh.style.color = color;
    });
    contactTagTit.forEach((ec) => {
        ec.style.color = color;
    });
    svg2.forEach((es2) => {
        es2.setAttribute("fill", tagColor);
    })
    svg3.forEach((es3) => {
        es3.setAttribute("fill", ticketColor);
    })
    noticeTit.style.color = color;
    svgLogo.setAttribute("fill", tagColor);
    svg1.setAttribute("fill", tagColor);
}

whatColor(colorList[randomColor]);

colorMenu.forEach((e) => {
    e.addEventListener("click", () => {
        colorMenu.forEach((ele) => {
            ele.classList.remove("active");
        });
        whatColor(e.innerHTML);
        e.classList.add("active");
    });
});

logo.addEventListener("mouseenter", ()=>{
    svgLogo.setAttribute("fill", "#4200FF");
})
logo.addEventListener("mouseleave", ()=>{
    svgLogo.setAttribute("fill", tagColor);
})