"use strict";
//Global vars
let mouseX, mouseY;
let ball = document.getElementById('ball');
let x, y, dx, dy;
//main loop(60 FPS)
requestAnimationFrame(draw);
//Draw objects

function draw() {
    
 requestAnimationFrame(draw);

    if(!x || !y) {
        x = mouseX;
        y = mouseY;
    } else {
        dx = (mouseX - x) *0.03;
        dy = (mouseY - y) *0.03;
        if(Math.abs(dx) + Math.abs(dy) < 0.1) {
            x = mouseX;
            y = mouseY;
        } else {
            x += dx;
            y += dy;
        }
    }  
    ball.style.left = x + "px";
    ball.style.top = y + "px";
}


//Events

document.addEventListener("mousemove", mouseHandler);


function mouseHandler(event) {
    console.log(event);
    mouseX = event.clientX;
    mouseY = event.clientY;
}
