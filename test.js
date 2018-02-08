'use strict';
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
// fillStyle задаёт цвет заливки,по умолчанию black
ctx.fillStyle = 'blue';
// fillRect(x1,x2,w,h) x1 и x2 - начало прямоугольника
// w и h - ширина и высота
ctx.fillRect(0, 0, 100, 50);
//createLinearGradient(x1,y1,x2,y2) точки начало и конца градиента
var gradient = ctx.createLinearGradient(0, 60, 100, 60);
// addColorStop(t , c) t - от 0 до 1(начало и конец) а с - цвет
gradient.addColorStop(0, 'blue');
gradient.addColorStop(0.5, 'green');
gradient.addColorStop(1, 'rgba(0,0,0,0)');
ctx.fillStyle = gradient;
ctx.fillRect(0, 60, 100, 50);
// createRadialGradient (x1,y2,r1,x2,y2,r2)
var gradientRadial = ctx.createRadialGradient(160, 25, 0, 160, 25, 50);
gradientRadial.addColorStop(0, 'orange');
gradientRadial.addColorStop(1, 'rgba(0,0,0,0)');
ctx.fillStyle = gradientRadial;
ctx.fillRect(110, 0, 100, 50);
ctx.strokeStyle = 'red';
ctx.strokeRect(110, 0, 100, 50);

// Корона
ctx.beginPath();
ctx.strokeStyle='red';
ctx.fillStyle='blue';
ctx.shadowColor = 'orange';
ctx.shadowOffsetX = 10;
ctx.moveTo(100,100);
ctx.lineTo(80,60);
ctx.lineTo(110,80);
ctx.lineTo(125,40);
ctx.lineTo(140,80);
ctx.lineTo(170,60);
ctx.lineTo(150,100);
ctx.closePath();
ctx.stroke();
ctx.fill();

// Texts
ctx.font = '24px Tahome';
ctx.textBaseline = 'hanging';
ctx.fillText('Hello there!',0,10);