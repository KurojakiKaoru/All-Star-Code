let colo;
// let back = color(0,0,0);
function setup() {
	colo = color(255, 255, 255);

	createCanvas(500, 500);
	//noCursor();
	background(176);
	fill(168,0,0);
	rect(20,20,50,50);
	fill(0,168,0);
	rect(100,20,50,50);
	fill(0,0,168);
	rect(180,20,50,50);

	fill(255, 255, 255);
	rect(420,420, 50, 50);
}


//var x = 0;

// function draw() {
// 	fill(255);
// 	ellipse(mouseX, mouseY, 20, 20)
// 	// circle drawn with center at origin
// 	//x++;
// }

let shape = 0;
let change;
function mouseDragged() {
	fill(colo);
	if(shape < 1){
		ellipse(mouseX, mouseY, random(10, 20), random(10,20));
		shape = random(0,3);
	} else if(shape >= 1 && shape <2 ) {
		rect(mouseX, mouseY, random(10, 20), random(10,20));
		shape = random(0, 3);
	} else if( shape >=2 ) {
		change = random(10,20);
		triangle(mouseX - change, mouseY + change , mouseX, mouseY - change, mouseX + change, mouseY + change);
		shape = random(0,3);
	}
}

/*function mouseReleased(){
	colo = color(random(0, 255), random(0, 255), random(0, 255));
}*/

function mouseClicked(){
	// back = color(random(0, 255), random(0, 255), random(0, 255));
	// background(back);
	if(mouseY>=20 && mouseY <= 70){
		if(mouseX>=20 && mouseX <= 70){
			colo = color(168,0,0);
		}
		else if(mouseX>=100 && mouseX <= 150){
			colo = color(0,168,0);
		}
		else if(mouseX>=180 && mouseX <= 230){
			colo = color(0,0,168);
		}
	}

	if(mouseY >= 420 && mouseY <= 470 && mouseX >= 420 && mouseX <=470){
		background(176);
		fill(168,0,0);
		rect(20,20,50,50);
		fill(0,168,0);
		rect(100,20,50,50);
		fill(0,0,168);
		rect(180,20,50,50);

		fill(255, 255, 255);
		rect(420,420, 50, 50);
		colo = color(255, 255, 255);

	}
}