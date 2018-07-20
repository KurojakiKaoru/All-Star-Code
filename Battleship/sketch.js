const number_of_boxes_in_row = 10;
const number_of_boxes_in_column = 10;

let box_width, box_height;

let numb_of_ships = 4;
let numb_of_ships_in_column = 1;

function setup(){
    
    createCanvas(700,700);
    box_height = height/ number_of_boxes_in_column;
    box_width = width / number_of_boxes_in_row;

    // Ship Resources
    let shipWidth = width / number_of_boxes_in_column;
    let shipHeight = height / number_of_boxes_in_column;
    let x1 = 0; x2 = 0; x3 = 0; x4 = 0;
    let y1 = 0; y2 = 0; y3 = 0; y4 = 0;
    let shipLocation = [[x1, y1], [x2, y2], [x3, y3], [x4, y4]];
    
    // Ship #1
    ship1 = shipLocation[0];
    ship1x = ship1[0];
    ship1y = ship1[1];
    
    // Ship #2
    ship2 = shipLocation[1];
    ship2x = ship2[0];
    ship2y = ship2[1];

    // Ship #3
    ship3 = shipLocation[2];
    ship3x = ship3[0];
    ship3y = ship3[1];

    // Ship #3
    ship4 = shipLocation[3];
    ship4x = ship4[0];
    ship4y = ship4[1];

    // Draw Boxes
    for(let i = 0; i < number_of_boxes_in_row ; i++){

        const x = box_width * i;

        for(j = 0; j < number_of_boxes_in_column; j++) {
            const y = box_height * j;
            fill(176);
            rect(x,y,box_width,box_height);
        }
    }

    // Draw Ships
    for(let i = 0; i < numb_of_ships ; i++){

        const x = shipWidth * (i + Math.floor(Math.random() * 9));

        for(j = 0; j < numb_of_ships_in_column; j++) {
            const y = shipHeight * (j + Math.floor(Math.random() * 9));
            fill('red');
            rect(x, y, shipWidth, shipHeight);
        }
    }
    
}

const customFill = function(i,y){
    const j = y/box_height;
    fill(176)
    //fill(255/number_of_boxes_in_row * (i+1), 100, 255/number_of_boxes_in_column * (j+1) );
}