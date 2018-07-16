function setup(){
    createCanvas(300, 300);
    background(200);
    strokeWeight(5);
    fill('red');
    ellipse(150, 150, 250, 250);
    fill('white');
    arc(150, 150, 250, 250, 0, PI, CHORD);
    strokeWeight(5);
    fill('white');
    ellipse(150,150,50,50);
    fill('black');
    ellipse(150,150,25,25)
}

//function mouseDragged() {
    //if(mouseX == 150 && mouseY = 150) {

    //}
//}