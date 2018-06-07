'use strict';

(function () {

  var setupSimilar = document.body.querySelector('.setup-similar');
  var setupSimilarList = setupSimilar.querySelector('.setup-similar-list');
  var template = document.body.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

  window.render = {
    renderSimilarWizard : function (wizard) {
      var wizardElement = template.cloneNode(true);
      wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
      wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
      wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;
      return wizardElement;
    },
  renderSimilarWizards : function (wizards) {
    setupSimilarList.innerHTML = '';
    var similarFragment = document.createDocumentFragment();
    for(var i = 0; i < 4; i++){
      similarFragment.appendChild(window.render.renderSimilarWizard(wizards[i]))
    }
    setupSimilarList.appendChild(similarFragment);
    setupSimilar.classList.remove('hidden');
  }
  }
})();