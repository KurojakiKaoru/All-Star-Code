let colo = 'blue';
let colo1 = 'blue';
function setup() {
    createCanvas(600,600);
    fill(colo);
    rect(0, 0, 300, 600);
    fill(colo1);
    rect(300, 0, 300, 600);
}

function mouseClicked(){
    if(mouseY>=0 && mouseY <= 600){
		if(mouseX>=0 && mouseX <= 300){
			if(colo == 'blue'){
                colo = 'red';
            }
            else if(colo == 'red'){
                colo = 'blue';
            }
		}
		else if(mouseX>=300 && mouseX <= 600){
			if(colo1 == 'blue'){
                colo1 = 'red';
            }
            else if(colo1 == 'red'){
                colo1 = 'blue';
            }
		}
	}
	setup();
}