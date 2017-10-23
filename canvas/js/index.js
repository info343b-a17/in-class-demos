'use strict';

/* Get a reference to the drawing context. Do not modify! */
const canvas = document.getElementById('canvas'); //reference the canvas element
const brush = canvas.getContext('2d'); //the drawing context

/* code goes here! */

brush.fillStyle = 'yellow';
brush.strokeStyle = 'black';
brush.fillRect(100,100,300,300)
brush.strokeRect(100,100,300,300)

brush.strokeStyle = 'red';
brush.lineWidth = 10;

brush.beginPath(); //start a new path
brush.moveTo(150, 275);
brush.lineTo(150, 325);
brush.lineTo(350, 325);
brush.lineTo(350, 275);
brush.stroke();

brush.fillStyle = "blue"
brush.beginPath();
brush.arc(175,175, 30, 0, 2*Math.PI);
brush.fill();

brush.beginPath();
brush.arc(325,175, 30, 0, 2*Math.PI);
brush.fill();
