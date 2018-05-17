'use strict';

(function () {
  //Меняем свои цвета
  var wizzardCoat = document.querySelector('.setup-wizard .wizard-coat');
  var wizzardEyes = document.querySelector('.setup-wizard .wizard-eyes');
  var wizzardFireball = document.querySelector('.setup-fireball-wrap');

  wizzardCoat.addEventListener('click',function () {
    wizzardCoat.style.fill = window.colors.coatColor[window.getRandomNumber(window.colors.coatColor.length)]
  });

  wizzardEyes.addEventListener('click',function () {
    wizzardEyes.style.fill = window.colors.eyesColor[window.getRandomNumber(window.colors.eyesColor.length)]
  });

  wizzardFireball.addEventListener('click',function () {
    wizzardFireball.style.backgroundColor = window.colors.fireballColor[window.getRandomNumber(window.colors.fireballColor.length)]
  });
})();