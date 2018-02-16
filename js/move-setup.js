'use strict';

(function () {
  var user = document.querySelector('.setup');

  var handler = document.querySelector('.setup-title');
  handler.addEventListener('mousedown',function (event) {
    event.preventDefault();
    var startCoords = {
      x: event.clientX,
      y: event.clientY
    };

    function onMouseMove(eventMove) {
      eventMove.preventDefault();
      var shift = {
        x: startCoords.x - eventMove.clientX,
        y: startCoords.y - eventMove.clientY
      };
      startCoords = {
        x: eventMove.clientX,
        y: eventMove.clientY
      };
      user.style.top = (user.offsetTop - shift.y) + 'px';
      user.style.left = (user.offsetLeft - shift.x) + 'px';
    }

    function onMouseUp(eventUp) {
      eventUp.preventDefault();
      document.removeEventListener('mousemove',onMouseMove);
      document.removeEventListener('mouseup',onMouseUp);
    }

    document.addEventListener('mousemove',onMouseMove);
    document.addEventListener('mouseup',onMouseUp)
  })
})();