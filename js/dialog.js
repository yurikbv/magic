'use strict';
(function () {

  var setup = document.body.querySelector('.setup');
  var setupOpen = document.body.querySelector('.setup-open');
  var setupClose = setup.querySelector('.setup-close');
  var setupUserName = setup.querySelector('.setup-user-name');
  var setupTitle = setup.querySelector('.setup-title');
  var shopElement = setup.querySelector('.setup-artifacts-shop');
  var artifactsElement = setup.querySelector('.setup-artifacts');

  var onEscPressPopup = function (event) {
    window.util.isEscEvent(event,closePopup);
  };

  var openPopup = function(){
    setup.classList.remove('hidden');
    document.addEventListener('keydown',onEscPressPopup);
    setupUserName.addEventListener('focus',function () {
      document.removeEventListener('keydown',onEscPressPopup);
    });
    setupUserName.addEventListener('blur',function () {
      document.addEventListener('keydown',onEscPressPopup);
    })
  };

  var closePopup = function(){
    setup.classList.add('hidden');
    document.removeEventListener('keydown',onEscPressPopup);
    setup.style.left = '';
    setup.style.top = '';
  };

  var getCoords = function(element){
    var box = element.getBoundingClientRect();
    return{
      top: box.top + pageYOffset,
      left: box.left + pageXOffset,
      right: box.right + pageXOffset,
      bottom: box.bottom + pageYOffset
    }
  };

  setupOpen.addEventListener('click',function () {
    openPopup();
  });

  setupOpen.querySelector('.setup-open-icon').addEventListener('keydown',function (event) {
    window.util.isEnterEvent(event,openPopup);
  });

  setupClose.addEventListener('click',function () {
    closePopup();
  });

  setupClose.addEventListener('keydown',function (event) {
    window.util.isEnterEvent(event,closePopup);
  });

  setupTitle.addEventListener('mousedown',function (event) {
    var setupCoords = getCoords(setup);
    var shiftX = event.pageX - setupCoords.left;
    var shiftY = event.pageY - setupCoords.top;
    var moveAt = function (event) {
      var left = event.pageX - shiftX;
      var top = event.pageY - shiftY;
      setup.style.left = Math.max(setup.offsetWidth / 2, left + setup.offsetWidth / 2) + 'px';
      setup.style.top = Math.max(0,top) + 'px';
      if(left  + setup.offsetWidth > document.body.offsetWidth) {
        setup.style.left = document.body.offsetWidth - setup.offsetWidth/2 + 'px';
      }
    };

    var mouseMove = function(eventMove){
      eventMove.preventDefault();
      moveAt(eventMove)
    };

    var mouseUp = function(eventUp){
      eventUp.preventDefault();
      document.removeEventListener('mousemove',mouseMove);
      document.removeEventListener('mouseup',mouseUp)
    };
    moveAt(event);
    document.addEventListener('mousemove',mouseMove);
    document.addEventListener('mouseup',mouseUp)
  });

  var dragItem = null;

  shopElement.addEventListener('dragstart',function (event) {
    if(event.target.tagName.toLowerCase() === 'img'){
      dragItem = event.target;
      event.dataTransfer.setData('text/plain', event.target.alt);
      artifactsElement.style.border = '2px dashed red';
    }
  });

  artifactsElement.addEventListener('dragover',function (event) {
    event.preventDefault();
    return false;
  });

  artifactsElement.addEventListener('dragenter',function (event) {
    if (event.target.tagName.toLowerCase() === 'img' || event.target.children.length) {
      event.target.style.backgroundColor = 'rgba(242, 43, 36,.8)';
    }else event.target.style.backgroundColor = 'rgba(242, 225, 36,.8)';
    event.preventDefault();
  });

  artifactsElement.addEventListener('drop',function (event) {
    event.target.style.backgroundColor = '';
    artifactsElement.style.border = '';
    if (event.target.tagName.toLowerCase() === 'img' || event.target.children.length){
      return false
    } else event.target.appendChild(dragItem.cloneNode(true));
    event.preventDefault();
  });

  artifactsElement.addEventListener('dragleave',function (event) {
    event.target.style.backgroundColor = '';
    event.preventDefault();
  });
})();