'use strict';

(function () {

  var colors = {
    coatColor: ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'],
    eyesColor: ['black','red','blue','yellow','green'],
    fireballColor: ['#ee4830','#30a8ee','#5ce6c0','#e848d5','#e6e848']
  };

  var setup = document.body.querySelector('.setup');
  var setupSimilar = document.body.querySelector('.setup-similar');
  var setupSimilarList = setupSimilar.querySelector('.setup-similar-list');
  var template = document.body.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

  var coat = document.querySelector('.setup-wizard .wizard-coat');
  var eyes = document.querySelector('.setup-wizard .wizard-eyes');
  var fireball = document.querySelector('.setup-fireball-wrap');
  var form = document.querySelector('.setup-wizard-form');
  
  var fillElement = function(element, color) {
    element.style.fill = color;
  };
  var changeElementBackground = function(element, color) {
    element.style.backgroundColor = color;
  };

  coat.addEventListener('click',function () {
    window.colorizeElement(coat, colors.coatColor, fillElement);
  });

  eyes.addEventListener('click',function () {
    window.colorizeElement(eyes, colors.eyesColor, fillElement);
  });

  fireball.addEventListener('click',function () {
    window.colorizeElement(fireball, colors.fireballColor, changeElementBackground);
  });

  var renderSimilarWizard = function (wizard) {
    var wizardElement = template.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;
    return wizardElement;
  };

  var renderSimilarWizards = function (wizards) {
    var similarFragment = document.createDocumentFragment();
    for(var i = 0; i < 4; i++){
      similarFragment.appendChild(renderSimilarWizard(wizards[i]))
    }
    setupSimilarList.appendChild(similarFragment);
    setupSimilar.classList.remove('hidden');
  };

  var showErrorMessage = function(message){
    var div = document.createElement('div');
    div.cssText = 'margin: 0 auto; background-color: red; text-align: center; z-index: 100; position: absolute; left: 0; right: 0;';
    div.style.fontSize = '30px';
    div.textContent = message;
    document.body.insertAdjacentElement('afterbegin',div);
  };

  window.backend.load(renderSimilarWizards,showErrorMessage);

  form.addEventListener('submit',function (evt) {
    window.backend.save(new FormData(form),function () {
      setup.classList.add('hidden')
    },showErrorMessage);
    evt.preventDefault();
  })

})();