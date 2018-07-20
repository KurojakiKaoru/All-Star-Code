let paddle_w, paddle_h;
let paddle_step;

let ball_x, ball_y;
let ball_x1, ball_y1;
let ball_r;
let ball_x_step, ball_y_step;
let ball_x1_step, ball_y1_step;
let ball_timer;


function setup() {
    createCanvas(1280, 720);
    paddle_h = 16;
    paddle_w = 6 * paddle_h;
    paddle_x = mouseX;
    paddle_y = height - paddle_h;
    paddle_step = 0;
    ball_r = 30;
    reset();
}

function draw() {
    background(196);
    ball_timer+= 3;
    // move paddle
    //paddle_x += (mouseX - paddle_x) * .1;
    paddle_x = mouseX;

    // is the ball hitting the right or left wall?
    if (ball_x - ball_r < 0 || ball_x + ball_r > width) {
	ball_x_step = -ball_x_step;
    }
    if (ball_x1 - ball_r < 0 || ball_x1 + ball_r > width) {
        ball_x1_step = -ball_x1_step;
        }

    // hitting the top?
    if (ball_y - ball_r < 0) {
	ball_y_step = -ball_y_step;
    }
    if (ball_y1 - ball_r < 0) {
        ball_y1_step = -ball_y1_step;
    }

    // hitting the bottom?
    if (ball_y + ball_r > height) {
        ball_y_step = +ball_y_step;
    }
        if (ball_y1 + ball_r > height) {
            ball_y1_step = +ball_y1_step;
    }
    

    // move ball by ball_x_step and ball_y_step
    ball_x = ball_x + ball_x_step;
    ball_y = ball_y + ball_y_step;
    ball_x1 = ball_x1 + ball_x1_step;
    ball_y1 = ball_y1 + ball_y1_step;

    //draw ball
    //noStroke();
    fill(255, 0, 0);
    ellipse(ball_x, ball_y, ball_r * 2, ball_r * 2);
    ellipse(ball_x1, ball_y1, ball_r * 2, ball_r * 2);
    if(ball_timer >= 500) {
        ellipse(ball_x, ball_y, ball_r * 2, ball_r * 2);
    }

    // draw paddle
    //stroke(24);
    //fill(64);
    //rect(paddle_x, paddle_y, paddle_w, paddle_h);
}

function reset() {
    ball_x = random(ball_r, width - ball_r);
    ball_y = random(ball_r, height / 2);
    ball_x_step = random(3, 10);
    ball_y_step = random(3, 10);
    ball_x1 = random(ball_r, width - ball_r);
    ball_y1 = random(ball_r, height / 2);
    ball_x1_step = random(3, 10);
    ball_y1_step = random(3, 10);
}

function keyPressed() {
    if (keyCode == LEFT_ARROW) {
	paddle_step = -10;
    } else if (keyCode == RIGHT_ARROW) {
	paddle_step = 10;
    } else if (key == ' ') {
	reset();
    }
}

function keyReleased() {
    paddle_step = 0;
}
