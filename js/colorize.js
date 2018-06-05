'use strict';

(function () {

  window.colorizeElement = function (elem, colors, func) {
    var color = colors[window.getRandomNumber(colors.length)];
    return func(elem,color)
  }

})();