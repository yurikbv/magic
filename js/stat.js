'use strict';

var getMaxNumberFromArray = function(times){
  var maxTime = 0;
  for (var i = 0; i < times.length; i++) {
    if (times[i] > maxTime){
      maxTime = times[i];
    }
  }
  return maxTime;
};

window.renderStatistics = function (ctx, names, times) {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(110, 20, 420, 270);
  ctx.fillStyle='white';
  ctx.fillRect(100, 10, 420, 270);
  ctx.font = '16px PT Mono';
  ctx.fillStyle = 'black';
  ctx.fillText('Ура вы победили!', 235, 30);
  ctx.fillText('Список результатов:', 220, 50);

  var heightRow = 150,
      widthRow = 40,
      indent = 50,
      colorMy = 'rgba(255, 0, 0, 1)';
  var maxTime = getMaxNumberFromArray(times);
  var indexMax = heightRow/maxTime;
  function setColors(name) {
    var colorOthers = 'rgba(0,0,0,0.' + (Math.random()*10).toFixed(0) + ')';
    return (name === 'Вы') ? colorMy : colorOthers;
  }
  for (var i = 0,w = 150; i < names.length; i++){
    ctx.fillText(names[i],w,80);
    ctx.fillStyle =  setColors(names[i]);
    ctx.fillRect(w, 250 , widthRow,-(times[i] * indexMax));
    ctx.fillStyle = 'black';
    ctx.fillText(times[i].toFixed(0),w,270);
    w += widthRow + indent;
  }
};