'use strict';

(function () {

  window.colors = {
    coatColor: ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'],
    eyesColor: ['black','red','blue','yellow','green'],
    fireballColor: ['#ee4830','#30a8ee','#5ce6c0','#e848d5','#e6e848']
  };

  var setupSimilar = document.body.querySelector('.setup-similar');
  var setupSimilarList = setupSimilar.querySelector('.setup-similar-list');
  var template = document.body.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

  var similarFragment = document.createDocumentFragment();

  var wizardName = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var wizardSurname = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  var wizards = [{
    name: wizardName[window.getRandomNumber(wizardName.length)] + ' ' + wizardSurname[window.getRandomNumber(wizardSurname.length)],
    coatColor: window.colors.coatColor[window.getRandomNumber(window.colors.coatColor.length)],
    eyesColor: window.colors.eyesColor[window.getRandomNumber(window.colors.eyesColor.length)]
  }, {
    name: wizardName[window.getRandomNumber(wizardName.length)] + ' ' + wizardSurname[window.getRandomNumber(wizardSurname.length)],
    coatColor: window.colors.coatColor[window.getRandomNumber(window.colors.coatColor.length)],
    eyesColor: window.colors.eyesColor[window.getRandomNumber(window.colors.eyesColor.length)]
  }, {
    name: wizardName[window.getRandomNumber(wizardName.length)] + ' ' + wizardSurname[window.getRandomNumber(wizardSurname.length)],
    coatColor: window.colors.coatColor[window.getRandomNumber(window.colors.coatColor.length)],
    eyesColor: window.colors.eyesColor[window.getRandomNumber(window.colors.eyesColor.length)]
  }, {
    name: wizardName[window.getRandomNumber(wizardName.length)] + ' ' + wizardSurname[window.getRandomNumber(wizardSurname.length)],
    coatColor: window.colors.coatColor[window.getRandomNumber(window.colors.coatColor.length)],
    eyesColor: window.colors.eyesColor[window.getRandomNumber(window.colors.eyesColor.length)]
  }];

  var renderSimilarWizard = function (wizard) {
    var wizardElement = template.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
    return wizardElement;
  };
  var renderSimilarWizards = function () {
    for(var i = 0; i < wizards.length; i++){
      similarFragment.appendChild(renderSimilarWizard(wizards[i]))
    }
    return similarFragment;
  };

  setupSimilarList.appendChild(renderSimilarWizards());
  setupSimilar.classList.remove('hidden');

})();