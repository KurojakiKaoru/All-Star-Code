let element1 = document.getElementsByClassName("right_side")
let element2 = document.getElementsByClassName("left_side");
for (let i = 0; i < element1.length; i++) {
    element1[i].style.background = '#d3c26f';
}
for (let j = 0; j < element1.length; j++) {
    element1[j].style.textShadow = "-6px 5px 2px yellow"
}
for (let a = 0; a < element2.length; a++) {
    element2[a].style.textShadow = "-6px 5px 2px yellow"
}