'use strict';

window.renderStatistics = function (ctx, names, times) {
  ctx.fillStyle='white';
  ctx.shadowColor = 'rgba(0, 0, 0, 0.7)';
  ctx.shadowOffsetX = 10;
  ctx.shadowOffsetY = 10;
  ctx.fillRect(100, 10, 420, 270);
  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillStyle = 'black';
  ctx.shadowOffsetX = 0;
  ctx.shadowOffsetY = 0;
  ctx.fillText('Ура вы победили!', 235, 20);
  ctx.fillText('Список результатов:', 220, 40);

  var heightColumn = 150,
      widthColumn = 40,
      betweenColumns = 50,
      colorMy = 'rgba(255, 0, 0, 1)',
      colorOthers = 'blue';
  var maxTime = 0,
      maxWho;
  function countMaxTime(times) {
    for (var i = 0; i < times.length; i++) {
      if (times[i] > maxTime){
        maxTime = times[i].toFixed(2);
        maxWho = i;
      }
    }
  }
  countMaxTime(times,names);
  var indexMax = heightColumn/maxTime;

  function setColors(name) {
    return (name === 'Вы') ? colorMy : colorOthers;
  }

  function drowColums(times,names) {
    for (var i = 0,w = 150; i < times.length; i++){
      ctx.fillStyle = 'black';
      ctx.fillText(names[i],w,70);
      ctx.fillStyle =  (names[i] === names[maxWho]) ? 'black' : setColors(names[i]);
      ctx.fillRect(w, 250 , widthColumn,-(times[i] * indexMax));
      ctx.fillStyle = 'black';
      ctx.fillText(times[i].toFixed(0),w,260);
      w = w + widthColumn + betweenColumns;
    }
  }
  drowColums(times,names);
};