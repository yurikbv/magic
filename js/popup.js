'use strict';

(function(){
  var user = document.querySelector('.setup');
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = document.querySelector('.setup-close');
  var userNameInput = user.querySelector('.setup-user-name');
  var ENTER_KEYCODE = 13;
  var ESC_KEYCODE = 27;

  function popupEscPress(e) {
    if(e.keyCode === ESC_KEYCODE) {
      closePopUpSetup()
    }
  }
  function openPopUpSetup() {
    user.classList.remove('hidden');
    document.addEventListener('keydown',popupEscPress);
  }
  function closePopUpSetup() {
    user.classList.add('hidden');
    user.style.top = '';
    user.style.left = '';
    document.removeEventListener('keydown',popupEscPress);
  }
  setupOpen.addEventListener('click', openPopUpSetup);
  setupOpen.addEventListener('keydown', function (e) {
    if (e.keyCode === ENTER_KEYCODE){
      openPopUpSetup();
    }
  });
  setupClose.addEventListener('click', closePopUpSetup);
  setupClose.addEventListener('keydown', function (e) {
    if (e.keyCode === ENTER_KEYCODE){
      closePopUpSetup();
    }
  });

  function inputUserFocus() {
    setupClose.removeEventListener('click',closePopUpSetup);
    document.removeEventListener('keydown',popupEscPress);
  }
  function inputUserBlur() {
    setupClose.addEventListener('click',closePopUpSetup);
    document.addEventListener('keydown',popupEscPress);
  }
  userNameInput.addEventListener('focus',inputUserFocus);
  userNameInput.addEventListener('blur',inputUserBlur);
})();