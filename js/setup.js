'use strict';

(function () {

  var colors = {
    coatColor: ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'],
    eyesColor: ['black','red','blue','yellow','green','orange','lightblue','purple'],
    fireballColor: ['#ee4830','#30a8ee','#5ce6c0','#e848d5','#e6e848']
  };

  var setup = document.body.querySelector('.setup');
  var coat = document.querySelector('.setup-wizard .wizard-coat');
  var eyes = document.querySelector('.setup-wizard .wizard-eyes');
  var fireball = document.querySelector('.setup-fireball-wrap');
  var form = document.querySelector('.setup-wizard-form');

  var coatColor,eyesColor;
  var wizards = [];

  var getRank = function (wizard) {
    var rank = 0;
    if(wizard.colorCoat === coatColor){
      rank += 2;
    }
    if (wizard.colorEyes === eyesColor){
      rank += 1;
    }
    return rank;
  };

  var namesComparator = function (left,right) {
    return left > right ? 1 : left < right ? -1 : 0;
  };

  var updateWizards = function () {
    window.render.renderSimilarWizards(wizards.sort(function (a, b) {
      var rankDiff = getRank(b) - getRank(a);
      if (rankDiff === 0) rankDiff = namesComparator(a.name,b.name);
      return rankDiff;
    }));
  };

  var fillElement = function(element, color) {
    if(element === coat){
      coatColor = color;
    }
    if(element === eyes){
      eyesColor = color;
    }
    window.debounce(updateWizards);
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


  var showSimilarWizards = function (data) {
    wizards = data;
    window.render.renderSimilarWizards(wizards)
  };

  var showErrorMessage = function(message){
    var div = document.createElement('div');
    div.cssText = 'margin: 0 auto; background-color: red; text-align: center; z-index: 100; position: absolute; left: 0; right: 0;';
    div.style.fontSize = '30px';
    div.textContent = message;
    document.body.insertAdjacentElement('afterbegin',div);
  };

  window.backend.load(showSimilarWizards,showErrorMessage);

  form.addEventListener('submit',function (evt) {
    window.backend.save(new FormData(form),function () {
      setup.classList.add('hidden')
    },showErrorMessage);
    evt.preventDefault();
  })

})();