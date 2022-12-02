const colorMenu = document.querySelectorAll(".color__menu ul li");
const figure = document.querySelectorAll(".figure");
const pointColor = document.querySelectorAll(".point__color");
const star = document.querySelectorAll(".star");
const hoverTxt = document.querySelectorAll(".hover__txt");
const contactTagTit = document.querySelectorAll(".contact__tag__tit");
const svg1 = document.querySelector(".contact__tag svg path");
const svg2 = document.querySelector(".effect__deco02 svg path");
const svg3 = document.querySelector(".effect__deco01 svg path");
let hexColor = [
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
];
let tagColor, ticketColor;

function whatColor(click) {
    console.log(click.innerHTML);
    switch (click.innerHTML) {
        case "red":
            tagColor = hexColor[0];
            ticketColor = hexColor2[0];
            colorChage("var(--pc-r)");
            break;
        case "orange":
            tagColor = hexColor[1];
            ticketColor = hexColor2[1];
            colorChage("var(--pc-o)");
            break;
        case "yellow":
            tagColor = hexColor[2];
            ticketColor = hexColor2[2];
            colorChage("var(--pc-y)");
            break;
        case "green":
            tagColor = hexColor[3];
            ticketColor = hexColor2[3];
            colorChage("var(--pc-g)");
            break;
        case "blue":
            tagColor = hexColor[4];
            ticketColor = hexColor2[4];
            colorChage("var(--pc-b)");
            break;
        case "purple":
            tagColor = hexColor[5];
            ticketColor = hexColor2[5];
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
    svg1.setAttribute("fill", tagColor);
    svg2.setAttribute("fill", tagColor);
    svg3.setAttribute("fill", ticketColor);
}

colorMenu.forEach((e) => {
    e.addEventListener("click", () => {
        colorMenu.forEach((ele) => {
            ele.classList.remove("active");
        });
        whatColor(e);
        e.classList.add("active");
    });
});
