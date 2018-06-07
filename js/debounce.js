'use strict';

(function () {
  var lastTimeout;
  window.debounce = function (func) {
    if(lastTimeout) window.clearInterval(lastTimeout);
    lastTimeout = window.setInterval(function () {
      func();
    },500)
  }
})();